<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'users_id',
        'name',
        'logo',
        'address',
        'telephone',
        'email',
        'payment_methode',
        'payment_name',
        'payment_number',
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class , 'users_id');
    }
    public function products(): HasMany
    {
        return $this->hasMany(Product::class , 'companies_id');
    }
    public function invoices(): HasMany
    {
        return $this->hasMany(Invoice::class , 'companies_id');
    }
}
