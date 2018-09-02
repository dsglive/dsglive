<?php

namespace App\Http\Resources\Payment;

use Illuminate\Http\Resources\Json\Resource;

class PaymentResource extends Resource
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
            'id'              => $this->id,
            'customer'        => $this->customer,
            'amount'          => $this->amount,
            'transaction_id'  => $this->transaction_id,
            'type'            => $this->type,
            'date_paid'       => $this->date_paid,
            'payment_details' => $this->payment_details
        ];
    }
}
