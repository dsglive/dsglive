<?php

namespace App\Http\Controllers\PDF;

use PDF;
use App\Models\Bin;
use App\Models\Package;
use App\Http\Controllers\Controller;

class BinPDF extends Controller
{
    /**
     * @param  Logistic $logistic
     * @return mixed
     */
    public function viewBin(Bin $bin)
    {
        $data = $bin;
        $data['packages'] =  Package::with('customer.profile')->where('bin_name', $bin->code)->active()->get();
        $total = 0;
        foreach ($data['packages'] as $package) {
            $total += $package['cube'];
        }
        $data['total_cube'] = number_format((float)$total, 4, '.', '');
        $pdf  = PDF::loadView('pdf.bin-report', $data)
            ->setOption('footer-right', 'Page [page] of [toPage]')
            ->setOption('footer-left', \Carbon\Carbon::now()->format('D, M d Y'))
            ->setOption('footer-font-size', 8);
        return $pdf->inline();
    }
}
