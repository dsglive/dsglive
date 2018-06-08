<?php

namespace App\Traits\User;

use App\Models\Profile;

trait Relationships
{
    /**
     * Profile Relationship
     *
     */
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }
}
