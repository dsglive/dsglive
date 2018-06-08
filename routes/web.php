<?php

use Illuminate\Support\Facades\DB;



/* Log SQL Querries */
if (Config::get('app.debug') === true) {
    DB::listen(function ($sql) {
        Log::stack(['daily'])->info(json_encode($sql));
    });
}

/* Set Vue Front End Endpoint */
Route::get('/{vue?}', 'DomainController@app')->where('vue', '[\/\w\.-]*')->name('home.page');
