<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShippersTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shippers');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shippers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('email')->unique()->nullable()->comment('When Save as Empty String Make Sure Set it NULL');
            $table->string('phone')->nullable()->comment('Can Accept () + and numbers');
            $table->string('address_1')->nullable();
            $table->string('address_2')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable()->comment('State Name');
            $table->string('zip')->nullable()->comment('Zip Code');
            $table->string('country')->default('US')->comment('Country Code');
            $table->text('notes')->nullable();
            $table->boolean('active')->default(0);
            $table->timestamps();
        });
    }
}
