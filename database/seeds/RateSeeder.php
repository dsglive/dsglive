<?php

use App\Models\Rate;
use Illuminate\Database\Seeder;

class RateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rate::create([
            'name'   => 'Rack Storage Rate',
            'amount' => floatval('0.1465'),
            'type'   => 'storage',
            'active' => true
        ]);
        Rate::create([
            'name'   => 'Floor Storage Rate',
            'amount' => floatval('0.2475'),
            'type'   => 'storage',
            'active' => true
        ]);

        Rate::create([
            'name'   => 'No Inspection',
            'amount' => floatval('12'),
            'type'   => 'handling',
            'active' => true
        ]);

        Rate::create([
            'name'   => 'Visual Inspection',
            'amount' => floatval('18'),
            'type'   => 'handling',
            'active' => true
        ]);

        Rate::create([
            'name'   => 'Required Packaging',
            'amount' => floatval('21'),
            'type'   => 'handling',
            'active' => true
        ]);

        Rate::create([
            'name'   => 'Crated/Palletized',
            'amount' => floatval('25'),
            'type'   => 'handling',
            'active' => true
        ]);

    }
}
