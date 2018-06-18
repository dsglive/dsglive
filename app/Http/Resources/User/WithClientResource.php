<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\Resource;

class WithClientResource extends Resource
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
            'id' => $this->id,
            'active' => $this->active,
            'name' => $this->name ?? 'Unknown',
        ];
    }
}
