<?php

namespace App\Http\Controllers\PDF;

use PDF;
use App\Models\User;
use App\Models\Client;
use App\Models\Package;
use App\Http\Controllers\Controller;

class CustomerPDF extends Controller
{
    /**
     * @param  Logistic $logistic
     * @return mixed
     */
    public function viewCustomer(User $user)
    {
        $packages   = Package::where('customer_id', $user->id)->active()->get();
        $client_ids = $packages->pluck('client_id')->unique();
        $ids        = [];

        foreach ($client_ids as $id) {
            array_push($ids, $id);
        }

        $user->load(['profile', 'clients.packages']);
        $data                   = $user->toArray();
        $data['profile']        = $user->profile;
        $data['clients'] = Client::findMany($ids);
        $clients = $data['clients'];

        foreach ($clients as $index => $client) {
            foreach ($client['packages'] as $key => $package) {
                if ($package['customer_id'] != $user->id) {
                    unset($clients[$index]['packages'][$key]);
                }
            }
        }

        foreach ($data['clients'] as $index => $client) {
            if (count($client['packages']) > 0) {
                $total = 0;

                foreach ($client['packages'] as $key => $package) {
                    if ($package['customer_id'] === $data['id']) {
                        $total += $package['cube'];
                    }
                }

                $data['clients'][$index]['total_cube'] = $total;
            }
        }

        $pdf = PDF::loadView('pdf.customer-report', $data)
            ->setOption('footer-right', 'Page [page] of [toPage]')
            ->setOption('footer-left', \Carbon\Carbon::now()->format('D, M d Y'))
            ->setOption('footer-font-size', 8);
        return $pdf->inline();
    }
}
