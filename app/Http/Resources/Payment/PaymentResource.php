<?php

namespace App\Http\Resources\Payment;

use Illuminate\Support\Carbon;
use App\Http\Resources\User\AccountResource;
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
        Carbon::serializeUsing(function ($carbon) {
            return $carbon->format('Y-m-d');
        });

        return [
            'id'              => $this->id,
            'customer'        => new AccountResource($this->whenLoaded('customer')),
            'amount'          => $this->amount,
            'transaction_id'  => $this->transaction_id,
            'type'            => $this->type,
            'date_paid'       => $this->date_paid,
            'payment_details' => $this->payment_details,
            'notes'           => $this->notes
        ];
    }
}
