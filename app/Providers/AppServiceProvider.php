<?php

namespace App\Providers;

use App\Models\User;
use App\Models\Invoice;
use App\Models\Package;
use App\Observers\UserObserver;
use App\Observers\InvoiceObserver;
use App\Observers\PackageObserver;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //* Auto Generate ID
        User::observe(UserObserver::class);

        //* Ensure We Rollback Failed Jobs
        Queue::looping(function () {
            while (DB::transactionLevel() > 0) {
                DB::rollBack();
            }
        });
        Invoice::observe(InvoiceObserver::class);

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
