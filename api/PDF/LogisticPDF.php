<?php

namespace Api\PDF;

use App\Models\Logistic;
use Api\Controller;

class LogiscticPDF extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin', 'auth:api']);
    }

    /**
     * @return mixed
     */
    public function viewPDF(Logistic $logistic)
    {
        $data = $logistic->load('packages')->toArray();
        $pdf  = \PDF::loadView('pdf.logistic', $data)->setOption('footer-right', 'Page [page] of [toPage]')
                                                    ->setOption('footer-left', \Carbon\Carbon::now()->format('D, M d Y'))
                                                    ->setOption('footer-font-size', 8);
        return $pdf->inline();
    }
}
