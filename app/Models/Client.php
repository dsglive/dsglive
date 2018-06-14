<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'name',
        'first_name',
        'last_name',
        'email',
        'phone',
        'address_1',
        'address_2',
        'city',
        'state',
        'zip',
        'country',
        'notes'
    ];

    /**
     * @var string
     */
    protected $table = 'clients';

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

    /**
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function findByEmail($email)
    {
        return self::whereEmail($email)->first();
    }
}
