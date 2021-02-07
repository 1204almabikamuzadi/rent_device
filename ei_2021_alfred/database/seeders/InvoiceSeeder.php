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
        foreach (range(1,50) as $index) {
            DB::table('invoices')->insert([
            'invoiceDate'=>$faker->date(),
            'reservation_id' => $faker->randomElement($reservationsIDs)
            ]);
        }

    }
}
