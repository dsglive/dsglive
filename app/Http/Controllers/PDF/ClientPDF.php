<?php

namespace App\Http\Controllers\PDF;

use PDF;
use App\Models\User;
use App\Models\Client;
use App\Models\Package;
use App\Http\Controllers\Controller;

class ClientPDF extends Controller
{
    /**
     * @param  Logistic $logistic
     * @return mixed
     */
    public function viewClient(User $user, Client $client)
    {
        $sortBy           = request()->sortBy;
        $orderBy          = request()->orderBy;
        $data             = $client;
        $data['customer'] = $user->profile;
        $data['packages'] = Package::where('client_id', $client->id)->where('customer_id', $user->id)
        ->undelivered()->get();
        $total            = 0;

        foreach ($data['packages'] as $key => $package) {
            $total += $package['cube'];
        }

        $data['total_cube'] = $total;
        $data['packages']   = $data['packages']
            ->when($sortBy, function ($collection) use ($sortBy) {
                return $collection->sortBy($sortBy);
            })
            ->when('DESC' === $orderBy, function ($collection) use ($sortBy) {
                return $collection->sortByDesc($sortBy);
            })->values()->all();
        $pdf = PDF::loadView('pdf.client-report', $data)
            ->setOption('footer-right', 'Page [page] of [toPage]')
            ->setOption('footer-left', \Carbon\Carbon::now()->format('D, M d Y'))
            ->setOption('footer-font-size', 8);
        return $pdf->inline();
    }
}
