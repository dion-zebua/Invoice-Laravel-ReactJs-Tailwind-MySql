<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Company;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use Illuminate\Support\Facades\Auth;

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
    public function store(\Illuminate\Http\Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'logo' => 'nullable|image|mimes:jpeg,jpg,png,webp|size:1024',
            // 'logo' => 'nullable|string',
            'email' => 'required|email|unique:users,email,' . Auth::id(),
            'telephone' => 'required|string|min:6|max:15',
            'address' => 'required|string|max:100',
            'payment_methode' => 'required|string|max:100',
            'payment_name' => 'required|string|max:100',
            'payment_number' => 'required|string|max:100',
        ]);


        // if ($request->file('image')) {
        //     $file = $request->file('image');
        //     $filename = date('YmdHi') . $file->getClientOriginalName();
        //     // $file->move(public_path('public/Image'), $filename);
        //     $data['image'] = $filename;

        //     return response()->json($filename);
        // }
        return response()->json($request->file('logo'));

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validasi error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $id = Auth::id();
        $company = Company::create([
            'users_id' => $id,
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            'logo' => $request->logo,
            'telephone' => $request->telephone,
            'payment_methode' => $request->payment_methode,
            'payment_name' => $request->payment_name,
            'payment_number' => $request->payment_number,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Berhasil tambah',
            'data' => $company,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        //
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
    public function update(UpdateCompanyRequest $request, Company $company)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        //
    }
}
