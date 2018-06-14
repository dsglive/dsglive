<?php
Route::group(['middleware' => ['auth:api']], function () {
    //? Account Api
    Route::post('/@me', 'User\UsersController@me')->name('api.@me');
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
