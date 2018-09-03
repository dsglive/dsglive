<?php

namespace App\Events;

use Spatie\EventProjector\ShouldBeStored;

class MoneySubtracted implements ShouldBeStored
{
    /**
     * @var string
     */
    public $userId;

    /**
     * @var int
     */
    public $amount;

    /**
     * @param string $userId
     * @param int $amount
     */
    public function __construct(int $userId, int $amount)
    {
        $this->userId = $userId;

        $this->amount = $amount;
    }
}
