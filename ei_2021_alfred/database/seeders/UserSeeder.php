<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        DB::table('users')->insert([
            'name' => "MABIKA ELYAS",
            'email' => "cizubualfred@yahoo.fr",
            'age'=>$faker->numberBetween($min=18,$max=50),
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'phone'=>$faker->phoneNumber,
            'role_id'=>"1"
            
        ]);
    }
}
