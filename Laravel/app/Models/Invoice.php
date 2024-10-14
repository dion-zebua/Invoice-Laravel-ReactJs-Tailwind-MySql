<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $table = 'invoices';

    protected $fillable = [
        'code',
        'expire',
        'to_name',
        'to_company',
        'to_address',
        'to_telephone',
        'to_email',
        'sub_total',
        'discount',
        'total',
        'tax',
        'grand_total',
        'down_payment',
        'paid_off',
        'status',
    ];
}
