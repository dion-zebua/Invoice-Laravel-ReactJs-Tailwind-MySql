<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function unauthorizedResponse()
    {
        return response()->json([
            'status' => 'false',
            'message' => 'Akses tidak sah.',
        ], 403);
    }

    public function unprocessableContent($validator)
    {
        return response()->json([
            'status' => false,
            'message' => $validator->errors(),
        ], 422);
    }


    public function dataNotFound($teks = NULL)
    {
        return response()->json([
            'status' => false,
            'message' => ($teks ?? 'Data') . ' tidak ditemukan.'
        ], 404);
    }

    public function dataFound($data = NULL, $teks = Null)
    {
        return response()->json([
            'status' => true,
            'message' => ($teks ?? 'Data') . ' ditemukan.',
            'data' => $data,
        ], 200);
    }

    public function createSuccess($data)
    {
        return response()->json([
            'status' => true,
            'message' => 'Berhasil tambah.',
            'data' => $data,
        ], 201);
    }

    public function editSuccess($data)
    {
        return response()->json([
            'status' => true,
            'message' => 'Berhasil edit.',
            'data' => $data,
        ], 200);
    }

    public function deleteSuccess()
    {
        return response()->json([
            'status' => true,
            'message' => 'Berhasil hapus.',
        ], 200);
    }

    public function limitTime($teks, $time)
    {
        return response()->json([
            'status' => false,
            'message' => "Kirim ulang $teks setelah $time.",
        ], 429);
    }

    public function tokenExpired()
    {
        return response()->json([
            'status' => false,
            'message' => "Token kadaluarsa.",
        ], 400);
    }

    public function unverified()
    {
        return response()->json([
            'status' => false,
            'message' => 'Anda belum verifikasi!'
        ], 403);
    }

    public function allDataCount()
    {
        $auth = Auth::user();

        $user = User::count();
        $product = Product::when($auth->role == 'user', function ($q) use ($auth) {
            $q->where('users_id', $auth->id);
        })->count();
        $invoice = Invoice::when($auth->role == 'user', function ($q) use ($auth) {
            $q->where('users_id', $auth->id);
        })->count();

        $data = [
            "user" => $auth->role == 'admin' ? $user : 0,
            "product" => $product,
            "invoice" => $invoice,
        ];

        return $this->dataFound($data, "Total data ditemukan.");
    }
}
