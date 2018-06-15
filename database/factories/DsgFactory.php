<?php

use App\Models\Dsg;
use App\Models\User;
use App\Models\Client;
use Faker\Generator as Faker;

$factory->define(Dsg::class, function (Faker $faker) {
    $client        = Client::all()->random();
    $user          = User::find($client->user_id);
    $profile       = $user->profile;
    $shipper       = Shipper::all()->random();
    $admin         = User::first();
    $admin_profile = $admin->profile;
    return [
        'customer_id'       => $client->user_id,
        'customer_name'     => $profile->first_name.' '.$profile->last_name,
        'client_id'         => $client->id,
        'client_name'       => $this->client_name,
        'shipper_id'        => $shipper->id,
        'shipper_name'      => $shipper->name,
        'received_by'       => $admin->id,
        'received_by_name'  => $admin_profile->first_name.' '.$admin_profile->last_name,
        'written_by'        => $admin->id,
        'written_by_name'   => $admin_profile->first_name.' '.$admin_profile->last_name,
        'inspected_by'      => $admin->id,
        'inspected_by_name' => $admin_profile->first_name.' '.$admin_profile->last_name,
        'located_by'        => $admin->id,
        'located_by_name'   => $admin_profile->first_name.' '.$admin_profile->last_name,
        'total_pieces'      => $faker->numberBetween($min = 1, $max = 10),
        'total_cube'        => $faker->randomFloat($nbMaxDecimals = null, $min = 0, $max = null),
        'receiving_amount'  => $faker->randomFloat($nbMaxDecimals = null, $min = 0, $max = null),
        'active'            => $this->active
    ];
});
