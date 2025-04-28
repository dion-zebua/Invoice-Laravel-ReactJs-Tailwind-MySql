<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $payment = fake()->creditCardDetails();
        return [
            'name' => fake()->company(),
            'email' => fake()->unique()->safeEmail(),
            // 'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'role' => 'user',
            // 'remember_token' => Str::random(10),

            'is_verified' => fake()->numberBetween(0, 1),
            'sales' => fake()->name(),
            "logo" => "as.jpg",
            "address" => fake()->address(),
            "telephone" => fake()->phoneNumber(),
            "payment_methode" => $payment['type'],
            "payment_name" => $payment['name'],
            "payment_number" => $payment['number'],
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
