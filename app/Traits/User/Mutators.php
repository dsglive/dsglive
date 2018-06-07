<?php

namespace App\Traits\User;

use Illuminate\Support\Str;
use App\Models\Permission;
use Illuminate\Support\Facades\Hash;

trait Mutators
{
    /**
     * Set Email To Correct Format
     *
     */
    public function setEmailAttribute($email)
    {
        $this->attributes['email'] = $email;
    }
    /**
     * Set Username To Correct Format
     *
     */
    public function setUsernameAttribute($username)
    {
        $this->attributes['username'] = strtolower(str_replace(' ', '_', $username));
    }
    /**
     * Add Default Avatar
     *
     */
    public function getPhotoUrlAttribute($value)
    {
        return empty($value) ? 'https://www.gravatar.com/avatar/'.md5(Str::lower($this->email)).'.jpg?s=200&d=mm' : url($value);
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
     * Get Can Attribute
     *
     */
    public function getCanAttribute()
    {
        $permissions = [];
        foreach (Permission::all() as $permission) {
            if ($this->can($permission->name)) {
                $permissions[$permission->name] = true;
            } else {
                $permissions[$permission->name] = false;
            }
        }
        return $permissions;
    }
    /**
     * Get All Permissions Attribute
     *
     */
    public function getAllPermissionsAttribute()
    {
        return $this->getAllPermissions()->pluck('name')->toArray();
    }

    /**
     * Get Can Attribute
     *
     */
    public function getAllRolesAttribute()
    {
        
        return $this->getRoleNames();
    }
}