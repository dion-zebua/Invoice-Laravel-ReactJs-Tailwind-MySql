<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MaintenanceMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $setting = Setting::first();
        if ($setting->is_maintenance) {
            return response()->json([
                'status' => false,
                'message' => 'Aplikasi sedang dalam pemeliharaan, coba lagi nanti.'
            ], 503);
        }

        return $next($request);
    }
}
