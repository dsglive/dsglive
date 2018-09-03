<?php

namespace App\Projectors;

use App\Models\User;
use App\Events\MoneyAdded;
use App\Events\MoneySubtracted;
use Spatie\EventProjector\Projectors\Projector;
use Spatie\EventProjector\Projectors\ProjectsEvents;

class CustomerBalanceProjector implements Projector
{
    use ProjectsEvents;

    /*
     * Here you can specify which event should trigger which method.
     */
    /**
     * @var array
     */
    public $handlesEvents = [
        MoneyAdded::class      => 'onMoneyAdded',
        MoneySubtracted::class => 'onMoneySubtracted'
    ];

    /**
     * @param MoneyAdded $event
     */
    public function onMoneyAdded(MoneyAdded $event)
    {
        $account = User::where('id', $event->userId)->first();

        $account->balance += $event->amount;

        $account->save();
    }

    /**
     * @param MoneySubtracted $event
     */
    public function onMoneySubtracted(MoneySubtracted $event)
    {
        $account = User::where('id', $event->userId)->first();

        $account->balance -= $event->amount;

        $account->save();

    }

    public function streamEventsBy()
    {
       return 'userId';
    }
}
