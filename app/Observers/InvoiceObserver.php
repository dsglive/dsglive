<?php

namespace App\Observers;

use App\Models\Invoice;
use App\Models\Package;
use App\Events\MoneyAdded;
use App\Events\MoneySubtracted;

class InvoiceObserver
{
    /**
     * @param Invoice $invoice
     */
    public function creating(Invoice $invoice)
    {
        $storage = $invoice->storage;

        foreach ($storage as $item) {
            $package                        = Package::find($item['id']);
            $package->previous_invoice_date = $package->last_invoice_at;
            $package->save();
        }

        $this->addBalance($invoice->customer_id, $invoice->total);
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User   $user
     * @return void
     */
    public function deleting(Invoice $invoice)
    {
        $storage = $invoice->storage;

        foreach ($storage as $item) {
            $package                  = Package::find($item['id']);
            $package->last_invoice_at = $package->previous_invoice_date;
            $package->save();
        }

        $this->subtractBalance($invoice->customer_id, $invoice->total);
    }

    /**
     * @param $userID
     * @param $amount
     */
    private function addBalance($userID, $amount)
    {
        event(new MoneyAdded($userID, $amount));
    }

    /**
     * @param $data
     */
    private function subtractBalance($userID, $amount)
    {
        event(new MoneySubtracted($userID, $amount));
    }
}
