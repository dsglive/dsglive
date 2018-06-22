<?php
Route::group(['middleware' => ['auth:api']], function () {
    //? Account Api
    Route::post('/@me', 'User\UsersController@me')->name('api.@me');
    //? Dashboard Stats
    Route::post('/dashboard/admin/getStats', 'Dashboard\AdminStatsController@getStats')
    ->name('api.dashboard.admin.getStats');
    Route::post('/dashboard/customer/getStats', 'Dashboard\CustomerStatsController@getStats')
    ->name('api.dashboard.customer.getStats');

    // Package Management
    Route::post('/package/uploadPackageImages', 'Package\PackageController@uploadPackageImages')
        ->name('api.package.uploadPackageImages');
    Route::post('/package/uploadDamageImage', 'Package\PackageController@uploadDamageImage')
        ->name('api.package.uploadDamageImage');
    Route::post('/package/add', 'Package\PackageController@add')
        ->name('api.package.add');

    //? Dsg Management

    Route::post('/dsg', 'Dsg\DsgController@index')->name('api.dsg.index');
    Route::get('/dsg/getCustomers', 'Dsg\DsgController@getCustomers')->name('api.dsg.getCustomers');
    Route::get('/dsg/getShippers', 'Dsg\DsgController@getShippers')->name('api.dsg.getShippers');
    Route::get('/dsg/getEmployees', 'Dsg\DsgController@getEmployees')->name('api.dsg.getEmployees');
    Route::get('/dsg/getHandlingRates', 'Dsg\DsgController@getHandlingRates')->name('api.dsg.getHandlingRates');

    Route::post('/dsg/massActivate', 'Dsg\DsgController@massActivate')->name('api.dsg.massActivate');
    Route::post('/dsg/massDeactivate', 'Dsg\DsgController@massDeactivate')
        ->name('api.dsg.massDeactivate');
    Route::post('/dsg/create', 'Dsg\DsgController@create')->name('api.dsg.create');
    Route::post('/dsg/toggleStatus', 'Dsg\DsgController@toggleStatus')->name('api.dsg.toggleStatus');
    Route::post('/dsg/delete', 'Dsg\DsgController@delete')->name('api.dsg.delete');
    Route::get('/dsg/{dsg}/edit', 'Dsg\DsgController@edit')->name('api.dsg.edit');
    Route::post('/dsg/{dsg}/update', 'Dsg\DsgController@update')->name('api.dsg.update');

    //?  Bin Management
    Route::post('/bins', 'Bin\BinsController@index')->name('api.bin.index');
    Route::post('/bins/massActivate', 'Bin\BinsController@massActivate')->name('api.bin.massActivate');
    Route::post('/bins/massDeactivate', 'Bin\BinsController@massDeactivate')
        ->name('api.bin.massDeactivate');
    Route::post('/bins/create', 'Bin\BinsController@create')->name('api.bin.create');
    Route::post('/bins/toggleStatus', 'Bin\BinsController@toggleStatus')->name('api.bin.toggleStatus');
    Route::post('/bins/delete', 'Bin\BinsController@delete')->name('api.bin.delete');
    Route::get('/bins/{bin}/edit', 'Bin\BinsController@edit')->name('api.bin.edit');
    Route::post('/bins/{bin}/update', 'Bin\BinsController@update')->name('api.bin.update');

    //?  Rate Management
    Route::post('/rates', 'Rate\RatesController@index')->name('api.rate.index');
    Route::post('/rates/massActivate', 'Rate\RatesController@massActivate')->name('api.rate.massActivate');
    Route::post('/rates/massDeactivate', 'Rate\RatesController@massDeactivate')
        ->name('api.rate.massDeactivate');
    Route::post('/rates/create', 'Rate\RatesController@create')->name('api.rate.create');
    Route::post('/rates/toggleStatus', 'Rate\RatesController@toggleStatus')->name('api.rate.toggleStatus');
    Route::post('/rates/delete', 'Rate\RatesController@delete')->name('api.rate.delete');
    Route::get('/rates/{rate}/edit', 'Rate\RatesController@edit')->name('api.rate.edit');
    Route::post('/rates/{rate}/update', 'Rate\RatesController@update')->name('api.rate.update');

    // ? Shipper Management
    Route::post('/shippers', 'Shipper\ShippersController@index')->name('api.shipper.index');
    Route::post('/shippers/massActivate', 'Shipper\ShippersController@massActivate')->name('api.shipper.massActivate');
    Route::post('/shippers/massDeactivate', 'Shipper\ShippersController@massDeactivate')
        ->name('api.shipper.massDeactivate');
    Route::post('/shippers/create', 'Shipper\ShippersController@create')->name('api.shipper.create');
    Route::post('/shippers/toggleStatus', 'Shipper\ShippersController@toggleStatus')->name('api.shipper.toggleStatus');
    Route::post('/shippers/delete', 'Shipper\ShippersController@delete')->name('api.shipper.delete');
    Route::get('/shippers/{shipper}/edit', 'Shipper\ShippersController@edit')->name('api.shipper.edit');
    Route::post('/shippers/{shipper}/update', 'Shipper\ShippersController@update')->name('api.shipper.update');

    // ? Clients Management Api
    Route::post('/clients', 'Client\ClientsController@index')->name('api.client.index');
    Route::post('/clients/massActivate', 'Client\ClientsController@massActivate')->name('api.client.massActivate');
    Route::post('/clients/massDeactivate', 'Client\ClientsController@massDeactivate')
        ->name('api.client.massDeactivate');
    Route::post('/clients/create', 'Client\ClientsController@create')->name('api.client.create');
    Route::post('/clients/toggleStatus', 'Client\ClientsController@toggleStatus')->name('api.client.toggleStatus');
    Route::post('/clients/delete', 'Client\ClientsController@delete')->name('api.client.delete');
    Route::get('/clients/{client}/edit', 'Client\ClientsController@edit')->name('api.client.edit');
    Route::post('/clients/{client}/update', 'Client\ClientsController@update')->name('api.client.update');

    // ? Users Management Api
    Route::post('/users', 'User\UsersController@index')->name('api.user.index');
    Route::post('/users/massActivate', 'User\UsersController@massActivate')->name('api.user.massActivate');
    Route::post('/users/massDeactivate', 'User\UsersController@massDeactivate')->name('api.user.massDeactivate');
    Route::post('/users/create', 'User\UsersController@create')->name('api.user.create');
    Route::post('/users/toggleStatus', 'User\UsersController@toggleStatus')->name('api.user.toggleStatus');
    Route::post('/users/delete', 'User\UsersController@delete')->name('api.user.delete');
    Route::get('/users/{user}/edit', 'User\UsersController@edit')->name('api.user.edit');
    Route::post('/users/{user}/update', 'User\UsersController@update')->name('api.user.update');
    //? Settings Api
    Route::post('/users/settings/updateAccount', 'Account\AccountController@updateAccount')
        ->name('api.user.updateAccount');
    Route::post('/users/settings/updateProfile', 'Account\AccountController@updateProfile')
        ->name('api.user.updateProfile');
    //? Roles Api
    Route::get('/roles', 'Auth\PermissionRolesController@getAllRoles')->name('api.roles.index');

    //? Router Check For Auth User
    Route::post('/auth/check', 'Auth\LoginController@check')->name('api.auth.check');
    //? Router For Logout
    Route::post('/auth/logout', 'Auth\LoginController@logout')->name('api.auth.logout');
});
/* Can Be Accessed Without Access Token */
//? Router For Authentication
Route::post('/auth/register', 'Auth\RegisterController@register')->name('api.auth.register');
Route::post('/auth/login', 'Auth\LoginController@login')->name('api.auth.login');
//? Router For Sending Customer Email
Route::post('/@contact', 'Homepage\ContactUsController@contact')->name('api.@contact');
