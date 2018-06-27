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
        $this->createAdmin();
        $this->createEmployees(['kate_conley', 'bob_scheid']);
    }

    protected function createAdmin()
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
            'company_name' => config('admin.company_name'),
            'first_name'   => config('admin.first_name'),
            'last_name'    => config('admin.last_name'),
            'email'        => config('admin.email'),
            'phone'        => config('admin.phone'),
            'address_1'    => config('admin.address_1'),
            'address_2'    => config('admin.address_2'),
            'city'         => config('admin.city'),
            'state'        => config('admin.state'),
            'zip'          => config('admin.zip'),
            'country'      => config('admin.country')
        ]);
        $user->profile()->save($profile);
        $user->save();
    }

    protected function createEmployees($usernames)
    {
        $faker = \Faker\Factory::create();
        foreach ($usernames as $value) {
            $user = User::create([
                'password' => config('admin.password'),
                'username' => $value,
                'active' => 1
            ]);

            $user->assignRole('admin');
            $name = $this->toTitleCase($value);
            $name = explode(' ', $name);
            $first_name = $name[0];
            $last_name = $name[1];

            $profile = Profile::create([
                'company_name' => config('app.name'),
                'first_name' => $first_name,
                'last_name' => $last_name,
                'email' => $faker->safeEmail,
                'phone' => $faker->isbn10,
                'address_1' => $faker->streetAddress,
                'address_2' => $faker->secondaryAddress,
                'city' => $faker->city,
                'state' => $faker->state,
                'zip' => $faker->postcode,
                'country' => $faker->country,
                'notes' => $faker->sentence($nbWords = 10, $variableNbWords = true)
            ]);
            $user->profile()->save($profile);
            $user->save();
        }
    }

    protected function toTitleCase($str)
    {
        return ucwords(str_replace("_", " ", $str));
    }
}
