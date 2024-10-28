<?php

namespace App\Http\Controllers;

use App\Mail\ResetPassword;
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
            return $this->unprocessableContent($validator);
        }

        $user = User::where('email', $request['email'])->first();

        if ($user && !$user->is_verified) {
            return response()->json([
                'status' => false,
                'message' => 'Anda belum verifikasi!'
            ], 403);
        }

        if (!$user || !Hash::check($request['password'], $user->password)) {
            return response()->json([
                'status' => false,
                'message' => 'Email / password salah.',
            ], 401);
        }

        $token = $user->createToken('apiToken')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'Berhasil login.',
            'data' => $user,
            'token' => $token,
        ], 200);
    }

    public function logout()
    {
        /** @var User $user */
        $user = Auth::user();
        
        /** @var PersonalAccessToken $user */
        $user->currentAccessToken()->delete();
        return response()->json([
            'status' => 'true',
            'message' => 'Berhasil logout.',
        ], 200);
    }

    public function sendVerifikasi(Request $request)
    {
        $validator = Validator::make($request->all(), [
            // 'email' => 'required|email|exists:users,email',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return $this->dataNotFound('Email');
        }

        $tokenVerified = Str::random(60);

        $user->update([
            'token_verified' => Hash::make($tokenVerified),
            'is_verified' => false,
            'email_verified_at' => NULL,
        ]);

        Mail::to($user->email)->send(new Verification($user, $tokenVerified));

        return response()->json([
            'status' => true,
            'message' => 'Email Verifikasi telah terkirim.',
        ], 200);
    }

    public function checkVerifikasi($id, $token)
    {
        $user = User::where('id', $id)
            ->where('is_verified', 0)
            ->whereNotNull('token_verified')
            ->first();

        if (!$user || !Hash::check($token, $user->token_verified)) {
            return $this->dataNotFound('Token / Pengguna');
        }

        $user->update([
            'token_verified' => NULL,
            'is_verified' => true,
            'email_verified_at' => Carbon::now(),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Verifikasi berhasil.',
        ], 200);
    }

    public function forgotPassword(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return $this->dataNotFound('Email');
        }

        $tokenVerified = Str::random(60);


        $user->update([
            'token_reset_password' => Hash::make($tokenVerified),
        ]);

        Mail::to($user->email)->send(new ResetPassword($user, $tokenVerified));

        return response()->json([
            'status' => true,
            'message' => 'Email Reset Password telah terkirim.',
        ], 200);
    }

    public function resetPassword(Request $request, $id, $token)
    {

        $validator = Validator::make($request->all(), [
            'password' => 'required|string|min:8|max:30|confirmed',
            'password_confirmation' => 'required|string|min:8|max:30',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $user = User::where('id', $id)
            ->whereNotNull('token_reset_password')
            ->first();

        if (!$user && !Hash::check($token, $user->token_reset_password)) {
            return $this->dataNotFound('Token / Pengguna');
        }

        $user->update([
            'token_reset_password' => NULL,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Reset password berhasil.',
        ], 200);
    }
}
