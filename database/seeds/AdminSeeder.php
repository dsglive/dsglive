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
        $user = User::create([
            'id'       => 1,
            'password' => config('admin.password'),
            'username' => config('admin.username'),
            'active'   => 1
        ]);

        $user->assignRole('admin');

        $profile = Profile::create([
            'email'      => config('admin.email'),
            'first_name' => 'Super',
            'last_name'  => 'Admin'
        ]);
        $user->profile()->save($profile);
        $user->save();

    }
}
