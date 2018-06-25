<?php

use App\Models\Dsg;
use App\Models\Rate;
use App\Models\User;
use App\Models\Client;
use App\Models\Package;
use App\Models\Profile;
use App\Models\Shipper;
use Faker\Generator as Faker;
use Illuminate\Support\Carbon;

$factory->define(Package::class, function (Faker $faker) {
    $customer = User::with(['profile', 'clients'])->role('customer')->inRandomOrder()->get()->first();
    $shipper  = Shipper::inRandomOrder()->first();
    $bin = Bin::inRandomOrder()->first();
    $handling = Rate::ofType('handling')->inRandomOrder()->first();
    $storage = Rate::ofType('storage')->inRandomOrder()->first();
    $store_at;
    if ($storage->name === 'Rack Storage Rate') {
        $store_at = 'rack';
    } else {
        $store_at = 'floor';
    }

    if (!$bin) {
        $bin = factory(Bin::class)->create();
    }
    if (!$shipper) {
        $shipper = factory(Shipper::class)->create();
    }

    if (!$customer) {
        $customer = $this->createUser('customer');
        $this->createClient($customer, 10);
    }

    $clients = $customer->clients;

    if ($clients->count() < 1) {
        $this->createClient($customer, 10);
    }

    $client = $customer->clients()->inRandomOrder()->first();
    $cube = $faker->randomFloat(4, 1, 100);
    return [
        'dsg_id'        => factory(Dsg::class)->create([
            'receiving_amount' => $handling->amount,
            'total_cube' => $cube,
            'total_pieces' => 1
            ])->id,
        'customer_id'   => $customer->id,
        'customer_name' => $customer->profile->first_name.' '.$customer->profile->last_name,
        'client_id'     => $client->id,
        'client_name'   => $client->name,
        'shipper_id'    => $shipper->id,
        'shipper_name'  => $shipper->name,
        'bin_id'        => $bin->id,
        'bin_name'      => $bin->code,
        'description'   => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'date_received' => Carbon::now(),
        'date_processed' => Carbon::now(),
        'po_no'          => $faker->word,
        'style_no'       => $faker->word,
        'cube'           => $cube,
        'handling_type' => $handling->id,
        'handling_fee'  => $handling->amount,
        'store_at'      => $store_at,
        'storage_fee'   => $storage->amount,
    ];
});

/**
 * @param  $role
 * @return mixed
 */
function createUser($role)
{
    $faker = \Faker\Factory::create();
    $user  = User::create([
        'password' => 'secret',
        'username' => $faker->userName,
        'active'   => 1
    ]);

    $user->assignRole($role);

    $profile = Profile::create([
        'company_name' => $faker->company,
        'first_name'   => $faker->firstNameMale,
        'last_name'    => $faker->lastName,
        'email'        => $faker->unique()->safeEmail,
        'phone'        => $faker->isbn10,
        'address_1'    => $faker->streetAddress,
        'address_2'    => $faker->secondaryAddress,
        'city'         => $faker->city,
        'state'        => $faker->state,
        'zip'          => $faker->postcode,
        'country'      => $faker->country,
        'notes'        => $faker->sentence($nbWords = 10, $variableNbWords = true)
    ]);
    $user->profile()->save($profile);
    $user->save();

    return $user;
}

/**
 * @param $user
 * @param $count
 */
function createClient($user, $count)
{
    for ($i = 0; $i < $count; $i++) {
        $faker  = \Faker\Factory::create();
        $client = Client::create([
            'name'      => $faker->name,
            'email'     => $faker->unique()->safeEmail,
            'phone'     => $faker->isbn10,
            'address_1' => $faker->streetAddress,
            'address_2' => $faker->secondaryAddress,
            'city'      => $faker->city,
            'state'     => $faker->state,
            'zip'       => $faker->postcode,
            'country'   => $faker->country,
            'notes'     => $faker->sentence($nbWords = 10, $variableNbWords = true)
        ]);
        $user->clients()->save($client);
    }
}
