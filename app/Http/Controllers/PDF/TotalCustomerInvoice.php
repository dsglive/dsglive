<?php

namespace App\Http\Controllers\PDF;

use PDF;
use App\Models\User;
use App\Models\Client;
use App\Models\Invoice;
use App\Models\Logistic;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class TotalCustomerInvoice extends Controller
{
    /**
     * @param  Logistic $logistic
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        $invoices = Invoice::with('customer.profile')->whereBetween('date_started', [$request->date_started, $request->date_ended])->orderBy('created_at', 'DESC')->get();
        $customers = collect([]);

        foreach ($invoices as $invoice) {
            $customers[] = $this->getUsers($invoice);
        }

        $unique_customers = collect($customers->unique('customer_id')->pluck('customer_id'));
        $unique_clients = $customers->flatMap(function ($customer, $key) {
            return $customer['clients']->unique('client_id')->pluck('client_id')->flatten();
        })->unique();
        $unique_customers = $unique_customers->map(function ($item, $key) use ($customers, $unique_clients) {
            $name = '';
            $receiving_fee = 0;
            $delivery_fee = 0;
            $storage_fee = 0;
            $misc_fee = 0;

            foreach ($customers as $customer) {
                if ($item === $customer['customer_id']) {
                    $name = $customer['customer_name'];
                    $receiving_fee += $customer['receiving_fee'];
                    $delivery_fee += $customer['delivery_fee'];
                    $storage_fee += $customer['storage_fee'];
                    $misc_fee += $customer['misc_fee'];
                }
            }

            return [
                'customer_id' => $item,
                'customer_name' => $name,
                'receiving_fee' => $receiving_fee,
                'delivery_fee' => $delivery_fee,
                'storage_fee' => $storage_fee,
                'misc_fee' => $misc_fee,
                'total' => $receiving_fee + $delivery_fee + $storage_fee + $misc_fee,
            ];
        });
        $data['date_started'] = $request->date_started;
        $data['date_ended']    = $request->date_ended;
        $data['customers'] = $unique_customers;

        return $data;

        $pdf = PDF::loadView('pdf.total-customer-invoice', $data)
            ->setOption('footer-right', 'Page [page] of [toPage]')
            ->setOption('footer-left', \Carbon\Carbon::now()->format('D, M d Y'))
            ->setOption('footer-font-size', 8);
        return $pdf->inline();
    }

    /**
     * @param Invoice $invoice
     */
    public function getUsers(Invoice $invoice)
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
                'client_id' => $item['client_id'],
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
            return [
                'client_id' => $item,
                'client_name' => collect([]),
                'receiving_fee' => collect([]),
                'delivery_fee' => collect([]),
                'storage_fee' => collect([]),
                'misc_fee' => collect([]),
                'receiving_ids' => collect([]),
                'logistic_ids' => collect([]),
                'packages_ids' => collect([]),
                'misc_ids' => collect([])
            ];
        });

        foreach ($clients as $index => $id) {
            $client = Client::find($id['client_id']);
            $clients[$index]['client_name']->push($client->name);

            foreach ($misc as $key => $item) {
                if ($clients[$index]['client_id'] === $item['client_id']) {
                    $clients[$index]['misc_fee']->push($item['misc_fee']);
                    $clients[$index]['misc_ids']->push($item['misc_id']);
                }
            }

            foreach ($receiving as $key => $item) {
                if ($clients[$index]['client_id'] === $item['client_id']) {
                    $clients[$index]['receiving_fee']->push($item['receiving_fee']);
                    $clients[$index]['receiving_ids']->push($item['dsg_id']);
                }
            }

            foreach ($delivery as $key => $item) {
                if ($clients[$index]['client_id'] === $item['client_id']) {
                    $clients[$index]['delivery_fee']->push($item['delivery_fee']);
                    $clients[$index]['logistic_ids']->push($item['logistic_id']);
                }
            }

            foreach ($storage as $key => $item) {
                if ($clients[$index]['client_id'] === $item['client_id']) {
                    $clients[$index]['storage_fee']->push($item['storage_fee']);
                    $clients[$index]['packages_ids']->push($item['package_id']);
                }
            }
        }

        $user = User::with('profile')->find($invoice->customer_id);
        $first_name = optional($user->profile)->first_name;
        $last_name = optional($user->profile)->last_name;
        $name = optional($user->profile)->company_name;

        if (!$name) {
            if ($first_name) {
                $name = $first_name;
            }

            if ($last_name) {
                $name = $first_name . ' ' . $last_name;
            }
        }

        $customer = [
            'customer_id' => $invoice->customer_id,
            'customer_name' => $name,
            'receiving_fee' => $invoice->receiving_fee ?? 0,
            'delivery_fee' => $invoice->delivery_fee ?? 0,
            'storage_fee' => $invoice->storage_fee ?? 0,
            'misc_fee' => $invoice->misc_fee ?? 0,
            'clients' => collect([])
        ];
        $customer['total'] = $customer['receiving_fee'] + $customer['delivery_fee'] + $customer['storage_fee'] + $customer['misc_fee'];
        $customer['clients'] = $clients;
        return $customer;
    }

    /**
     * @param  $a
     * @param  $b
     * @param  $c
     * @param  $d
     * @return mixed
     */
    private function getClientIds($a, $b, $c, $d)
    {
        $client_ids = array_unique(array_merge($a, $b));
        $client_ids = array_unique(array_merge($client_ids, $c));
        $client_ids = array_unique(array_merge($client_ids, $d));
        return $client_ids;
    }
}
