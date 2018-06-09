<?php

namespace App\Models;

use App\Traits\User\Scopes;
use App\Traits\User\Methods;
use App\Traits\User\Mutators;
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
    protected $appends = ['avatar'];

    /**
     * @var array
     */
    protected $casts = [
        'active' => 'boolean'
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
        'password', 'username'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    /**
     * @var string
     */
    protected $table = 'users';

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
