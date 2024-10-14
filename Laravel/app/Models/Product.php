<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'companies_id',
        'name',
        'unit',
        'price',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class, 'companies_id');
    }
}
