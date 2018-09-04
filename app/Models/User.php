<?php

namespace App\Models;

use App\Events\MoneyAdded;
use App\Traits\User\Scopes;
use App\Traits\User\Methods;
use App\Traits\User\Mutators;
use App\Events\MoneySubtracted;
use App\Traits\GenerateUniqueID;
use App\Traits\User\Relationships;
use Laravel\Passport\HasApiTokens;
use Spatie\MediaLibrary\Models\Media;
use Spatie\Permission\Traits\HasRoles;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements HasMedia
{
    use
    Scopes,
    Methods,
    Mutators,
    GenerateUniqueID,
    HasApiTokens,
    Relationships,
    HasRoles,
        HasMediaTrait;

    /**
     * @var mixed
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $appends = [];

    /**
     * @var array
     */
    protected $casts = [
        'active'  => 'boolean',
        'balance' => 'double'
    ];

    /**
     * The attributes that should be casted by Carbon
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'password', 'username', 'balance'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'resent', 'active',
        'roles', 'permissions',
        'role_list', 'permission_list',
        'media', 'avatar'
    ];

    /**
     * @var string
     */
    protected $table = 'users';

    /**
     * @param int $amount
     */
    public function addMoney(int $amount)
    {
        event(new MoneyAdded($this->id, $amount));
    }

    /**
     * @return mixed
     */
    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    /**
     * @return mixed
     */
    public function delivery()
    {
        return $this->hasMany(Logistic::class, 'customer_id');
    }

    /**
     * @return mixed
     */
    public function dsg()
    {
        return $this->hasMany(Dsg::class, 'customer_id');
    }

    /**
     * @return mixed
     */
    public function invoices()
    {
        return $this->hasMany(Invoice::class, 'customer_id');
    }

    /**
     * @return mixed
     */
    public function isSuperAdmin()
    {
        return $this->id < 1000;
    }

    /**
     * @return mixed
     */
    public function logistics()
    {
        return $this->hasMany(Logistic::class, 'customer_id');
    }

    /**
     * @return mixed
     */
    public function misc()
    {
        return $this->hasMany(Misc::class, 'customer_id');
    }

    /**
     * @return mixed
     */
    public function miscFees()
    {
        return $this->hasMany(Misc::class, 'customer_id');
    }

    /**
     * @return mixed
     */
    public function packages()
    {
        return $this->hasMany(Package::class, 'customer_id');
    }

    /**
     * @return mixed
     */
    public function receiving()
    {
        return $this->hasMany(Dsg::class, 'customer_id');
    }

    public function registerMediaCollections()
    {
        // enable single file
        $this
            ->addMediaCollection('avatar')
            ->singleFile();
    }

    /**
     * @param Media $media
     */
    public function registerMediaConversions(Media $media = null)
    {
        // convert user avatar to 200x200 pixel
        $this->addMediaConversion('avatar')
             ->width(200)
             ->height(200)
             ->nonQueued();
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
    public function scopeEmployeeType($query)
    {
        return $query->where('id', '!=', 1);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeExceptUnknownCustomer($query)
    {
        return $query->where('id', '!=', 1001);
    }

    /**
     * $users = App\Models\User::ofType('admin')->get();
     * @param  $query
     * @param  $type
     * @return mixed
     */
    public function scopeOfType($query, $type)
    {
        return $query->where('type', $type);
    }

    /**
     * @param  $query
     * @return mixed
     */
    public function scopeUnknownCustomer($query)
    {
        return $query->where('id', 1001);
    }

    /**
     * @return mixed
     */
    public function storage()
    {
        return $this->hasMany(Package::class, 'customer_id');
    }

    /**
     * @param int $amount
     */
    public function subtractMoney(int $amount)
    {
        event(new MoneySubtracted($this->id, $amount));
    }

    /**
     * @return mixed
     */
    public function tickets()
    {
        return $this->hasMany(Logistic::class, 'customer_id');
    }

    /**
     * @param  $id
     * @param  $pathToImage
     * @return mixed
     */
    public static function uploadAvatar($id, $pathToImage): string
    {
        $user = self::find($id);
        $user->addMedia($pathToImage)->toMediaCollection('avatar');
        return $user->getFirstMediaUrl('avatar'); // will return an url to the `$pathToImage` file
    }
}
