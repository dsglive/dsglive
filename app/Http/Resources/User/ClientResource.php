<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\Resource;

class ClientResource extends Resource
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
            'active'       => $this->active,
            'name'         => $this->name ?? 'Unknown',
            'email'        => $this->email,
            'phone'        => $this->phone,
            'address_1'    => $this->address_1,
            'address_2'    => $this->address_2,
            'city'         => $this->city,
            'state'        => $this->state,
            'zip'          => $this->zip,
            'country'      => $this->country,
            'notes'        => $this->notes
        ];
    }
}
