<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CompanyMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

    public function handle($request, Closure $next, ...$guards)
    {

        if (Auth::check() && Auth::user()->role == "user" && !$this->isProfileIncomplete(Auth::user())) {

            return response()->json([
                'status' => 'false',
                'message' => 'Lengkapi profil anda.',
            ], 403);
        }

        return $next($request);
    }

    protected function isProfileIncomplete($user)
    {
        // Memeriksa jika semua field profil lengkap
        return $user->sales &&
            $user->logo &&
            $user->address &&
            $user->telephone &&
            $user->payment_methode &&
            $user->payment_name &&
            $user->payment_number;
    }
}
