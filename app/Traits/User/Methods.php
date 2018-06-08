<?php

namespace App\Traits\User;

trait Methods
{
    /**
     * Add findByUsername Method
     *
     */
    public static function findByUsername($username)
    {
        return self::whereUsername($username)->first();
    }

    /**
     * Add findForPassport Method
     *
     */
    public function findForPassport($identifier)
    {
        return $this->where('username', $identifier)->first();
    }

    /**
     * Add isAdmin Method
     *
     */
    public function isAdmin()
    {
        return $this->hasRole('admin');
    }

    /**
     * Add Last Method
     *
     */
    public static function last()
    {
        return self::latest()->first();
    }
}
