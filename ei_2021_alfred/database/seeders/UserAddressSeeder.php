<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserAddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        \App\Models\User::factory(10)->create()->each(function($user){
            $address=\App\Models\UserAddress::factory()->make();
            $user->address()->save($address);
        });
       
    }
}
