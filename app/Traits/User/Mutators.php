<?php

namespace App\Traits\User;

use App\Models\Permission;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

trait Mutators
{
    public function getAvatarAttribute()
    {
        // use gravatar as default if no avatar is saved by user
        return empty($this->getFirstMediaUrl('avatar'))
            ? 'https://www.gravatar.com/avatar/'.md5(Str::lower($this->email)).'.jpg?s=200&d=mm'
            : url($this->getFirstMediaUrl('avatar'));
    }

    /**
     * Set Password Hash
     *
     */
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = Hash::make($password);
    }

    /**
     * Set Username To Correct Format
     *
     */
    public function setUsernameAttribute($username)
    {
        $this->attributes['username'] = strtolower(str_replace(' ', '_', $username));
    }
}
