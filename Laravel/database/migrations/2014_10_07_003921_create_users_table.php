<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('role', ['admin', 'user'])->default('user');
            $table->string('token_verified')->unique()->nullable();
            $table->timestamp('token_verified_before_at')->nullable();
            $table->string('token_reset_password')->nullable();
            $table->timestamp('token_reset_password_before_at')->nullable();
            $table->boolean('is_verified')->default(false);
            $table->timestamp('email_verified_at')->nullable();


            $table->string('sales')->nullable();
            $table->string('logo')->nullable();
            $table->string('address')->nullable();
            $table->string('telephone')->nullable();
            $table->string('payment_methode')->nullable();
            $table->string('payment_name')->nullable();
            $table->string('payment_number')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
