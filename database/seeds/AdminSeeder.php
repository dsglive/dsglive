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
        $this->createWareHouse();
    }

    protected function createWareHouse()
    {
        $user = User::create([
            'password' => config('admin.password'),
            'username' => 'warehouse',
            'active' => 1
        ]);

        $user->assignRole('warehouse');

        $profile = Profile::create([
            'company_name' => 'Designer Services Group',
            'first_name' => 'Warehouse',
            'last_name' => 'Worker',
            'email' => 'warehouse@designerservicesgroup.com',
            'phone' => '4073311200',
            'address_1' => '225 Pineda St',
            'address_2' => 'Suite 127',
            'city' => 'Longwood',
            'state' => 'Florida',
            'zip' => '32750'
        ]);
        $user->profile()->save($profile);
        $user->save();
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
        ]);
        $user->profile()->save($profile);
        $user->save();
    }

    /**
     * @param $usernames
     */
    protected function createEmployees($usernames)
    {
        $faker = \Faker\Factory::create();

        foreach ($usernames as $value) {
            $user = User::create([
                'password' => config('admin.password'),
                'username' => $value,
                'active'   => 1
            ]);

            $user->assignRole('admin');
            $name       = $this->toTitleCase($value);
            $name       = explode(' ', $name);
            $first_name = $name[0];
            $last_name  = $name[1];

            $profile = Profile::create([
                'company_name' => config('app.name'),
                'first_name'   => $first_name,
                'last_name'    => $last_name,
                'email'        => $this->getInfo($value)['email'],
                'phone'        => $this->getInfo($value)['phone'],
                'address_1'    => $this->getInfo($value)['address_1'],
                'address_2'    => $this->getInfo($value)['address_2'],
                'city'         => $this->getInfo($value)['city'],
                'state'        => $this->getInfo($value)['state'],
                'zip'          => $this->getInfo($value)['zip'],
            ]);
            $user->profile()->save($profile);
            $user->save();
        }
    }

    /**
     * @param $username
     */
    protected function getInfo($username)
    {
        if ('bob_scheid' === $username) {
            return [
                'company_name' => 'DSG Live',
                'email'        => 'bob@designerservicesgroup.com',
                'phone'        => '4073311200',
                'address_1'    => '225 Pineda St',
                'address_2'    => 'Suite 127',
                'city'         => 'Longwood',
                'state'        => 'Florida',
                'zip'          => '32750'
            ];
        }

        if ('kate_conley' === $username) {
            return [
                'company_name' => 'Designer Services Group',
                'email'        => 'info@designerservicesgroup.com',
                'phone'        => '4073311200',
                'address_1'    => '225 Pineda St',
                'address_2'    => 'Suite 127',
                'city'         => 'Longwood',
                'state'        => 'Florida',
                'zip'          => '32750'
            ];
        }
    }

    /**
     * @param $str
     */
    protected function toTitleCase($str)
    {
        return ucwords(str_replace('_', ' ', $str));
    }
}
