<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Dsg extends Model
{
    use SoftDeletes;

    /**
     * @var array
     */
    protected $casts = [
        'active'           => 'boolean',
        'receiving_amount' => 'float',
        'total_pieces'     => 'integer',
        'total_cube'       => 'float'
    ];

    /**
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * @var array
     */
    protected $guarded = ['id', 'deleted_at', 'created_at', 'updated_at'];

    /**
     * @var string
     */
    protected $table = 'dsg';

    public static function archived()
    {
        return self::onlyTrashed()->get();
    }

    /**
     * @return mixed
     */
    public function bin()
    {
        return $this->belongsTo(Bin::class);
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
        return $this->belongsTo(Customer::class);
    }

    /**
     * @param $id
     */
    public static function findDsgByID($id)
    {
        return self::withTrashed()
            ->where('id', $id)
            ->first();
    }

    /**
     * @return mixed
     */
    public function inspector()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return mixed
     */
    public function locator()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return mixed
     */
    public function packages()
    {
        return $this->hasMany(Package::class);
    }

    /**
     * @return mixed
     */
    public function receiver()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Query For DSG that is in receiving!
     * @param  $query
     * @return mixed
     */
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeUnknownClient($query)
    {
        return $query->where('client_id', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeUnknownCustomer($query)
    {
        return $query->where('customer_id', 1001);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeUnknownShipper($query)
    {
        return $query->where('shipper_id', 1);
    }

    /**
     * Query For DSG that is warehouse!
     * @param  $query
     * @return mixed
     */
    public function scopeWarehouse($query)
    {
        return $query->where('active', 0);
    }

    /**
     * @return mixed
     */
    public function shipper()
    {
        return $this->belongsTo(Shipper::class);
    }

    /**
     * @return mixed
     */
    public function writter()
    {
        return $this->belongsTo(User::class);
    }
}
