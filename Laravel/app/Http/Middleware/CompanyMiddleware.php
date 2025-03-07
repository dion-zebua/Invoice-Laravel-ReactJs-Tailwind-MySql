<?php

namespace App\Http\Middleware;

use App\Models\Setting;
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

        if (Auth::check() && Auth::user()->role == "user") {
            // Periksa jika profil pengguna tidak lengkap
            if (!$this->isProfileIncomplete(Auth::user())) {
                // Redirect ke halaman profil dengan pesan error
                return response()->json([
                    'status' => 'false',
                    'message' => 'Lengkapi profil bisnis anda.',
                ], 403);
            }
        }
        return $next($request);
    }

    protected function isProfileIncomplete($user)
    {
       // Memeriksa jika semua field profil lengkap
        return !$user->nama ||
            !$user->phone ||
            !$user->jenis_kelamin ||
            !$user->alamat ||
            !$user->rek_bank ||
            !$user->no_rek ||
            !$user->nama_nasabah ||
            !$user->tanggal_pembuatan_paspor ||
            !$user->no_paspor ||
            !$user->tempat_pembuatan_paspor;
    }
}
