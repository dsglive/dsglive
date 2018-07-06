<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shipper extends Model
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
    protected $fillable = ['name',
        'email',
        'phone',
        'address_1',
        'address_2',
        'city',
        'state',
        'zip',
        'country',
        'notes',
        'active'
    ];

    /**
     * @var string
     */
    protected $table = 'shippers';

    /**
     * @param $email
     */
    public static function findByEmail($email)
    {
        return self::whereEmail($email)->first();
    }

    /**
     * @return mixed
     */
    public function packages()
    {
        return $this->hasMany(Package::class, 'shipper_id');
    }

    /**
     * @return mixed
     */
    public function receiving()
    {
        return $this->hasMany(Dsg::class, 'shipper_id');
    }

    /**
     * @param $query
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
    public function scopeExceptUnknownShipper($query)
    {
        return $query->where('id', '!=', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeUnknownShipper($query)
    {
        return $query->where('id', 1);
    }

    /**
     * @param $value
     */
    public function setEmailAttribute($value)
    {
        if (empty($value)) {
            $this->attributes['email'] = null;
        } else {
            $this->attributes['email'] = $value;
        }
    }
}
