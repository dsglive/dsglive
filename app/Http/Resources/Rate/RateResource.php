<?php

namespace App\Http\Resources\Rate;

use Illuminate\Http\Resources\Json\Resource;

class RateResource extends Resource
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
            'name' => $this->name ?? 'Custom Rate',
            'amount' => $this->amount,
            'type' => $this->type,
            'active' => $this->active,
        ];
    }
}
