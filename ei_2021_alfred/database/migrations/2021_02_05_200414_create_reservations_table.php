<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('device_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->date('startDate');                                                  
            $table->date('endDate');
            $table->boolean('active')->default(true);
            $table->bigInteger('invoice_id')->unsigned();
            $table->foreign('device_id')->references('id')->on('devices')
            ->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')
            ->onDelete('cascade');
            $table->foreign('invoice_id')->references('id')->on('invoices')
            ->onDelete('cascade');
            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
}
