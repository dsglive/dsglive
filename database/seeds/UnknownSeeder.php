<?php
use App\Models\User;
use App\Models\Client;
use App\Models\Profile;
use App\Models\Shipper;
use Illuminate\Database\Seeder;

class UnknownSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createUnknownCustomerClient();
        $this->createUnknownShipper();
    }

    /**
     * @param $role
     */
    protected function createUnknownCustomerClient()
    {
        $user  = User::create([
            'id' => 1001,
            'password' => 'secret',
            'username' => 'unknown_customer',
            'active'   => 1
        ]);

        $user->assignRole('customer');

        $profile = new Profile;
        $profile->first_name = 'Unknown';
        $profile->last_name = 'Customer';
        $profile->save();
        $user->profile()->save($profile);
        $user->save();

        $client       = new Client();
        $client->id = 1;
        $client->name = 'Unknown Client';
        $client->save();
        $user->clients()->save($client);
    }

    /**
     * @param $count
     */
    private function createUnknownShipper()
    {
            Shipper::create([
                'name'      => 'Unknown Shipper',
            ]);
    }
}
