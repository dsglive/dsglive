<?php

namespace App\Http\Resources\Invoice;

use Illuminate\Support\Carbon;
use Illuminate\Http\Resources\Json\Resource;

class InvoiceResource extends Resource
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

        $first_name = optional(optional($this->customer)->profile)->first_name;
        $last_name  = optional(optional($this->customer)->profile)->last_name;
        $name       = optional(optional($this->customer)->profile)->company_name;

        if (null === $name) {
            if (null !== $first_name) {
                $name = $first_name;
            }

            if (null !== $last_name) {
                $name = $first_name.' '.$last_name;
            }
        }

        return [
            'id'            => $this->id,
            'customer_id'   => $this->customer_id,
            'customer_name' => $name,
            'receiving_fee' => $this->receiving_fee,
            'receiving'     => $this->receiving,
            'delivery_fee'  => $this->delivery_fee,
            'delivery'      => $this->delivery,
            'misc_fee'      => $this->misc_fee,
            'misc'          => $this->misc,
            'storage_fee'   => $this->storage_fee,
            'storage'       => $this->storage,
            'total'         => $this->total,
            'balance'       => $this->balance,
            'date_started'  => $this->date_started,
            'date_ended'    => $this->date_ended,
            'due_date'      => $this->due_date,
            'overdue'       => $this->overdue,
            'notes'         => $this->notes
        ];
    }
}
