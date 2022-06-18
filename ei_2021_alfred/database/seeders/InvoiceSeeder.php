<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InvoiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reservationsIDs=DB::table('reservations')->get()->pluck('id');
        $faker = \Faker\Factory::create();
        foreach ($reservationsIDs as $index) {
            DB::table('invoices')->insert([
            "amount"=>$faker->numberBetween($min = 150, $max = 600),
            "number"=>$faker->randomNumber(7)
            ]);
        }

    }
}
