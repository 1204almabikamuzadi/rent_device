<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ModeleSeeder extends Seeder
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
            DB::table('modeles')->insert([
                'name'=>$faker->slug(2),
                'description'=>$faker->sentence(6),
                'specifications'=>$faker->sentence(6),
                'category_id' => $faker->randomElement($categoryIds)
            ]);
        }
    }
}
