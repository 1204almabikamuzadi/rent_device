<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class DeviceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $modeles=DB::table('modeles')->pluck('id');
        $faker = \Faker\Factory::create();
        foreach (range(1,50) as $index) {
            DB::table('devices')->insert([
                'color'=>$faker->colorName(),
                'isRentable'=>$faker->boolean(true),
                "price"=>$faker->numberBetween($min = 150, $max = 600),
                'modele_id' => $faker->randomElement($modeles)
            ]);
        }



    }
}
