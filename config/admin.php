<?php

return [
    'username'     => env('ADMIN_USERNAME', 'admin'),
    'email'        => env('ADMIN_EMAIL', 'admin@example.com'),
    'password'     => env('ADMIN_PASSWORD', 'secret'),
    'company_name' => env('ADMIN_CNAME', 'My Company'),
    'first_name'   => env('ADMIN_FNAME', 'john'),
    'last_name'    => env('ADMIN_LNAME', 'doe'),
    'phone'        => env('ADMIN_PHONE', '123-456-7890'),
    'address_1'    => env('ADMIN_ADDRESS1', 'My Address 1'),
    'address_2'    => env('ADMIN_ADDRESS2'),
    'city'         => env('ADMIN_CITY', 'My City'),
    'state'        => env('ADMIN_STATE', 'My State'),
    'zip'          => env('ADMIN_ZIP', '12345'),
    'country'      => env('ADMIN_COUNTRY', 'US')
];
