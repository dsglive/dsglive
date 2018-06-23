<?php

namespace App\Http\Resources\Dsg;

use Illuminate\Http\Resources\Json\Resource;

class DsgResource extends Resource
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
            'id'                => $this->id,
            'customer_id'       => $this->customer_id,
            'customer_name'     => $this->customer_name,
            'client_id'         => $this->client_id,
            'client_name'       => $this->client_name,
            'shipper_id'        => $this->shipper_id,
            'shipper_name'      => $this->shipper_name,
            'received_by'       => $this->received_by,
            'received_by_name'  => $this->received_by_name,
            'written_by'        => $this->written_by,
            'written_by_name'   => $this->written_by_name,
            'inspected_by'      => $this->inspected_by,
            'inspected_by_name' => $this->inspected_by_name,
            'located_by'        => $this->located_by,
            'located_by_name'   => $this->located_by_name,
            'total_pieces'      => $this->total_pieces,
            'total_cube'        => $this->total_cube,
            'receiving_amount'  => $this->receiving_amount,
            'active'            => $this->active,
            'packages'          => PackageResource::collection($this->whenLoaded('packages'))
        ];
    }
}
