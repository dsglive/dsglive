<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->passportInstall();
        $this->call(RolesSeeder::class);
        $this->call(AdminSeeder::class);
        $this->call(RateSeeder::class);
        $this->call(BinSeeder::class);
        if (App::environment(['local', 'staging'])) {
            // This Seeder Would Not Be Run on Production
            $this->call(DummyUsersSeeder::class);
        }
    }

    private function passportInstall()
    {
        \Artisan::call('passport:keys', [
            '--force' => true,
            '-n'      => true
        ]);
        \Artisan::call('passport:client', [
            '--personal' => true,
            '-n'         => true
        ]);
    }
}
