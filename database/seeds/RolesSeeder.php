<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder
{
    public function run()
    {
        // Reset cached roles and permissions
        app()['cache']->forget('spatie.permission.cache');

        $role = Role::create(['name' => 'admin']);

        $role = Role::create(['name' => 'warehouse']);

        $role = Role::create(['name' => 'customer']);
    }
}
