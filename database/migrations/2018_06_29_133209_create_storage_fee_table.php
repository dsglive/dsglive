<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStorageFeeTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('storage_fee');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('storage_fee', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('customer_id')->nullable()->index();
            $table->string('customer_name')->nullable();
            $table->unsignedInteger('client_id')->nullable()->index();
            $table->string('client_name')->nullable();
            $table->float('amount', 8, 4)->nullable(); // total storage_fee in packages , we will call it storage_amount on dsg table
            $table->string('notes')->nullable(); // description in packages table
            $table->timestamp('date_received')->nullable();
            $table->timestamp('date_out')->nullable(); // maybe this is populated when item is delivered
            $table->timestamps();
        });
    }
}
