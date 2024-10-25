<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

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
            'success' => false,
            'message' => 'Validasi error.',
            'errors' => $validator->errors(),
        ], 422);
    }


    public function dataNotFound($teks = NULL)
    {
        return response()->json([
            'status' => false,
            'message' => ($teks ?? 'Data') . ' tidak ditemukan'
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
}
