<?php

namespace App\Http\Controllers\PDF;

use PDF;
use App\Models\Dsg;
use App\Http\Controllers\Controller;

class DSGPDF extends Controller
{
    /**
     * @param  Logistic $logistic
     * @return mixed
     */
    public function viewDSG(Dsg $dsg)
    {
        $data = $dsg->load('packages', 'customer')->toArray();
        $data['customer']['profile'] = $dsg->customer->profile;
        $pdf  = PDF::loadView('pdf.dsg', $data)
            ->setOption('footer-right', 'Page [page] of [toPage]')
            ->setOption('footer-left', \Carbon\Carbon::now()->format('D, M d Y'))
            ->setOption('footer-font-size', 8);
        return $pdf->inline();
    }
}
