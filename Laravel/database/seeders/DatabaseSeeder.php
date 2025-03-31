<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        \App\Models\User::factory()->create([
            'name' => 'PT. Tester',
            'email' => 'zebuadbless@gmail.com',
            'password' => 'Password',
            'role' => 'admin',
            'is_verified' => 1,
        ]);
        \App\Models\User::factory()->create([
            'name' => 'PT. Tester',
            'email' => 'ads1.dionzebua@gmail.com',
            'password' => 'Password',
            'role' => 'user',
            'is_verified' => 1,
            'sales' => "Dion Zebua",
            "logo" => "as.jpg",
            "address" => "Depok Jawa Barat",
            "telephone" => "088289317870",
            "payment_methode" => "BANK MANDIRI",
            "payment_name" => "Dion Elson Famahato Zebua",
            "payment_number" => "203892393889",
        ]);
        // \App\Models\User::factory(3)->create();
    }
}
