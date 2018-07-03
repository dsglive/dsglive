<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMiscTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('misc');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('misc', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('customer_id')->nullable()->index();
            $table->string('customer_name')->nullable();
            $table->unsignedInteger('client_id')->nullable()->index();
            $table->string('client_name')->nullable();
            $table->float('amount', 8, 4)->nullable();
            $table->string('notes')->nullable();
            $table->boolean('invoiced')->default(0);
            $table->timestamp('invoice_date')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }
}
