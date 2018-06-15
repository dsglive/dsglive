<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bin extends Model
{
    use SoftDeletes;

    /**
     * @var array
     */
    protected $casts = [
        'active' => 'boolean'
    ];

    /**
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * @var array
     */
    protected $fillable = [
        'code',
        'active'
    ];

    /**
     * @var string
     */
    protected $table = 'bins';

    public static function archived()
    {
        return self::onlyTrashed()->get();
    }

    /**
     * Return DSG Record By Bin Code
     * @return mixed
     */
    public function dsg()
    {
        return $this->hasMany(Dsg::class);
    }

    /**
     * @param $id
     */
    public static function findBin($id)
    {
        return self::withTrashed()
            ->where('id', $id)
            ->get();
    }

    /**
     * @param $code
     */
    public static function findBinByCode($code)
    {
        return self::withTrashed()
            ->where('code', $code)
            ->get();
    }

    /**
     * @param $code
     */
    public static function findByCode($code)
    {
        return self::whereCode($code)->first();
    }

    /**
     * Set Code To Correct Format
     *
     */
    public function setCodeAttribute($code)
    {
        $this->attributes['code'] = strtoupper(str_replace(' ', '', $code));
    }
}
