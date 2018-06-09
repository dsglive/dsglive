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
        $this->call(RolesSeeder::class);
        $this->call(AdminSeeder::class);
        $this->call(UsersSeeder::class);
        \Artisan::call('passport:client', [
            '--password' => true,
            '-n'         => true
        ]);
        /* Can Uncomment The Seeder Below This In Production */
    }
}
