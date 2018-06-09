<?php
use App\Models\User;
use App\Models\Profile;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        $user  = User::create([
            'id'       => 1,
            'password' => config('admin.password'),
            'username' => config('admin.username'),
            'active'   => 1
        ]);

        $user->assignRole('admin');

        $profile = Profile::create([
            'company_name' => $faker->company,
            'first_name'   => $faker->firstNameMale,
            'last_name'    => $faker->lastName,
            'email'        => config('admin.email'),
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

    }
}
