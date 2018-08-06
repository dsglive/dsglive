<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\User\ClientResource;

class CustomerResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $name = 'Unknown';

        if (optional($this->profile)->company_name) {
            $name = $this->profile->company_name;
        } else {
            $first_name = optional($this->profile)->first_name;
            $last_name  = optional($this->profile)->last_name;

            if ($first_name) {
                $name = $first_name;
            }

            if ($last_name) {
                $name = $first_name.' '.$last_name;
            }
        }

        return [
            'id'      => $this->id,
            'active'  => $this->active,
            'name'    => $this->whenLoaded('profile', function () use ($name) {
                return $name;
            }),
            'clients' => ClientResource::collection($this->whenLoaded('clients'))
        ];
    }
}
