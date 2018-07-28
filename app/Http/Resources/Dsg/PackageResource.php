<?php

namespace App\Http\Resources\Dsg;

use Illuminate\Support\Carbon;
use Illuminate\Http\Resources\Json\Resource;

class PackageResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        Carbon::serializeUsing(function ($carbon) {
            return $carbon->format('Y-m-d');
        });

        return [
            'id'                 => $this->id,
            'dsg_id'             => $this->dsg_id,
            'customer_id'        => $this->customer_id,
            'customer_name'      => $this->customer_name,
            'client_id'          => $this->client_id,
            'client_name'        => $this->client_name,
            'shipper_id'         => $this->shipper_id,
            'shipper_name'       => $this->shipper_name,
            'bin_id'             => $this->bin_id,
            'bin_name'           => $this->bin_name,
            'description'        => $this->description,
            'date_received'      => $this->date_received,
            'date_out'           => $this->date_out,
            'date_processed'     => $this->date_processed,
            'po_no'              => $this->po_no,
            'style_no'           => $this->style_no,
            'length'             => $this->length,
            'width'              => $this->width,
            'height'             => $this->height,
            'cube'               => $this->cube,
            'handling_type'      => $this->handling_type,
            'handling_fee'       => $this->handling_fee,
            'store_at'           => $this->store_at,
            'storage_fee'        => $this->storage_fee,
            'damaged'            => $this->damaged,
            'damage_description' => $this->damage_description,
            'repaired'           => $this->repaired,
            'date_repaired'      => $this->date_repaired,
            'delivered'          => $this->delivered,
            'date_delivered'     => $this->date_delivered,
            'notes'              => $this->notes,
            'package_images'     => $this->whenLoaded('media', $this->getPackageImages()),
            'damaged_images'     => $this->whenLoaded('media', $this->getDamagedImages())
        ];
    }
}
