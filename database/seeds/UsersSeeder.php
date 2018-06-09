<?php
use App\Models\User;
use App\Models\Profile;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createUser('warehouse');
        $this->createUser('customer');
    }

    /**
     * @param $role
     */
    protected function createUser($role)
    {
        $faker = \Faker\Factory::create();
        $user  = User::create([
            'password' => 'secret',
            'username' => $role,
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
    }
}
