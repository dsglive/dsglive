<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Projectors\CustomerBalanceProjector;
use App\Projectors\TransactionCountProjector;
use Spatie\EventProjector\Facades\Projectionist;

class EventProjectorServiceProvider extends ServiceProvider
{
    public function register()
    {
        // adding a single projector
        Projectionist::addProjector(CustomerBalanceProjector::class);
        Projectionist::addProjector(TransactionCountProjector::class);

        // you can also add multiple projectors in one go
        // Projectionist::addProjectors([
        //     AnotherProjector::class,
        //     YetAnotherProjector::class
        // ]);
    }
}
