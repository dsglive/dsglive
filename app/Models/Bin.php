<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bin extends Model
{
    /**
     * @var array
     */
    protected $casts = [
        'active' => 'boolean'
    ];

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

    /**
     * Return DSG Record By Bin Code
     * @return mixed
     */
    public function dsg()
    {
        return $this->hasMany(Dsg::class);
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
