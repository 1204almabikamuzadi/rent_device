<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories=['Windows_pc','Mac_pc','Phone_Android','Iphone','printers','smart_tv'];
        $faker = \Faker\Factory::create();
        foreach ($categories as $cat) {
            DB::table('categories')->insert([
            'name'=>$cat,

            ]);
        }
    }
}
