<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Logistic extends Model
{
    use SoftDeletes;

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
        'updated_at',
        'deleted_at'
    ];

    /**
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'updated_at', 'deleted_at'];

    /**
     * @var string
     */
    protected $table = 'logistics';

    public static function archived()
    {
        return self::onlyTrashed()->get();
    }

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
        return $this->belongsTo(User::class, 'customer_id');
    }

    /**
     * @param $id
     */
    public static function findByTicketID($id)
    {
        return self::withTrashed()
            ->where('id', $id)
            ->first();
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

    /**
     * @param  $query
     * @param  $from
     * @param  $to
     * @return mixed
     */
    public function scopeBillingCyle($query, $from, $to)
    {
        return $query->whereBetween('date_delivered', [$from, $to]);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeExceptUnknownClient($query)
    {
        return $query->where('client_id', '!=', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeExceptUnknownCustomer($query)
    {
        return $query->where('customer_id', '!=', 1001);
    }

    /**
     * @param  $query
     * @param  $from
     * @return mixed
     */
    public function scopePriorBillingCyle($query, $from)
    {
        return $query->whereDate('date_delivered', '<', $from);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeWithNoInvoiceYet($query)
    {
        return $query->where('invoiced', 0);
    }
}
