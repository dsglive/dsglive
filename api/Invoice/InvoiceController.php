<?php

namespace Api\Invoice;

use Api\Controller;
use App\Models\Dsg;
use App\Models\Misc;
use App\Models\Package;
use App\Models\Logistic;

class InvoiceController extends Controller
{
    public function __construct()
    {
        // $this->middleware(['role:admin|warehouse']);
    }

    /**
     * One Time Fee
     * @param  $from
     * @param  $to
     * @return mixed
     */
    public function generateDeliveryFee($from, $to)
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

    public function generateInvoice()
    {
        $dates = request()->validate([
            'date_started' => 'required',
            'date_ended'   => 'required'
        ]);
        $data                  = [];
        $data['receiving_fee'] = $this->generateReceivingFee($dates['date_started'], $dates['date_ended']);
        $data['misc_fee']      = $this->generateMiscFee($dates['date_started'], $dates['date_ended']);
        $data['storage_fee']   = $this->generateStorageFee($dates['date_started'], $dates['date_ended']);
        $data['delivery_fee']  = $this->generateDeliveryFee($dates['date_started'], $dates['date_ended']);
        return response()->json(['data' => $data]);
    }

    /**
     * @param  $from
     * @param  $to
     * @return mixed
     */
    public function generateMiscFee($from, $to)
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
    public function generateReceivingFee($from, $to)
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
    public function generateStorageFee($from, $to)
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
}
