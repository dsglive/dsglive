<?php

namespace App\Http\Resources\Misc;

use Illuminate\Support\Carbon;
use Illuminate\Http\Resources\Json\Resource;

class MiscResource extends Resource
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
            'id'            => $this->id,
            'customer_id'   => $this->customer_id,
            'customer_name' => $this->customer_name,
            'client_id'     => $this->client_id,
            'client_name'   => $this->client_name,
            'amount'        => $this->amount,
            'invoice_date'  => $this->invoice_date,
            'notes'         => $this->notes
        ];
    }
}
