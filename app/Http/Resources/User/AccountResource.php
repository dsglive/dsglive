<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\Resource;

class AccountResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'           => $this->id,
            'username'     => $this->username,
            'email'        => optional($this->profile)->email,
            'avatar'       => $this->avatar,
            'company_name' => optional($this->profile)->company_name,
            'first_name'   => optional($this->profile)->first_name,
            'last_name'    => optional($this->profile)->last_name,
            'phone'        => optional($this->profile)->phone,
            'address_1'    => optional($this->profile)->address_1,
            'address_2'    => optional($this->profile)->address_2,
            'city'         => optional($this->profile)->city,
            'state'        => optional($this->profile)->state,
            'zip'          => optional($this->profile)->zip,
            'country'      => optional($this->profile)->country,
            'notes'        => optional($this->profile)->notes,
            'roles'        => $this->role_list
        ];
    }
}
