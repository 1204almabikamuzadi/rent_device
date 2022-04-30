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

        $categoryIds=DB::table('categories')->pluck('id');
        $faker = \Faker\Factory::create();
        foreach (range(1,50) as $index) {
            DB::table('devices')->insert([
                'name'=>$faker->slug(2),
                'description'=>$faker->sentence(6),
                'isRentable'=>$faker->boolean(true),
                "price"=>$faker->numberBetween($min = 150, $max = 600),
                'category_id' => $faker->randomElement($categoryIds)
            ]);
        }



    }
}
