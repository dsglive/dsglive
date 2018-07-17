<?php

use App\Models\Logistic;
use Illuminate\Support\Facades\DB;

/* Log SQL Querries */
if (Config::get('app.debug') === true) {
    DB::listen(function ($sql) {
        Log::stack(['daily'])->info(json_encode($sql));
    });
}

Horizon::auth(function ($request) {
    return true;
});

// Route::get('/pdf', function () {
//     $data = Logistic::with('packages')->first()->toArray();
//     $pdf  = PDF::loadView('pdf.invoice', $data)->setOption('footer-right', 'Page [page] of [toPage]')
//                                                 ->setOption('footer-left', \Carbon\Carbon::now()->format('D, M d Y'))
//                                                 ->setOption('footer-font-size', 8);
//     return $pdf->inline();
// });

//? PDF Pages
Route::get('/pdf/delivery-ticket/{logistic}', 'PDF\LogiscticPDF@viewPDF')->name('home.pdf.logistic');

/* Set Vue Front End Endpoint */
Route::get('/{vue?}', 'DomainController@app')->where('vue', '[\/\w\.-]*')->name('home.page');
