<?php
Route::group(['middleware' => ['auth:api']], function () {
    //? Account Api
    Route::post('/@me', 'User\UsersController@me')->name('api.@me');
    //? Payment Api
    Route::post('/payments', 'Payment\PaymentController@index')->name('api.payment.index');
    Route::post('/payments/create', 'Payment\PaymentController@create')->name('api.payment.create');
    Route::post('/payments/delete', 'Payment\PaymentController@delete')->name('api.payment.delete');
    Route::get('/payments/{payment}/edit', 'Payment\PaymentController@edit')->name('api.payment.edit');
    Route::post('/payments/{payment}/update', 'Payment\PaymentController@update')->name('api.payment.update');
    Route::get('/payments/getCustomers', 'Payment\PaymentController@getCustomers')->name('api.payment.getCustomers');

    //? Reports
    Route::post('/reports/total-all-customer-invoice', 'Report\ReportController@totalAllCustomerInvoice')
        ->name('api.report.total-all-customer-invoice');
    Route::post('/reports/reportAllUnknown', 'Report\ReportController@reportAllUnknown')
        ->name('api.report.reportAllUnknown');
    Route::post('/reports/UnknownCustomerReport', 'Report\ReportController@reportUnknownCustomer')
        ->name('api.report.reportUnknownCustomer');

    Route::post('/reports/UnknownClientReport', 'Report\ReportController@reportUnknownClient')
        ->name('api.report.reportUnknownClient');

    Route::post('/reports/UnknownShipperReport', 'Report\ReportController@reportUnknownShipper')
        ->name('api.report.reportUnknownShipper');

    Route::post('/reports/reportByBin', 'Report\ReportController@reportByBin')
        ->name('api.report.reportByBin');
    Route::post('/reports/reportByCustomer', 'Report\ReportController@reportByCustomer')
        ->name('api.report.reportByCustomer');
    Route::post('/reports/searchCustomerReport', 'Report\ReportController@searchCustomerReport')
        ->name('api.report.searchCustomerReport');
    Route::post('/reports/reportByClient', 'Report\ReportController@reportByClient')
        ->name('api.report.reportByClient');
    Route::post('/reports/reportAllDamaged', 'Report\ReportController@reportAllDamaged')
        ->name('api.report.reportAllDamaged');
    Route::post('/reports/toogleRepair', 'Report\ReportController@toggleRepair')->name('api.report.toggleRepair');
    Route::post('/reports/reportAllRepaired', 'Report\ReportController@reportAllRepaired')
        ->name('api.report.repaired');

    Route::post('/reports/viewPackage/{package}', 'Report\ReportController@viewPackage')
        ->name('api.report.viewPackage');
    Route::post('/reports/reportAllUndelivered', 'Report\ReportController@reportAllUndelivered')
        ->name('api.report.undelivered');
    Route::post('/customer-management-report', 'Report\ReportController@searchCustomerInvoice')->name('api.report.searchCustomerInvoice');
    Route::post('/client-management-report', 'Report\ReportController@fetchClientInvoice')->name('api.report.fetchClientInvoice');

    //? Invoice Api
    Route::post('/generate/invoices', 'Invoice\InvoiceController@generateInvoice')->name('api.invoice.generate');
    Route::post('/invoices/mass-create', 'Invoice\InvoiceController@massCreateInvoice')
        ->name('api.invoice.massCreateInvoice');
    Route::post('/invoices', 'Invoice\InvoiceController@index')
        ->name('api.invoice.index');
    Route::get('/invoices/view/{invoice}', 'Invoice\InvoiceController@view')
        ->name('api.invoice.view');
    Route::get('/invoices/delete/{invoice}', 'Invoice\InvoiceController@delete')
        ->name('api.invoice.delete');

    //? Misc Management
    Route::post('/miscellaneous', 'Misc\MiscellaneousController@index')->name('api.misc.index');
    Route::get('/miscellaneous/getCustomers', 'Misc\MiscellaneousController@getCustomers')
        ->name('api.misc.getCustomers');
    Route::post('/miscellaneous/create', 'Misc\MiscellaneousController@create')->name('api.misc.create');
    Route::post('/miscellaneous/delete', 'Misc\MiscellaneousController@delete')->name('api.misc.delete');
    Route::get('/miscellaneous/{misc}/edit', 'Misc\MiscellaneousController@edit')->name('api.misc.edit');
    Route::post('/miscellaneous/{misc}/update', 'Misc\MiscellaneousController@update')->name('api.misc.update');
    //? Logistics Management
    Route::post('/logistics', 'Logistic\LogisticsController@index')->name('api.logistics.index');
    Route::post('/logistics/create', 'Logistic\LogisticsController@create')->name('api.logistics.create');
    Route::post('/logistics/{logistic}/delete', 'Logistic\LogisticsController@delete')->name('api.logistics.delete');
    Route::get('/logistics/{logistic}/edit', 'Logistic\LogisticsController@edit')->name('api.logistics.edit');
    Route::post('/logistics/{logistic}/update', 'Logistic\LogisticsController@update')->name('api.logistics.update');
    Route::get('/logistics/getInitialData', 'Logistic\LogisticsController@getInitialData')
        ->name('api.logistics.getInitialData');
    Route::get('/logistics/clients/{client}/getClientPackages', 'Logistic\LogisticsController@getClientPackages')
        ->name('api.logistics.getClientPackages');
    //? Dashboard Stats
    Route::post('/dashboard/admin/getStats', 'Dashboard\AdminStatsController@getStats')
        ->name('api.dashboard.admin.getStats');
    Route::post('/dashboard/customer/getStats', 'Dashboard\CustomerStatsController@getStats')
        ->name('api.dashboard.customer.getStats');

    //? Package Management
    Route::post('/package/{id}/uploadPackageImages', 'Package\PackageController@uploadPackageImages')
        ->name('api.package.uploadPackageImages');
    Route::post('/package/{id}/uploadDamageImage', 'Package\PackageController@uploadDamageImage')
        ->name('api.package.uploadDamageImage');
    Route::post('/package/add', 'Package\PackageController@add')
        ->name('api.package.add');
    Route::post('/package/{id}/delete', 'Package\PackageController@delete')
        ->name('api.package.delete');

    //? Dsg Management
    //! Add here route for toggling date_out!
    Route::post('/dsg', 'Dsg\DsgController@index')->name('api.dsg.index');
    Route::post('/warehouse', 'Dsg\DsgController@warehouse')->name('api.warehouse.index');
    Route::get('/dsg/getCustomers', 'Dsg\DsgController@getCustomers')->name('api.dsg.getCustomers');
    Route::get('/dsg/getShippers', 'Dsg\DsgController@getShippers')->name('api.dsg.getShippers');
    Route::get('/dsg/getEmployees', 'Dsg\DsgController@getEmployees')->name('api.dsg.getEmployees');
    Route::get('/dsg/getHandlingRates', 'Dsg\DsgController@getHandlingRates')->name('api.dsg.getHandlingRates');
    Route::get('/dsg/getStorageRates', 'Dsg\DsgController@getStorageRates')->name('api.dsg.getStorageRates');
    Route::post('/dsg/massActivate', 'Dsg\DsgController@massActivate')->name('api.dsg.massActivate');
    Route::post('/dsg/massDeactivate', 'Dsg\DsgController@massDeactivate')
        ->name('api.dsg.massDeactivate');
    Route::post('/dsg/create', 'Dsg\DsgController@create')->name('api.dsg.create');
    Route::post('/dsg/toggleStatus', 'Dsg\DsgController@toggleStatus')->name('api.dsg.toggleStatus');
    Route::post('/dsg/transfer/archived', 'Dsg\DsgController@archived')->name('api.dsg.archived');
    Route::post('/dsg/archived', 'Dsg\DsgController@indexArchived')->name('api.dsg.indexArchived');
    Route::post('/dsg/archived/view', 'Dsg\DsgController@viewArchived')->name('api.dsg.viewArchived');
    Route::post('/dsg/archived/restore', 'Dsg\DsgController@restoreArchived')->name('api.dsg.restoreArchived');
    Route::post('/dsg/archived/delete', 'Dsg\DsgController@forceDelete')->name('api.dsg.forceDelete');

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
