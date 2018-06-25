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
            $table->timestamp('start_time')->nullable()->comment('use date time ui');
            $table->timestamp('end_time')->nullable()->comment('use date time ui');
            $table->float('prep_time', 8, 4)->nullable();
            $table->float('travel_time', 8, 4)->nullable();
            $table->float('clean_up_time', 8, 4)->nullable();
            $table->float('total_time', 8, 4)->nullable();
            $table->float('rate', 8, 4);
            $table->float('surcharge', 8, 4);
            $table->float('total_charges', 8, 4);
            //  total time = sum all time
            // amount = rate * total_time
            // total charge = amount + (amount*(surchage/100)) where in surchage is in percent value
            $table->text('notes')->nullable();
            $table->timestamp('date_delivered')->nullable();
            $table->enum('type', ['delivery_ticket', 'field_transfer'])->default('field_transfer')
                  ->comment('type of ticket');
            // delivery ticket & field transfer.
            $table->string('do_address_1')->nullable();
            $table->string('do_address_2')->nullable();
            $table->string('do_city')->nullable();
            $table->string('do_state')->nullable()->comment('State Name');
            $table->string('do_zip')->nullable()->comment('Zip Code');
            // added only on field transfer
            $table->string('pu_address_1')->nullable();
            $table->string('pu_address_2')->nullable();
            $table->string('pu_city')->nullable();
            $table->string('pu_state')->nullable()->comment('State Name');
            $table->string('pu_zip')->nullable()->comment('Zip Code');
            // added only on delivery
            $table->json('packages');
            $table->timestamps();
        });
    }
}
