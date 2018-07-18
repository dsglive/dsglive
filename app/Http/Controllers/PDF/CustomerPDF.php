<?php

namespace App\Http\Controllers\PDF;

use PDF;
use App\Models\User;
use App\Http\Controllers\Controller;

class CustomerPDF extends Controller
{
    /**
     * @param  Logistic $logistic
     * @return mixed
     */
    public function viewCustomer(User $user)
    {
        $user->load(['profile', 'clients.packages']);
        $clients = $user->clients;

        foreach ($clients as $index => $client) {
            foreach ($client->packages as $key => $package) {
                if ($package->dsg_id != $user->id) {
                    unset($clients[$index]['packages'][$key]);
                }
            }
        }

        $data            = $user->toArray();
        $data['profile'] = $user->profile;

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
