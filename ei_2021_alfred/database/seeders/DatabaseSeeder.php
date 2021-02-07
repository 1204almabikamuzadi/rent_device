<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create()->each(function($user){
            $address=\App\Models\UserAddress::factory()->make();
            $user->address()->save($address);
        });
        \App\Models\Category::factory(10)->create()->each(function($cat){
            $devices=\App\Models\Device::factory(5)->make();
            $cat->devices()->saveMany($devices);
        });






    }

}
