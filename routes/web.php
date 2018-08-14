<?php

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


//? PDF Report
Route::get('/pdf/delivery-ticket/{logistic}', 'PDF\LogiscticPDF@viewLogistic')
    ->name('home.pdf.delivery-ticket');
Route::get('/pdf/field-transfer/{logistic}', 'PDF\LogiscticPDF@viewLogistic')
    ->name('home.pdf.field-transfer');
Route::get('/pdf/warehouse/{dsg}', 'PDF\DSGPDF@viewDSG')
    ->name('home.pdf.warehouse');
Route::get('/pdf/receiving/{dsg}', 'PDF\DSGPDF@viewDSG')
    ->name('home.pdf.receiving');
Route::get('/pdf/bin-report/{bin}', 'PDF\BinPDF@viewBin')
    ->name('home.pdf.bin');
Route::get('/pdf/customer-report/{user}', 'PDF\CustomerPDF@viewCustomer')
    ->name('home.pdf.customer');
Route::get('/pdf/client-report/{user}/{client}', 'PDF\ClientPDF@viewClient')
    ->name('home.pdf.client');
//! all customer total with client break down
Route::get('/pdf/all-customer-invoice-total', 'PDF\AllCustomerInvoice')
    ->name('home.pdf.all-customer-invoice');
//! all customer total
Route::get('/pdf/total-all-customer-invoice', 'PDF\TotalAllCustomerInvoice')
    ->name('home.pdf.total-all-customer-invoice');
//! customer total with client break down
Route::get('/pdf/customer-breakdown-invoice/{invoice}', 'PDF\CustomerBreakDownInvoice')
    ->name('home.pdf.customer-breakdown-invoice');
//! customer total
Route::get('/pdf/customer-total-invoice/{invoice}', 'PDF\CustomerTotalInvoice')
    ->name('home.pdf.customer-total-invoice');



/* Set Vue Front End Endpoint */
Route::get('/{vue?}', 'DomainController@app')->where('vue', '[\/\w\.-]*')->name('home.page');
