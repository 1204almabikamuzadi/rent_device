<?php

namespace Database\Factories;

use App\Models\UserAddress;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserAddressFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = UserAddress::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'street' =>$this->faker->streetName,
            'number'=>$this->faker->buildingNumber,
            'postcode'=>$this->faker->postcode,
            'city'=>$this->faker->city,
            'country'=>$this->faker->countryCode

        ];
    }
}
