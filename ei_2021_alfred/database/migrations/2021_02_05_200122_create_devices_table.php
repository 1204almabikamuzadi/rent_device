<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->string('color');
            $table->string('image_path')->default("avatar/default.jpg");
            $table->integer('price');
            $table->boolean('isRentable')->default(true);
            $table->bigInteger('modele_id')->unsigned();
            $table->foreign('modele_id')->references('id')->on('modeles');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('devices');
    }
}
