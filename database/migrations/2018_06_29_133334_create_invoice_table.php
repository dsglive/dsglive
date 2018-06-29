<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoiceTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoice');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('customer_id')->nullable()->index()->comment('id from users table');
            $table->string('customer_name')->nullable()->comment('if customer id is null , we save an unknown customer');
            $table->unsignedInteger('client_id')->nullable()->index()->comment('id from clients table');
            $table->string('client_name')->nullable()->comment('if client id is null , we save an unknown client');
            $table->float('receiving_fee', 8, 4)->nullable();
            $table->float('delivery_fee', 8, 4)->nullable();
            $table->float('storage_fee', 8, 4)->nullable();
            $table->float('misc_fee', 8, 4)->nullable();
            $table->float('total_amount', 8, 4);
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();
            $table->timestamp('due_date')->nullable();
            $table->boolean('overdue')->default(0);
            $table->text('notes');
            $table->timestamps();

        });
    }
}
