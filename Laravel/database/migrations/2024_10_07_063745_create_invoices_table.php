<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('users_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            $table->foreignId('companies_id')
                ->references('id')
                ->on('companies')
                ->onDelete('cascade');
            $table->string("code")->unique();
            $table->timestamp("expire")->nullable();
            $table->string("to_name");
            $table->string("to_company");
            $table->string("to_address");
            $table->integer("to_telphone");
            $table->string("to_email");
            $table->integer("sub_total");
            $table->integer("discount");
            $table->integer("total");
            $table->boolean("tax");
            $table->integer("grand_total");
            $table->integer("down_payment");
            $table->integer("paid_off");
            $table->enum('status', ['paid', 'unpaid']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};