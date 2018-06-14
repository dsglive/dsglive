<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('dsg_id')->nullable()->comment('Dsg Has Many Item');
            $table->unsignedInteger('client_id')->nullable()->index()->comment('id from clients table');
            $table->unsignedInteger('bin_id')->nullable()->comment('Item Has One Bin');
            $table->string('description');
            
            $table->json('volume')->nullable()
                  ->comment('if computed is true we use lxwxh in computation of our cube');

            /*->default(
            '{
            cube: 0,
            dimensions: {
            length: null,
            width: null,
            height: null,
            },
            unit: "ft",
            computed: false
            }'
            )*/

            $table->timestamp('date_received')->nullable();
            $table->timestamp('date_processed')->nullable();

            $table->string('style_no')->nullable();
            $table->unsignedInteger('handling_type'); // -> rate_id
            $table->enum('store_at', ['rack', 'floor'])->default('rack')
                  ->comment('at floor or not, used for calculating storage rate');

            $table->boolean('damaged')->default(0);
            $table->string('damage_description')->nullable()->comment('when mark as damaged make this required');

            $table->boolean('repaired')->default(0);
            $table->timestamp('date_repaired')->nullable()->comment('when mark as repaired make this required');

            $table->boolean('delivered')
                  ->comment('updated when delivery ticket has items, linked with logistics table');
            $table->timestamp('date_delivered')->nullable()
                  ->comment('updated when delivery ticket has items, linked with logistics table');
            // we also have item images and damage images to be handle by laravel image library, using media model
            $table->timestamps();
        });
    }
}
