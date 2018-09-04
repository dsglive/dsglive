<?php

namespace App\Observers;

use App\Models\Package;

class PackageObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User   $user
     * @return void
     */
    public function updating(Package $package)
    {
        $package->previous_invoice_date = $package->last_invoice_at;
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User   $user
     * @return void
     */
    public function deleting(User $user)
    {
        //
    }
}
