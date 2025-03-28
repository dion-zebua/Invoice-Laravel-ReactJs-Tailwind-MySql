<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\File;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = 'users';

    protected $guarded = [
        'id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'token_verified',
        'token_verified_before_at',
        'token_reset_password',
        'token_reset_password_before_at',
        'password',
        'remember_token',
        'email_verified_at',
        'updated_at',
        'created_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        // 'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function invoice(): HasMany
    {
        return $this->hasMany(Invoice::class, 'users_id');
    }

    public function getLogoAttribute($value)
    {
        $img = public_path($value);
        $ImgResult = '';
        if (File::exists($img)) {
            $ImgResult = $value;
        }
        return [
            'path' => $ImgResult ? $ImgResult : null,
            'result' => $ImgResult ? asset($ImgResult) : null,
        ];
    }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($user) {
            if (file_exists($user->logo['path'])) {
                unlink($user->logo['path']);
            }
        });
    }
}
