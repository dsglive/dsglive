<?php

namespace App\Http\Controllers\PDF;

use App\Models\Logistic;
use App\Http\Controllers\Controller;
use PDF;

class LogiscticPDF extends Controller
{
    /**
     * @return mixed
     */
    public function viewPDF(Logistic $logistic)
    {
        $data = $logistic->load('packages')->toArray();
        $pdf  = PDF::loadView('pdf.delivery-ticket', $data)
            ->setOption('footer-right', 'Page [page] of [toPage]')
            ->setOption('footer-left', \Carbon\Carbon::now()->format('D, M d Y'))
            ->setOption('footer-font-size', 8);
        return $pdf->inline();
    }
}
