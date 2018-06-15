<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Bin::class, function (Faker $faker) {
    return [
        'code' => $faker->randomLetter.$faker->randomLetter.$faker->randomDigit().$faker->randomDigit(),
        'active' => true
    ];
});
