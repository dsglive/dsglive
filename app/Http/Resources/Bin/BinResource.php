<?php

namespace App\Http\Resources\Bin;

use Illuminate\Http\Resources\Json\Resource;

class BinResource extends Resource
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
            'id'     => $this->id,
            'code'   => $this->code,
            'active' => $this->active
        ];
    }
}
