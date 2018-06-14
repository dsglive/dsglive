<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDsgsTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dsgs');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dsgs', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->unique()->index();
            // Customer = users:id,roles:customer
            $table->unsignedBigInteger('customer_id')->nullable()->index()->comment('id from users table');
            // if customer id is not null we use the customer entity for the name
            $table->string('customer_name')->comment('if customer id is null , we save an unknown customer');
            // Client = clients:id
            $table->unsignedInteger('client_id')->nullable()->index()->comment('id from clients table');
            // if client id is not null we use the client entity for the name
            $table->string('client_name')->comment('if client id is null , we save an unknown client');
            // Shipper = shippers:id
            $table->unsignedInteger('shipper_id')->nullable()->index()->comment('id from shippers table');
            // if shipper id is not null we use the shipper entity for the name
            $table->string('shipper_name')->comment('if shipper id is null , we save an unknown shipper');

            // Receiver = users:id, roles:admin
            $table->unsignedBigInteger('received_by')->nullable()->index()
                  ->comment('id from users table where user role === admin');
            // Auditor = users:id, roles:admin
            $table->unsignedBigInteger('written_by')->nullable()->index()
                  ->comment('id from users table where user role === admin');
            // Inspector = users:id, roles:admin
            $table->unsignedBigInteger('inspected_by')->nullable()->index()
                  ->comment('id from users table where user role === admin');
            // Finder = users:id, roles:admin
            $table->unsignedBigInteger('located_by')->nullable()->index()
                  ->comment('id from users table where user role === admin');
            /* This Are Removed From the Original Dsg Schema, Since it is redundant and all based on items table
            which can be appended in DSG model
            $table->integer('total_pieces')->default(0)
            ->comment('Add Model Observer to Watch During Item Creation or Deletion and Update This Count');
            $table->decimal('receiving_amount', 8, 2);
            $table->timestamp('date_received')->nullable();
            $table->timestamp('date_processed')->nullable();
             */
            $table->boolean('active')->default(0)
                  ->comment('if not active then we query it on warehouse data table, active for receiving');
            $table->timestamps();
        });
        // set dsg number starting id number
        DB::statement('ALTER TABLE dsg AUTO_INCREMENT = 100000;');

    }
}
