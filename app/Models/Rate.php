<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Rate extends Model
{
    use SoftDeletes;

    /**
     * @var array
     */
    protected $casts = [
        'active' => 'boolean',
        'amount' => 'float'
    ];

    /**
     * @var array
     */
    protected $dates = ['deleted_at'];

    public static function archived()
    {
        return self::onlyTrashed()->get();
    }

    /**
     * @param $id
     * useful for finding rate that has been archived!
     */
    public static function findRate($id)
    {
        return self::withTrashed()
            ->where('id', $id)
            ->get();
    }

    /**
     * $rates = App\Rate::ofType('storage')->get();
     * @param  $query
     * @param  $type
     * @return mixed
     */
    public function scopeOfType($query, $type)
    {
        return $query->where('type', $type);
    }
}
