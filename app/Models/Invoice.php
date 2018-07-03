<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    /**
     * @var array
     */
    protected $casts = [
        'receiving'     => 'array',
        'delivery'      => 'array',
        'storage'       => 'array',
        'misc'          => 'array',
        'receiving_fee' => 'float',
        'delivery_fee'  => 'float',
        'storage_fee'   => 'float',
        'misc_fee'      => 'float',
        'overdue'       => 'boolean',
        'date_started'  => 'date:Y-m-d',
        'date_ended'    => 'date:Y-m-d',
        'due_date'      => 'date:Y-m-d'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'date_started',
        'date_ended',
        'due_date'
    ];

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    protected $table = 'invoices';
}
