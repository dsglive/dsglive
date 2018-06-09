<?php

use App\Models\Profile;
use Faker\Generator as Faker;

$factory->define(Profile::class, function (Faker $faker) {
    return [
        'company_name'   => $faker->company,
        'first_name'     => $faker->firstNameMale,
        'last_name'      => $faker->lastName,
        'email'          => $faker->unique()->safeEmail,
        'phone'          => $faker->isbn10,
        'address_1'      => $faker->streetAddress,
        'address_2'      => $faker->secondaryAddress,
        'city'           => $faker->city,
        'state'          => $faker->state,
        'zip'            => $faker->postcode,
        'country'        => $faker->country,
        'state_province' => $faker->state,
        'notes'           => $faker->sentence($nbWords = 10, $variableNbWords = true)
    ];
});
