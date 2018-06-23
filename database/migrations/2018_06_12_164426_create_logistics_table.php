<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLogisticsTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('logistics');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logistics', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('dsg_id')->unique()->index();

            $table->unsignedBigInteger('customer_id')->nullable()->index()->comment('id from users table');
            $table->string('customer_name')->comment('if customer id is null , we save an unknown customer');

            $table->unsignedInteger('client_id')->nullable()->index()->comment('id from clients table');
            $table->string('client_name')->comment('if client id is null , we save an unknown client');

            // This will produce Total Time

            // We need to convert start_time to end_time to float
            $table->timestamp('start_time')->nullable()->comment('use date time ui');
            $table->timestamp('end_time')->nullable()->comment('use date time ui');

            $table->float('prep_time', 8, 2)->nullable();
            $table->float('travel_time', 8, 2)->nullable();
            $table->float('clean_up_time', 8, 2)->nullable();
            $table->float('total_time', 8, 2)->nullable();
            $table->float('rate', 8, 2);
            $table->float('surcharge', 8, 2);
            $table->float('total_charges', 8, 2);
            //  total time = sum all time
            // amount = rate * total_time
            // total charge = amount + (amount*(surchage/100)) where in surchage is in percent value

            // we need to create a new model for delivery ticket and field transfer
            // logistic is a combination of delivery and field transfer record
            // review polymorph
            $table->text('notes')->nullable();

            // for pickup and drop off address
            $table->string('address_1')->nullable();
            $table->string('address_2')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable()->comment('State Name');
            $table->string('zip')->nullable()->comment('Zip Code');

            $table->timestamps();
        });
    }
}
