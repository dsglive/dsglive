<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePackagesTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packages');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('dsg_id')->nullable();
            $table->foreign('dsg_id')->references('id')->on('dsg')->onDelete('cascade');
            $table->unsignedBigInteger('customer_id')->nullable()->index()->comment('id from users table');
            $table->string('customer_name')->nullable()
                  ->comment('if customer id is null , we save an unknown customer');
            $table->unsignedInteger('client_id')->nullable()->index()->comment('id from clients table');
            $table->string('client_name')->nullable()->comment('if client id is null , we save an unknown client');
            $table->unsignedInteger('shipper_id')->nullable()->index()->comment('id from shippers table');
            $table->string('shipper_name')->nullable()->comment('if shipper id is null , we save an unknown shipper');
            $table->unsignedInteger('bin_id')->nullable()->comment('Item Has One Bin');
            $table->string('bin_name')->nullable();
            $table->string('description')->nullable();
            $table->timestamp('date_received')->nullable();  // for storage fee (start billing)
            $table->timestamp('date_out')->nullable();       // for storage fee (stop billing)
            $table->timestamp('date_processed')->nullable(); // for receiving fee
            $table->string('po_no')->nullable();
            $table->string('style_no')->nullable();
            $table->float('length', 8, 4)->nullable();
            $table->float('width', 8, 4)->nullable();
            $table->float('height', 8, 4)->nullable();
            $table->float('cube')->nullable();
            $table->unsignedInteger('handling_type')->nullable();  // -> rate_id
            $table->float('handling_fee')->nullable(); // individual fee for handling rate_amount
            $table->enum('store_at', ['rack', 'floor'])->default('rack')
                  ->comment('at floor or not, used for calculating storage rate');
            $table->float('storage_fee')->nullable(); // individual fee for storage rate_amount
            $table->boolean('damaged')->default(0);   // for miscellaneous fee
            $table->string('damage_description')->nullable()->comment('when mark as damaged make this required');
            $table->boolean('repaired')->default(0);
            $table->timestamp('date_repaired')->nullable()->comment('when mark as repaired make this required');
            $table->boolean('delivered')->default(0)
                  ->comment('updated when delivery ticket has packages, linked with logistics table');
            $table->timestamp('date_delivered')->nullable() // for delivery fee
                  ->comment('updated when delivery ticket has packages, linked with logistics table');
            // we also have package images and damage images to be handle by laravel image library, using media model
            $table->timestamps();
        });
    }
}
