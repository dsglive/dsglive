<?php

namespace App\Http\Controllers\PDF;

use PDF;
use App\Models\Package;
use App\Http\Controllers\Controller;

class BinPDF extends Controller
{
    /**
     * @param  Logistic $logistic
     * @return mixed
     */
    public function viewBinPDF(Package $package)
    {
        $data = $package;
        $pdf  = PDF::loadView('pdf.delivery-ticket', $data)
            ->setOption('footer-right', 'Page [page] of [toPage]')
            ->setOption('footer-left', \Carbon\Carbon::now()->format('D, M d Y'))
            ->setOption('footer-font-size', 8);
        return $pdf->inline();
    }
}
