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
        return $this->belongsTo(User::class,'user_id');
    }

    public function setTypeAttribute($type)
    {
        $this->attributes['type'] = strtolower(str_replace(' ', '_', $type));
    }

    public function setTransactionIdAttribute($value)
    {
        $this->attributes['transaction_id'] = str_replace(' ', '', $value);
    }

    public function getTypeAttribute()
    {
        return toTitleCase($this->attributes['type']);
    }
}
