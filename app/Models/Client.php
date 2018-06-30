<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
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
        'name',
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
    protected $table = 'clients';

    /**
     * @return mixed
     */
    public function dsg()
    {
        return $this->hasMany(Dsg::class);
    }

    /**
     * @param $email
     */
    public static function findByEmail($email)
    {
        return self::whereEmail($email)->first();
    }

    /**
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
    public function scopeExceptUnknownClient($query)
    {
        return $query->where('id', '!=', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeUnknownClient($query)
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

    /**
     * @return mixed
     */
    public function tickets()
    {
        return $this->hasMany(Logistic::class);
    }

    /**
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
