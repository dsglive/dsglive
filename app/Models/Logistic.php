<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Logistic extends Model
{
    /**
     * @var array
     */
    protected $casts = [
        'customer_id'    => 'integer',
        'client_id'      => 'integer',
        'start_time'     => 'datetime:Y-m-d H:m',
        'end_time'       => 'datetime:Y-m-d H:m',
        'prep_time'      => 'float',
        'travel_time'    => 'float',
        'clean_up_time'  => 'float',
        'total_time'     => 'float',
        'rate'           => 'float',
        'surcharge'      => 'float',
        'total_charges'  => 'float',
        'date_delivered' => 'date:Y-m-d',
        'packages'       => 'array'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at'
    ];

    /**
     * @var string
     */
    protected $table = 'logistics';
}
