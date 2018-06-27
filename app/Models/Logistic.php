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
        'start_time'     => 'string',
        'end_time'       => 'string',
        'total_time'     => 'float',
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
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at'];

    /**
     * @var string
     */
    protected $table = 'logistics';

    /**
     * @return mixed
     */
    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    /**
     * @return mixed
     */
    public function customer()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return mixed
     */
    public function items()
    {
        return $this->hasMany(Package::class);
    }

    /**
     * @return mixed
     */
    public function packages()
    {
        return $this->hasMany(Package::class);
    }
}
