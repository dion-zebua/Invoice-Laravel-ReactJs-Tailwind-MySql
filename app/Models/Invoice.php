<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Invoice extends Model
{
    use HasFactory;

    protected $table = 'invoices';

    protected $guarded = [
        'id',
    ];

    protected $appends = ['numberToWords'];

    public function invoiceProducts(): HasMany
    {
        return $this->hasMany(InvoiceProduct::class, 'invoices_code', 'code');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'users_id');
    }

    public function getNumberToWordsattribute()
    {
        return numberToWords($this->grand_total);
    }

    public function getRemainingBalanceAttribute($value)
    {
        return $this->status === 'paid' ? 0 : $value;
    }
}
