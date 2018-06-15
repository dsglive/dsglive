<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Rate::class, function (Faker $faker) {
    $types = ['handling', 'storage'];
    return [
        'name'   => $faker->unique()->userName,
        'type'   => $faker->randomElement($types),
        'amount' => $faker->randomFloat($nbMaxDecimals = null, $min = 0, $max = null),
        'active' => true
    ];
});
