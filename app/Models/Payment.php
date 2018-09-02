<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    /**
     * @var array
     */
    protected $casts = [
        'payment_details' => 'array',
        'amount'          => 'double',
        'date_paid'       => 'date:Y-m-d'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'date_paid'
    ];

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * @var string
     */
    protected $table = 'payments';

    /**
     * @return mixed
     */
    public function customer()
    {
        return $this->belongsTo(User::class);
    }
}
