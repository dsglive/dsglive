<?php

use App\Models\Bin;
use Illuminate\Database\Seeder;

class DummyBinSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Bin::class, 50)->create();
    }
}
