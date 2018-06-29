<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReceivingFeeTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('receiving_fee');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receiving_fee', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('customer_id')->nullable()->index();
            $table->string('customer_name')->nullable();
            $table->unsignedInteger('client_id')->nullable()->index();
            $table->string('client_name')->nullable();
            $table->unsignedInteger('dsg_id')->nullable()->index();
            $table->float('amount', 8, 4)->nullable(); // receivinng_amount on dsg table
            $table->string('notes')->nullable();
            $table->timestamp('date_processed')->nullable(); // we need to add date_processed on dsg table
            $table->timestamps();
        });
    }
}
