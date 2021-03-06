<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        $usersIDs = DB::table('users')->pluck('id');
        $devicesIDs= DB::table('devices')->pluck('id');
        foreach (range(1,50) as $index) {
            DB::table('reservations')->insert([
            'startDate'=>$faker->date(),
            'endDate'=>$faker->date(),
            'user_id' => $faker->randomElement($usersIDs),
            'device_id' => $faker->randomElement($devicesIDs),
            'invoice_id' => $faker->randomElement($devicesIDs)
            ]);
        }
    }
}
