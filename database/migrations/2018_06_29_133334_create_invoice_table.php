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
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('customer_id')->nullable()->index()->comment('id from users table');
            $table->string('customer_name')->nullable()->comment('if customer id is null , we save an unknown customer');
            $table->float('receiving_fee', 8, 4)->nullable();
            $table->json('receiving')->nullable();
            $table->float('delivery_fee', 8, 4)->nullable();
            $table->json('delivery')->nullable();
            $table->float('storage_fee', 8, 4)->nullable();
            $table->json('storage')->nullable();
            $table->float('misc_fee', 8, 4)->nullable();
            $table->json('misc')->nullable();
            $table->float('total', 8, 4)->nullable();
            $table->float('balance', 8, 4)->nullable();
            $table->timestamp('date_started')->nullable();
            $table->timestamp('date_ended')->nullable();
            $table->timestamp('due_date')->nullable();
            $table->boolean('overdue')->default(0);
            $table->string('notes')->nullable();
            $table->timestamps();
        });
    }
}
