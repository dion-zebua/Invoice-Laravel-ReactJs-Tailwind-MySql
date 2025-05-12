<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invoice>
 */
class InvoiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $subTotal = fake()->numberBetween(500000, 10000000);
        $discount = fake()->numberBetween(0, 100000);
        $total = $subTotal - $discount;
        $tax = fake()->randomElement([1, 0]);
        $grandTotal = $tax === 1 ? (int) ($total * 0.89) : $total;
        $downPayment = fake()->numberBetween(0, $grandTotal);
        $remainingBalance = fake()->randomElement(['paid', 'unpaid']) === 'paid' ? $grandTotal : $grandTotal - $downPayment;

        $id = User::where('role', 'user')->inRandomOrder()->first()->id;

        return [
            'code' => strtoupper(Str::random(7)),
            'expire' => now()->addDays(fake()->numberBetween(1, 30)),
            'to_name' => fake()->company(),
            'to_sales' => fake()->name(),
            'to_address' => fake()->address(),
            'to_telephone' => fake()->phoneNumber(),
            'to_email' => fake()->companyEmail(),
            'sub_total' => $subTotal,
            'discount' => $discount,
            'total' => $total,
            'tax' => $tax,
            'grand_total' => $grandTotal,
            'down_payment' => $downPayment,
            'remaining_balance' => $remainingBalance,
            'status' => $remainingBalance == $grandTotal ? 'paid' : 'unpaid',
            'users_id' => $id,
        ];
    }
}
