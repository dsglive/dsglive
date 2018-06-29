<?php

namespace Api\Package;

use Api\Controller;
use App\Models\Dsg;
use App\Models\Package;
use App\Models\Logistic;

class PackageController extends Controller
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
        $from          = date($from);
        $to            = date($to);
        $delivery_fees = Logistic::billingCyle($from, $to)
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->get();
        return $delivery_fees;
    }

    /**
     * @param  $from
     * @param  $to
     * @return mixed
     */
    public function generateMiscFee($from, $to)
    {
        $from           = date($from);
        $to             = date($to);
        $receiving_fees = Misc::billingCyle($from, $to)
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->get();
        return $receiving_fees;

    }

    /**
     * One Time Fee
     * @param $from
     * @param $to
     */
    public function generateReceivingFee($from, $to)
    {
        $from           = date($from);
        $to             = date($to);
        $receiving_fees = Dsg::billingCyle($from, $to)
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->active()
            ->get();
        return $receiving_fees;
    }

    /**
     * Continues Fee
     * @param  $from
     * @param  $to
     * @return mixed
     */
    public function generateStorageFee($from, $to)
    {
        $from           = date($from);
        $to             = date($to);
        $receiving_fees = Package::billingCyle($from, $to)
            ->exceptUnknownCustomer()
            ->exceptUnknownClient()
            ->notYetOut()
            ->active()
            ->get();
        return $receiving_fees;
    }
}
