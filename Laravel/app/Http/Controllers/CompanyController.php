<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;

class CompanyController extends Controller
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
    // public function store(Request $request)
    // {
    //     // return $request;
    //     $validator = Validator::make($request->all(), [
    //         'name' => 'required|string|max:50',
    //         'logo' => 'nullable|image|mimes:jpeg,jpg,png,webp|max:1024',
    //         'email' => 'required|email|unique:users,email,' . Auth::id(),
    //         'telephone' => 'required|string|min:6|max:15',
    //         'address' => 'required|string|max:100',
    //         'payment_methode' => 'required|string|max:100',
    //         'payment_name' => 'required|string|max:100',
    //         'payment_number' => 'required|string|max:100',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Validasi error',
    //             'errors' => $validator->errors(),
    //         ], 422);
    //     }

    //     if ($request->file('logo')) {
    //         $file = $request->file('logo');
    //         $filename = time() . '-' . Str::random(5) . '-' . $file->getClientOriginalName();
    //         $file->move(public_path('img/company'), $filename);
    //         $data['image'] = $filename;
    //     }

    //     $id = Auth::id();
    //     $company = Company::create([
    //         'users_id' => $id,
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'address' => $request->address,
    //         'logo' => $filename ?? NULL,
    //         'telephone' => $request->telephone,
    //         'payment_methode' => $request->payment_methode,
    //         'payment_name' => $request->payment_name,
    //         'payment_number' => $request->payment_number,
    //     ]);

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Berhasil tambah',
    //         'data' => $company,
    //     ], 201);
    // }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $company = Company::find($id);
        if ($company) {
            if (Auth::user()->role != 'admin' && $company->users_id != Auth::id()) {
                return $this->unauthorizedResponse();
            }

            return response()->json([
                'status' => true,
                'message' => 'Perusahaan ditemukan',
                'data' => $company,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Perusahaan tidak ditemukan'
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $company = Company::find($id);
        if (!$company) {
            return response()->json([
                'status' => false,
                'message' => 'Perusahaan tidak ditemukan'
            ], 404);
        }

        if (Auth::user()->role != 'admin' && $company->users_id != Auth::id()) {
            return $this->unauthorizedResponse();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'logo' => 'nullable|image|mimes:jpeg,jpg,png,webp|max:1024',
            'email' => 'required|email|unique:users,email,' . Auth::id(),
            'telephone' => 'required|string|min:6|max:15',
            'address' => 'required|string|max:100',
            'payment_methode' => 'required|string|max:100',
            'payment_name' => 'required|string|max:100',
            'payment_number' => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validasi error',
                'errors' => $validator->errors(),
            ], 422);
        }

        if ($request->file('logo')) {
            $file = $request->file('logo');
            $filename = time() . '-' . Str::random(5) . '-' . $file->getClientOriginalName();
            $file->move(public_path('img/company'), $filename);
            $data['image'] = $filename;
        }

        $company = Company::create([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'logo' => $filename ?? NULL,
            'telephone' => $request->telephone,
            'payment_methode' => $request->payment_methode,
            'payment_name' => $request->payment_name,
            'payment_number' => $request->payment_number,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil edit',
            'data' => $company,
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $company = Company::find($id);
        if (!$company) {

            return response()->json([
                'status' => false,
                'message' => 'Perusahaan tidak ditemukan'
            ], 404);
        }
        if (File::exists(public_path('/img/company/' . $company->logo))) {
            File::delete(public_path('/img/company/' . $company->logo));
        }

        $company->delete();

        return response()->json([
            'status' => true,
            'message' => 'Perusahaan telah dihapus',
        ], 200);
    }
}
