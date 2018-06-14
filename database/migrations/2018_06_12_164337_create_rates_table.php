<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRatesTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rates');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rates', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            /*
            $table->enum('name', [
            'Rack Storage Rate', // storage type
            'Floor Storage Rate', // storage type
            'No Inspection', // handling
            'Visual Inspection', // handling
            'Required Packaging', // handling
            'Crated/Palletized' // handling
            ])->nullable();
             */
            $table->enum('type', ['storage', 'handling'])->nullable()
                  ->comment('Floor Rate is used when item is mark as floor and if not Rack Rate is Used!');
            $table->float('amount', 8, 4);
            $table->boolean('active')->default(0)->comment('Only Show Active Rates and not (softdeleted)');
            $table->softDeletes()->comment('Useful when you change rate So We Can Query Correct Amount');
            $table->timestamps();
        });
    }
}
