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
