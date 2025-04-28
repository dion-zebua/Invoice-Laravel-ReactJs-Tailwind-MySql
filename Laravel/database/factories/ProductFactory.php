<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $id = User::where('role', 'user')->inRandomOrder()->first()->id;
        return [
            'users_id' => $id,
            'name' => Str::title(fake()->word()),
            'unit' => fake()->randomElement(['Pax', 'Pasang', 'Buah', 'Kodi']),
            'price' => fake()->numberBetween(50000, 1000000),
        ];
    }
}
