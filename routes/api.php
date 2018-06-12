<?php
Route::group(['middleware' => ['auth:api']], function () {
    //? Users Page
    Route::post('/@me', 'User\UsersController@me')->name('api.@me');
    // ? Users Management Routes
    Route::post('/users', 'User\UsersController@index')->name('api.user.index');
    Route::post('/users/massActivate', 'User\UsersController@massActivate')->name('api.user.massActivate');
    Route::post('/users/massDeactivate', 'User\UsersController@massDeactivate')->name('api.user.massDeactivate');
    Route::post('/users/create', 'User\UsersController@create')->name('api.user.create');

    // Route::post('/users/username/{username}', 'User\UsersController@findByUsername')->name('api.user.findByUsername');
    // Route::post('/users/email/{email}', 'User\UsersController@findByEmail')->name('api.user.findByEmail');
    // Route::get('/permissions', 'Auth\PermissionRolesController@getAllPermissions')->name('api.permissions.index');
    Route::get('/roles', 'Auth\PermissionRolesController@getAllRoles')->name('api.roles.index');
    Route::post('/users/{id}/syncRoles', 'Auth\PermissionRolesController@syncRoles')->name('api.user.roles.sync');
    // Route::post('/users/{id}/syncPermissions', 'Auth\PermissionRolesController@syncPermissions')
    // ->name('api.user.permissions.sync');
    //? Settings Page
    Route::post('/users/settings/updateAccount', 'Account\AccountController@updateAccount')
        ->name('api.user.updateAccount');
    Route::post('/users/settings/updateProfile', 'Account\AccountController@updateProfile')
        ->name('api.user.updateProfile');

    //? Helpers We Can Use For Permission and Roles
    // Route::get('/getPermissionsViaRoles', 'Auth\ACLController@getPermissionsViaRoles')
    //     ->name('api.auth.getPermissionsViaRoles');
    // Route::get('/getDirectPermissions', 'Auth\ACLController@getDirectPermissions')
    //     ->name('api.auth.getDirectPermissions');
    // Route::get('/getAllPermissions', 'Auth\ACLController@getAllPermissions')->name('api.auth.getAllPermissions');
    // Route::get('/hasPermissionTo', 'Auth\ACLController@hasPermissionTo')->name('api.auth.hasPermissionTo');
    // Route::get('/hasAnyPermission', 'Auth\ACLController@hasAnyPermission')->name('api.auth.hasAnyPermission');
    // Route::get('/getRoles', 'Auth\ACLController@getRoles')->name('api.auth.getRoles');
    // Route::get('/hasRole', 'Auth\ACLController@hasRole')->name('api.auth.hasRole');
    // Route::get('/hasAnyRole', 'Auth\ACLController@hasAnyRole')->name('api.auth.hasAnyRole');
    // Route::get('/hasAllRoles', 'Auth\ACLController@hasAllRoles')->name('api.auth.hasAllRoles');
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
