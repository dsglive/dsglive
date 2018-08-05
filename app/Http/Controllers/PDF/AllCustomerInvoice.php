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

class AllCustomerInvoice extends Controller
{
//! filter the customers by unique customer id

//! aggregate total , sum , combine array(merge) to a new $customer variable the array of customer we filter

//! filter clients by unique clients_id

//! aggreatea total , sum and combined array to new client element in the clients array
    /**
     * @param  Logistic $logistic
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        $invoices  = Invoice::with('customer.profile')->whereBetween('date_started', [$request->date_started, $request->date_ended])->orderBy('created_at', 'DESC')->get();
        $customers = collect([]);

        foreach ($invoices as $invoice) {

            $customers[] = $this->getUsers($invoice);
        }

        $unique_customers = collect($customers->unique('customer_id')->pluck('customer_id'));

        $merge_customers = [];

        foreach ($unique_customers as $id) {
            $merge_customers[$id] = $customers->whereIn('customer_id', $id)->values();
        }
        $aggregated_customers = [];

        foreach ($unique_customers as $id) {
            $name          = '';
            $receiving_fee = 0;
            $delivery_fee  = 0;
            $storage_fee   = 0;
            $misc_fee      = 0;

            $merge_clients  = [];
            $unique_clients = [];

            foreach ($merge_customers[$id] as $key => $customer) {
                $name = $customer['customer_name'];
                $receiving_fee += $customer['receiving_fee'];
                $delivery_fee += $customer['delivery_fee'];
                $storage_fee += $customer['storage_fee'];
                $misc_fee += $customer['misc_fee'];

                $unique_clients = $customer['clients']->unique('client_id')->pluck('client_id')->toArray();

                foreach ($customer['clients'] as $client) {
                    $merge_clients[] = $customer['clients']->whereIn('client_id', $client['client_id'])->values()->collapse();
                }
                $aggregated_customers[$customer['customer_id']] = [
                    'customer_id'   => $customer['customer_id'],
                    'customer_name' => $customer['customer_name'],
                    'receiving_fee' => $receiving_fee,
                    'delivery_fee'  => $delivery_fee,
                    'storage_fee'   => $storage_fee,
                    'misc_fee'      => $misc_fee,
                    'total'         => $receiving_fee + $delivery_fee + $storage_fee + $misc_fee,
                    'clients'       => $merge_clients //! go backwards!

                ];
            }
        }

        $customers = array_values($aggregated_customers);
        foreach ($customers as $customer_key => $customer) {
            $client_id            = null;
            $client_name          = null;
            $client_receiving_fee = 0;
            $client_delivery_fee  = 0;
            $client_storage_fee   = 0;
            $client_misc_fee      = 0;
            $dsg_records          = collect([]);
            $clients              = [];
            $unique_clients       = collect($customers)->flatMap(function ($customer, $key) {
                return collect($customer['clients'])->unique('client_id')->pluck('client_id')->flatten();
            });

            foreach ($customer['clients'] as $key => $value) {
                if ($unique_clients->contains($value['client_id'])) {

                    if (!isset($clients[$value['client_id']])) {
                        $clients[$value['client_id']] = [
                            'client_id'     => $value['client_id'],
                            'client_name'   => $value['client_name'][0],
                            //! something went wrong here... its adding up 3 array instead of filtering it
                            'receiving_fee' => $value['receiving_fee']->reduce(function ($carry, $item) {
                                return $carry + $item;
                            }),
                            'delivery_fee'  => $value['delivery_fee']->reduce(function ($carry, $item) {
                                return $carry + $item;
                            }),
                            'storage_fee'   => $value['storage_fee']->reduce(function ($carry, $item) {
                                return $carry + $item;
                            }),
                            'misc_fee'      => $value['misc_fee']->reduce(function ($carry, $item) {
                                return $carry + $item;
                            }),
                            'dsg_records'   => $value['receiving_ids']
                        ];
                    } else {
                        $clients[$value['client_id']]['receiving_fee'] = $clients[$value['client_id']]['receiving_fee'] += $value['receiving_fee']->reduce(function ($carry, $item) {
                            return $carry + $item;
                        });
                        $clients[$value['client_id']]['delivery_fee'] = $clients[$value['client_id']]['delivery_fee'] += $value['delivery_fee']->reduce(function ($carry, $item) {
                            return $carry + $item;
                        });
                        $clients[$value['client_id']]['storage_fee'] = $clients[$value['client_id']]['storage_fee'] += $value['storage_fee']->reduce(function ($carry, $item) {
                            return $carry + $item;
                        });
                        $clients[$value['client_id']]['misc_fee'] = $clients[$value['client_id']]['misc_fee'] += $value['misc_fee']->reduce(function ($carry, $item) {
                            return $carry + $item;
                        });
                        $clients[$value['client_id']]['dsg_records'] = collect($clients[$value['client_id']]['dsg_records'])->concat($value['receiving_ids']);
                    }
                }
            }
            $customers[$customer_key]['clients'] = array_values($clients);
        }
        return $customers;
        // id, company_name , clients -> receiving
        $pdf = PDF::loadView('pdf.all-customer-invoice', ['customers' => $customers])
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
                'misc_id'   => $item['id'],
                'client_id' => $item['client_id'],
                'misc_fee'  => $item['amount']
            ];
        });

        $a = $misc->unique('client_id')->pluck('client_id')->toArray();

        $receiving = collect($invoice->receiving);

        $receiving = $receiving->map(function ($item, $key) {
            return [
                'dsg_id'        => $item['id'],
                'client_id'     => $item['client_id'],
                'receiving_fee' => $item['receiving_amount']
            ];
        });

        $b = $receiving->unique('client_id')->pluck('client_id')->toArray();

        $delivery = collect($invoice->delivery);

        $delivery = $delivery->map(function ($item, $key) {
            return [
                'logistic_id'  => $item['id'],
                'client_id'    => $item['client_id'],
                'delivery_fee' => $item['total_charges']
            ];
        });

        $c = $delivery->unique('client_id')->pluck('client_id')->toArray();

        $storage = collect($invoice->storage);

        $storage = $storage->map(function ($item, $key) {
            $rate = $item['storage_fee'] * $item['cube'];
            $days = Carbon::parse($item['date_delivered'])->diffInDays($item['date_received']);

            return [
                'package_id'  => $item['id'],
                'client_id'   => $item['client_id'],
                'storage_fee' => $rate * $days
            ];
        });

        $d     = $storage->unique('client_id')->pluck('client_id')->toArray();
        $merge = collect($this->getClientIds($a, $b, $c, $d));

        $clients = $merge->map(function ($item, $key) {
            return [
                'client_id'     => $item,
                'client_name'   => collect([]),
                'receiving_fee' => collect([]),
                'delivery_fee'  => collect([]),
                'storage_fee'   => collect([]),
                'misc_fee'      => collect([]),
                'receiving_ids' => collect([]),
                'logistic_ids'  => collect([]),
                'packages_ids'  => collect([]),
                'misc_ids'      => collect([])
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

        $user       = User::with('profile')->find($invoice->customer_id);
        $first_name = optional($user->profile)->first_name;
        $last_name  = optional($user->profile)->last_name;
        $name       = optional($user->profile)->company_name;

        if (!$name) {
            if ($first_name) {
                $name = $first_name;
            }

            if ($last_name) {
                $name = $first_name.' '.$last_name;
            }
        }

        $customer = [
            'customer_id'   => $invoice->customer_id,
            'customer_name' => $name,
            'receiving_fee' => $invoice->receiving_fee ?? 0,
            'delivery_fee'  => $invoice->delivery_fee ?? 0,
            'storage_fee'   => $invoice->storage_fee ?? 0,
            'misc_fee'      => $invoice->misc_fee ?? 0,
            'clients'       => collect([])
        ];
        $customer['total']   = $customer['receiving_fee'] + $customer['delivery_fee'] + $customer['storage_fee'] + $customer['misc_fee'];
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
