<?php

namespace App\Http\Resources\Invoice;

use Illuminate\Support\Carbon;
use Illuminate\Http\Resources\Json\Resource;

class GenerateInvoiceResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request //
     * @return array
     */
    public function toArray($request)
    {
        Carbon::serializeUsing(function ($carbon) {
            return $carbon->format('Y-m-d');
        });

        $first_name = optional($this->profile)->first_name;
        $last_name  = optional($this->profile)->last_name;
        $name       = optional($this->profile)->company_name;

        if (null === $name) {
            if (null !== $first_name) {
                $name = $first_name;
            }

            if (null !== $last_name) {
                $name = $first_name.' '.$last_name;
            }
        }

        return [
            'customer_id'   => $this->id,
            'customer_name' => $this->whenLoaded('profile', function () use ($name) {
                return $name;
            }),
            'receiving_fee' => $this->whenLoaded('receiving', function () {
                return $this->receiving->reduce(function ($carry, $item) {
                    return $carry + $item->receiving_amount;
                });
            }),
            'receiving'     => $this->whenLoaded('receiving', $this->receiving),
            'delivery_fee'  => $this->whenLoaded('delivery', function () {
                return $this->delivery->reduce(function ($carry, $item) {
                    return $carry + $item->total_charges;
                });
            }),
            'delivery'      => $this->whenLoaded('delivery', $this->delivery),
            'misc_fee'      => $this->whenLoaded('misc', function () {
                return $this->misc->reduce(function ($carry, $item) {
                    return $carry + $item->amount;
                });
            }),
            'misc'          => $this->whenLoaded('misc', $this->misc),
            'storage_fee'   => $this->whenLoaded('storage', function () use ($request) {
                //! change the logic here on how to compute for receiving fee

                return $this->storage->reduce(function ($carry, $item) use ($request) {
                    $rate         = $item->storage_fee * $item->cube;
                    $date_ended   = $item->date_delivered;
                    $date_started = Carbon::parse($request->input('date_started'));
                    $days         = 0;
                    //! CRITICAL
                    if ($item->delivered) {
                            $days = $item->date_received->diffInDays($date_ended);
                    } else {
                        $date_ended = $request->input('date_ended');

                        if (!$item->last_invoice_at) {
                            $days = $item->date_received->diffInDays($date_ended);
                        } else {
                            $days = $item->last_invoice_at->diffInDays($date_ended);
                        }
                    }

                    return $carry + $rate * $days;
                });
            }),
            'storage'       => $this->whenLoaded('storage', $this->storage),
            'date_started'  => $request->input('date_started'),
            'date_ended'    => $request->input('date_ended')
        ];
    }
}
