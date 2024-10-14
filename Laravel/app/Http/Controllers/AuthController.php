<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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

        Auth::user()->currentAccessToken()->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Berhasil logout',
            ],
            200
        );
    }
}
