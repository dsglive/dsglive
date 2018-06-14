<?php

namespace App\Models;

use App\Item;
use App\Rate;
use Illuminate\Database\Eloquent\Model;

class Dsg extends Model
{
    protected $table ='dsg';
    /**
     * @var array
     */
    protected $appends = ['total_cube', 'total_pieces', 'receiving_amount'];

    /**
     * @var array
     */
    protected $casts = [
        'active'       => 'boolean',
        'activated_at' => 'datetime:Y-m-d' // default is false meaning this is the warehouse
    ];

    // $dsg->items
    public function getReceivingAmountAttribute()
    {
        //'receiving_amount === sum of rate of each item';
        $receiving_amount = 0;
        $this->items()->map(function ($item) {
            $receiving_amount += $item->rates->sum('amount');
        });
        return $receiving_amount;
    }

    /**
     * @return mixed
     */
    public function getTotalCubeAttribute()
    {
        // 'total_cube === sum of volume of each item';
        return $this->items()->sum('cube');
    }

    /**
     * @return mixed
     */
    public function getTotalPiecesAttribute()
    {
        //'total_pieces === count(items)';
        return $this->items()->count();

    }

    /**
     * @return mixed
     */
    public function items()
    {
        return $this->hasMany(Item::class);
    }

    /**
     * @param  $query
     * @return mixed
     * Query For DSG that is in receiving!
     */
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
    /**
     * @param  $query
     * @return mixed
     * Query For DSG that is warehouse!
     */
    public function scopeWarehouse($query)
    {
        return $query->where('active', 0);
    }
}
