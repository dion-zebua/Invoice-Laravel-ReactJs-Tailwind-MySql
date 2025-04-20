<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Illuminate\Support\Facades\RateLimiter;


class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */

    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson()) {
            return response()->json([
                'status' => false,
                'message' => 'Tidak terautentikasi.',
            ], 401);
        }
    }

    public function render($request, Throwable $exception)
    {
        if ($exception instanceof ThrottleRequestsException) {
            $key = $request->user()?->id ?: $request->ip();

            // Ambil waktu retry dari RateLimiter
            $retryAfter = RateLimiter::availableIn($key);

            return response()->json([
                "status" => false,
                'message' => 'Batas penggunaan API tercapai. Coba lagi dalam 1 menit.',
            ], 429);
        }

        return parent::render($request, $exception);
    }


    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
}
