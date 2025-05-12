<?php

namespace Database\Factories;

use App\Models\Invoice;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InvoiceProduct>
 */
class InvoiceProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $price = fake()->numberBetween(50000, 500000);
        $quantity = fake()->numberBetween(1, 10);
        $amount = $price * $quantity;

        $code = Invoice::whereHas('user', function ($query) {
            $query->where('role', 'user');
        })->inRandomOrder()
            ->first()->code;


        return [
            'invoices_code' => $code,
            'name' => fake()->word(),
            'unit' => fake()->randomElement(['Pax', 'Buah', 'Pasang']),
            'price' => $price,
            'quantity' => $quantity,
            'amount' => $amount,
        ];
    }
}
