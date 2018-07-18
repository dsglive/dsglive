<?php

namespace App\Http\Controllers\PDF;

use PDF;
use App\Models\Logistic;
use App\Http\Controllers\Controller;

class LogiscticPDF extends Controller
{
    /**
     * @param  Logistic $logistic
     * @return mixed
     */
    public function viewLogistic(Logistic $logistic)
    {
        $data = $logistic->load('packages')->toArray();
        $pdf  = PDF::loadView('pdf.logistic', $data)
            ->setOption('footer-right', 'Page [page] of [toPage]')
            ->setOption('footer-left', \Carbon\Carbon::now()->format('D, M d Y'))
            ->setOption('footer-font-size', 8);
        return $pdf->inline();
    }
}
