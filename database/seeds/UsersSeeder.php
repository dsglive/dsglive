<?php
use App\Models\User;
use App\Models\Client;
use App\Models\Profile;
use App\Models\Shipper;
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
        $warehouse = $this->createUser('warehouse');

        $customer = $this->createUser('customer');
        $this->createClient($customer, 10);
        $this->createShipper(10);
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

        return $user;
    }

    /**
     * @param $user
     * @param $count
     */
    private function createClient(User $user, $count)
    {
        for ($i = 0; $i < $count; $i++) {
            $faker = \Faker\Factory::create();

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

    /**
     * @param $count
     */
    private function createShipper($count)
    {
        for ($i = 0; $i < $count; $i++) {
            $faker = \Faker\Factory::create();

            Shipper::create([
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
        }
    }
}
