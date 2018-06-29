<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Misc extends Model
{
    use SoftDeletes;

    /**
     * @var array
     */
    protected $casts = [
        'invoiced'     => 'boolean',
        'amount'       => 'float',
        'invoice_date' => 'date:Y-m-d'
    ];

    /**
     * @var array
     */
    protected $dates = [
        'invoice_date',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    /**
     * @var array
     */
    protected $fillable = [
        'customer_id', 'customer_name', 'client_id', 'client_name',
        'amoount', 'notes', 'invoiced', 'invoice_date'
    ];

    /**
     * @var string
     */
    protected $table = 'misc_fee';

    /**
     * @param  $query
     * @param  $from
     * @param  $to
     * @return mixed
     */
    public function scopeBillingCyle($query, $from, $to)
    {
        return $query->whereBetween('invoice_date', [$from, $to]);
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
        return $query->whereDate('invoice_date', '<', $from);
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
