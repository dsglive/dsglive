<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Shipper::class, function (Faker $faker) {
    return [
        'name'      => $faker->name,
        'email'     => $faker->unique()->safeEmail,
        'phone'     => $faker->isbn10,
        'address_1' => $faker->streetAddress,
        'address_2' => $faker->secondaryAddress,
        'city'      => $faker->city,
        'state'     => $faker->state,
        'zip'       => $faker->postcode,
        'country'   => $faker->country,
        'notes'     => $faker->sentence($nbWords = 10, $variableNbWords = true),
        'active'    => true
    ];
});
