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

        $devicesIds=DB::table('devices')->pluck('id');
        dd($devicesIds);
        // $users=DB::table('devices')->get();
        //   \App\Models\User::factory(10)->create()->each(function($user){
        //     $address=\App\Models\UserAddress::factory()->make();
        //     $user->address()->save($address);
        // });



    }
}
