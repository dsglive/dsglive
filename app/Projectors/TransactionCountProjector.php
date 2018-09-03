<?php
namespace App\Projectors;

use App\Events\MoneyAdded;
use App\Events\MoneySubtracted;
use App\Models\TransactionCount;
use Spatie\EventProjector\Projectors\Projector;
use Spatie\EventProjector\Projectors\ProjectsEvents;

class TransactionCountProjector implements Projector
{
    use ProjectsEvents;

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
        $transactionCounter = TransactionCount::firstOrCreate(['user_id' => $event->userId]);

        $transactionCounter->count += 1;

        $transactionCounter->save();
    }

    /**
     * @param MoneySubtracted $event
     */
    public function onMoneySubtracted(MoneySubtracted $event)
    {
        $transactionCounter = TransactionCount::firstOrCreate(['user_id' => $event->userId]);

        $transactionCounter->count += 1;

        $transactionCounter->save();
    }

    public function streamEventsBy()
    {
       return 'userId';
    }
}
