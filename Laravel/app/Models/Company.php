<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Model;

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

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($company) {

            if (File::exists(public_path('/img/company/' . $company->logo))) {
                File::delete(public_path('/img/company/' . $company->logo));
            }
        });
    }
}
