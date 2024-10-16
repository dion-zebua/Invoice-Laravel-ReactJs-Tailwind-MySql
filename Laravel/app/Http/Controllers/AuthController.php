<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Mail\Verification;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;



class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validasi error.',
                'errors' => $validator->errors(),
            ], 422);
        }
        $user = User::where('email', $request['email'])->first();

        if (!$user || !Hash::check($request['password'], $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Email / password salah',
            ], 401);
        }

        $token = $user->createToken('apiToken')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Berhasil login',
            'data' => $user,
            'token' => $token,
        ], 200);
    }

    public function logout()
    {
        $user = Auth::user();

        $user->currentAccessToken()->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Berhasil logout',
            ],
            200
        );
    }

    public function sendVerifikasi(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validasi error.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Email tidak ditemukan'
            ], 404);
        }

        $tokenVerified = Str::random(60);

        $user->update([
            'token_verified' => $tokenVerified,
            'is_verified' => false,
            'email_verified_at' => NULL,
        ]);

        Mail::to($user->email)->send(new Verification($user, $tokenVerified));

        return response()->json([
            'status' => true,
            'message' => 'Verifikasi telah terkirim',
        ], 200);
    }

    public function checkVerifikasi($id, $token)
    {
        $user = User::where('id', $id)
            ->where('token_verified', $token)
            ->whereNot('is_verified', true)
            ->first();
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Token / Pengguna tidak ditemukan'
            ], 404);
        }

        $user->update([
            'token_verified' => NULL,
            'is_verified' => true,
            'email_verified_at' => Carbon::now(),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Verifikasi berhasil',
        ], 200);
    }

    public function forgotPassword(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validasi error.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Email tidak ditemukan'
            ], 404);
        }

        $tokenVerified = Str::random(60);
        Mail::to($user->email)->send(new Verification($user, $tokenVerified));

    }
}
