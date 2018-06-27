<?php

namespace App\Http\Resources\Logistic;

use Illuminate\Http\Resources\Json\Resource;

class LogisticResource extends Resource
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
            'id'             => $this->id,
            'customer_id'    => $this->customer_id,
            'customer_name'  => $this->customer_name,
            'client_id'      => $this->client_id,
            'client_name'    => $this->client_name,
            'start_time'     => $this->start_time,
            'end_time'       => $this->end_time,
            'prep_time'      => $this->prep_time,
            'travel_time'    => $this->travel_time,
            'clean_up_time'  => $this->clean_up_time,
            'total_time'     => $this->total_time,
            'rate'           => $this->rate,
            'surcharge'      => $this->surcharge,
            'total_charges'  => $this->total_charges,
            'notes'          => $this->notes,
            'date_delivered' => $this->date_delivered,
            'type'           => $this->type,
            'do_address_1'   => $this->do_address_1,
            'do_address_2'   => $this->do_address_2,
            'do_city'        => $this->do_city,
            'do_state'       => $this->do_state,
            'do_zip'         => $this->do_zip,
            'pu_address_1'   => $this->pu_address_1,
            'pu_address_2'   => $this->pu_address_2,
            'pu_city'        => $this->pu_city,
            'pu_state'       => $this->pu_state,
            'pu_zip'         => $this->pu_zip,
            'packages'       => $this->packages
        ];
    }
}
