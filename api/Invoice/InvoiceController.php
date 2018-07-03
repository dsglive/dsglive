<?php

namespace Api\Invoice;

use Api\Controller;
use App\Models\Dsg;
use App\Models\Misc;
use App\Models\User;
use App\Models\Invoice;
use App\Models\Package;
use App\Models\Logistic;
use App\Http\Resources\Invoice\GenerateInvoiceResource;

class InvoiceController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    public function index()
    {
        return Invoice::all();
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

    /**
     * One Time Fee
     * @param  $from
     * @param  $to
     * @return mixed
     */
    public function getDeliveryFee($from, $to)
    {
        $from                           = date($from);
        $to                             = date($to);
        $delivery_fees_at_billing_cycle = Logistic::billingCyle($from, $to)
            ->withNoInvoiceYet()
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->get();

        $uninvoiced_delivery_fees_before_billing_cycle = Dsg::priorBillingCyle($from)
            ->withNoInvoiceYet()
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->get();

        $all_delivery_fees_ready_for_invoice = $delivery_fees_at_billing_cycle
            ->concat($uninvoiced_delivery_fees_before_billing_cycle);

        return $all_delivery_fees_ready_for_invoice;
    }

    /**
     * @param  $from
     * @param  $to
     * @return mixed
     */
    public function getMiscFee($from, $to)
    {
        $from = date($from);
        $to   = date($to);

        $misc_fees_at_billing_cycle = Misc::billingCyle($from, $to)
            ->withNoInvoiceYet()
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->get();

        $uninvoiced_misc_fees_before_billing_cycle = Misc::priorBillingCyle($from)
            ->withNoInvoiceYet()
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->get();

        $all_misc_fees_ready_for_invoice = $misc_fees_at_billing_cycle
            ->concat($uninvoiced_misc_fees_before_billing_cycle);

        return $all_misc_fees_ready_for_invoice;
    }

    /**
     * One Time Fee
     * @param $from
     * @param $to
     */
    public function getReceivingFee($from, $to)
    {
        $from = date($from);
        $to   = date($to);

        $receiving_fees_at_billing_cycle = Dsg::billingCyle($from, $to)
            ->withNoInvoiceYet()
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->active()
            ->get();

        $uninvoiced_receiving_fees_before_billing_cycle = Dsg::priorBillingCyle($from)
            ->withNoInvoiceYet()
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->active()
            ->get();

        $all_receiving_fees_ready_for_invoice = $receiving_fees_at_billing_cycle
            ->concat($uninvoiced_receiving_fees_before_billing_cycle);

        return $all_receiving_fees_ready_for_invoice;
    }

    /**
     * Continues Fee
     * @param  $from
     * @param  $to
     * @return mixed
     */
    public function getStorageFee($from, $to)
    {
        $from = date($from);
        $to   = date($to);

        $storage_fees_at_billing_cycle = Package::storageBillingCyle($from, $to)
            ->withNoStorageInvoiceYet()

//! we cannot mark it as it is since it is recurring , we need to think outside the box

//! all added columns are not yet added in fillable
            //! maybe we dont need anymore this inStorage
            ->inStorage()

// ->withNoReceivingInvoiceYet()
            // ->withNoDeliveryInvoiceYet()
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->active() // this means item has been associated with dsg so if it is false then we dont need it
            ->get();

        $uninvoiced_storage_fees_before_billing_cycle = Package::priorStorageBillingCyle($from)

// priorDeliveryBillingCyle($from)
        // priorReceivingBillingCyle($from)
        ->withNoStorageInvoiceYet()
        ->inStorage()
        ->exceptUnknownCustomer()
        ->exceptUnknownClient()
        ->active()
        ->get();

        $all_storage_fees_ready_for_invoice = $storage_fees_at_billing_cycle
            ->concat($uninvoiced_storage_fees_before_billing_cycle);

        return $all_storage_fees_ready_for_invoice;
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
