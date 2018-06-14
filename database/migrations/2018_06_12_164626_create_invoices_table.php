<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
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
            // users.id role.name==='customer
            $table->unsignedBigInteger('user_id')->unique()->index();
            $table->unsignedInteger('client_id')->nullable()->index()->comment('id from clients table');
            // if start and end date !== then we will use it for billing cycle
            // if === then we set it as misc invoice
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();
            // $table->float('amount', 8, 2);
            $table->text('notes');
            $table->timestamps();
            // receiving computed by?
            // storage computed by?
            // delivery computed by?
            // we need to run an artisan method to avoid timeout
        });
    }
}
