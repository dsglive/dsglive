<?php

namespace Api\Invoice;

use Api\Controller;
use App\Models\Dsg;
use App\Models\Misc;
use App\Models\User;
use App\Models\Invoice;
use App\Models\Package;
use App\Models\Logistic;
use Illuminate\Support\Carbon;
use App\Http\Resources\Invoice\GenerateInvoiceResource;
use Illuminate\Auth\EloquentUserProvider;

class InvoiceController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    /**
     * @return mixed
     */
    public function generateInvoice()
    {
        $dates = request()->validate([
            'date_started' => 'required',
            'date_ended'   => 'required'
        ]);
        $customers = User::with(['profile', 'receiving' => function ($query) use ($dates) {
            return $query->where('invoiced', false)
                         ->where('active', true)
                         ->where('client_id', '!=', 1)
                         ->whereBetween('date_processed', [$dates['date_started'], $dates['date_ended']])
                         ->whereDate('date_processed', '<=', $dates['date_ended']);
        }, 'delivery' => function ($query) use ($dates) {
            return $query->where('invoiced', false)
                         ->where('client_id', '!=', 1)
                         ->whereBetween('date_delivered', [$dates['date_started'], $dates['date_ended']])
                         ->whereDate('date_delivered', '<=', $dates['date_ended']);
        }, 'misc' => function ($query) use ($dates) {
            return $query->where('invoiced', false)
                         ->where('client_id', '!=', 1)
                         ->whereBetween('invoice_date', [$dates['date_started'], $dates['date_ended']])
                         ->whereDate('invoice_date', '<=', $dates['date_ended']);
        }, 'storage' => function ($query) use ($dates) {
            return $query->where('invoiced', false)
                         ->whereNotNull('date_delivered')
                         ->where('client_id', '!=', 1);
        }

        ])
            ->role('customer')->exceptUnknownCustomer()->get();
        return GenerateInvoiceResource::collection($customers);
    }


    public function index()
    {
        return Invoice::all();
    }

    public function view(Invoice $invoice)
    {
        $misc = collect($invoice->misc);

        $misc = $misc->map(function ($item, $key) {
            return [
                'misc_id' => $item['id'],
                'client_id' => $item['client_id'],
                'misc_fee' => $item['amount']
            ];
        });

        $a = $misc->unique('client_id')->pluck('client_id')->toArray();

        $receiving = collect($invoice->receiving);

        $receiving = $receiving->map(function ($item, $key) {
            return [
                'dsg_id' => $item['id'],
                'client_id' => $item['client_id'],
                'receiving_fee' => $item['receiving_amount']
            ];
        });

        $b = $receiving->unique('client_id')->pluck('client_id')->toArray();

        $delivery = collect($invoice->delivery);

        $delivery = $delivery->map(function ($item, $key) {
            return [
                'logistic_id' => $item['id'],
                'client_id'            => $item['client_id'],
                'delivery_fee' => $item['total_charges']
            ];
        });

        $c = $delivery->unique('client_id')->pluck('client_id')->toArray();

        $storage = collect($invoice->storage);

        $storage = $storage->map(function ($item, $key) {
            $rate = $item['storage_fee'] * $item['cube'];
            $days = Carbon::parse($item['date_delivered'])->diffInDays($item['date_received']);

            return [
                'package_id' => $item['id'],
                'client_id' => $item['client_id'],
                'storage_fee' => $rate * $days
            ];
        });

        $d = $storage->unique('client_id')->pluck('client_id')->toArray();
        $merge = collect($this->getClientIds($a, $b, $c, $d));

        $clients = $merge->map(function ($item, $key) {

            return [$item => [
                    'receiving_fee' => collect([]),
                    'delivery_fee' => collect([]),
                    'storage_fee' => collect([]),
                    'misc_fee'  => collect([]),
                    'receiving_ids' => collect([]),
                    'logistic_ids' => collect([]),
                    'packages_ids' => collect([]),
                    'misc_ids' => collect([])
            ]
            ];
        });

        foreach ($clients as $index => $id) {
            foreach ($misc as $key => $item) {
                if (isset($clients[$index][$item['client_id']]['misc_fee'])) {
                    $clients[$index][$item['client_id']]['misc_fee']->push($item['misc_fee']);
                    $clients[$index][$item['client_id']]['misc_ids']->push($item['misc_id']);
                }
            }
            
            foreach ($receiving as $key => $item) {
                if (isset($clients[$index][$item['client_id']]['receiving_fee'])) {
                    $clients[$index][$item['client_id']]['receiving_fee']->push($item['receiving_fee']);
                    $clients[$index][$item['client_id']]['receiving_ids']->push($item['dsg_id']);
                }
            }
            
            foreach ($delivery as $key => $item) {
                if (isset($clients[$index][$item['client_id']]['delivery_fee'])) {
                    $clients[$index][$item['client_id']]['delivery_fee']->push($item['delivery_fee']);
                    $clients[$index][$item['client_id']]['logistic_ids']->push($item['logistic_id']);
                }
            }

            foreach ($storage as $key => $item) {
                if (isset($clients[$index][$item['client_id']]['storage_fee'])) {
                    $clients[$index][$item['client_id']]['storage_fee']->push($item['storage_fee']);
                    $clients[$index][$item['client_id']]['packages_ids']->push($item['package_id']);
                }
            }
        }
        $customer = [
            'customer_id' => $invoice->customer_id,
            'receiving_fee' => $invoice->receiving_fee,
            'delivery_fee' => $invoice->delivery_fee,
            'storage_fee' => $invoice->storage_fee,
            'misc_fee' => $invoice->misc_fee
        ];
        return response()->json(['clients' => $clients, 'customer' => $customer]);
    }

    private function getClientIds($a, $b, $c, $d)
    {
        $client_ids = array_unique(array_merge($a, $b));
        $client_ids = array_unique(array_merge($client_ids, $c));
        $client_ids = array_unique(array_merge($client_ids, $d));
        return $client_ids;
    }
    public function delete(Invoice $invoice)
    {
        $receiving = collect($invoice->receiving)->pluck('id')->toArray();
        Dsg::whereIn('id', $receiving)->update(['invoiced' => false]);
        $delivery = collect($invoice->delivery)->pluck('id')->toArray();
        Logistic::whereIn('id', $delivery)->update(['invoiced' => false]);
        $storage = collect($invoice->storage)->pluck('id')->toArray();
        Package::whereIn('id', $storage)->update(['invoiced' => false]);
        $misc = collect($invoice->misc)->pluck('id')->toArray();
        Misc::whereIn('id', $misc)->update(['invoiced' => false]);
        $invoice->delete();
        return response()->json(['message' => 'Invoice Deleted!']);
    }
    public function massCreateInvoice()
    {
        $customers = request()->all();
        $customers = collect($customers);
        $ids       = $customers->pluck('customer_id')->toArray();

        foreach ($customers as $index => $customer) {
            $dsg = collect($customers[$index]['receiving'])->pluck('id')->toArray();
            Dsg::whereIn('id', $dsg)->update(['invoiced' => true]);
            $delivery = collect($customers[$index]['delivery'])->pluck('id')->toArray();
            Logistic::whereIn('id', $delivery)->update(['invoiced' => true]);
            $misc = collect($customers[$index]['misc'])->pluck('id')->toArray();
            Misc::whereIn('id', $misc)->update(['invoiced' => true]);
            $storage = collect($customers[$index]['storage'])->pluck('id')->toArray();
            Package::whereIn('id', $storage)->update(['invoiced' => true]);
        }

        foreach ($customers as $customer) {
            if (count($customer['receiving']) > 0 || count($customer['delivery']) > 0 || count($customer['misc']) > 0 || count($customer['storage']) > 0) {
                Invoice::firstOrCreate([
                    'customer_name' => $customer['customer_name'],
                    'date_started'  => $customer['date_started'],
                    'date_ended'    => $customer['date_ended']
                ], $customer);
            }
        }

        return response()->json(['message' => 'Mass Invoice Creation Done!']);
    }
}
