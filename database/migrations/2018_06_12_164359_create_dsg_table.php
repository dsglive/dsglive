<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDsgTable extends Migration
{
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dsg');
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dsg', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->unique()->index();
            // Customer = users:id,roles:customer
            $table->unsignedBigInteger('customer_id')->nullable()->index()->comment('id from users table');
            // if customer id is not null we use the customer entity for the name
            $table->string('customer_name')->nullable()->comment('if customer id is null , we save an unknown customer');
            // Client = clients:id
            $table->unsignedInteger('client_id')->nullable()->index()->comment('id from clients table');
            // if client id is not null we use the client entity for the name
            $table->string('client_name')->nullable()->comment('if client id is null , we save an unknown client');
            // Shipper = shippers:id
            $table->unsignedInteger('shipper_id')->nullable()->index()->comment('id from shippers table');
            // if shipper id is not null we use the shipper entity for the name
            $table->string('shipper_name')->nullable()->comment('if shipper id is null , we save an unknown shipper');

            // Receiver = users:id, roles:admin
            $table->unsignedBigInteger('received_by')->nullable()->index()
                  ->comment('id from users table where user role === admin');
            $table->string('received_by_name')->nullable();

            // Auditor = users:id, roles:admin
            $table->unsignedBigInteger('written_by')->nullable()->index()
                  ->comment('id from users table where user role === admin');
            $table->string('written_by_name')->nullable();

            // Inspector = users:id, roles:admin
            $table->unsignedBigInteger('inspected_by')->nullable()->index()
                  ->comment('id from users table where user role === admin');
            $table->string('inspected_by_name')->nullable();

            // Finder = users:id, roles:admin
            $table->unsignedBigInteger('located_by')->nullable()->index()
                  ->comment('id from users table where user role === admin');
            $table->string('located_by_name')->nullable();
            // To be Updated During Items Creation or Deletion
            $table->unsignedInteger('total_pieces')->nullable();
            $table->float('total_cube', 8, 4)->nullable();
            $table->float('receiving_amount', 8, 4)->nullable();
            // Responsible For Warehouse
            $table->boolean('active')->default(0)
                  ->comment('if not active then we query it on warehouse data table, active for receiving');
            $table->softDeletes();
            $table->timestamps();
        });
        // set dsg number starting id number
        DB::statement('ALTER TABLE dsg AUTO_INCREMENT = 100000;');
    }
}
