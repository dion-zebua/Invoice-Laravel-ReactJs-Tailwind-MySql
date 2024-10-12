<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\Verification;
use App\Models\Company;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|max:30',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validasi error.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $tokenVerified = Str::random(60);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'token_verified' => $tokenVerified,
        ]);

        $company = Company::create([
            'users_id' => $user->id,
        ]);

        Mail::to($request->email)->send(new Verification($user, $tokenVerified));

        return response()->json([
            'status' => true,
            'message' => 'Berhasil tambah.',
            'data' => $user,
        ], 201);
        return response()->json([
            'status' => false,
            'message' => 'gagal tambah.',
        ], 500);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);

        if ($user) {

            if (Auth::user()->role != 'admin' && $user->id != Auth::id()) {
                return $this->unauthorizedResponse();
            }

            return response()->json([
                'status' => true,
                'message' => 'Pengguna ditemukan',
                'data' => $user,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Pengguna tidak ditemukan'
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Pengguna tidak ditemukan'
            ], 404);
        }

        if (Auth::user()->role != 'admin' && $user->id != Auth::id()) {
            return $this->unauthorizedResponse();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'string|max:50',
            'email' => 'email|unique:users,email,' . $id,
            'password' => 'string|min:8|max:30',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validasi error.',
                'errors' => $validator->errors(),
            ], 422);
        }


        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Berhasil update.',
            'data' => $user,
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {

            return response()->json([
                'status' => false,
                'message' => 'Pengguna tidak ditemukan'
            ], 404);
        }
        $user->delete();
        return response()->json([
            'status' => true,
            'message' => 'Pengguna telah dihapus',
        ], 200);
    }


    public function sendVerifikasi($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Pengguna tidak ditemukan'
            ], 404);
        }

        $tokenVerified = Str::random(60);

        $user->update([
            'token_verified' => $tokenVerified,
            'is_verified' => 0,
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
            ->whereNot('is_verified', 1)
            ->first();
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Token / Pengguna tidak ditemukan'
            ], 404);
        }

        $user->update([
            'token_verified' => NULL,
            'is_verified' => 1,
            'email_verified_at' => Carbon::now(),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Verifikasi berhasil',
        ], 200);
    }
}
