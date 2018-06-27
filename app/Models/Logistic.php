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

    public function packages()
    {
        return $this->hasMany(Package::class);
    }
}
