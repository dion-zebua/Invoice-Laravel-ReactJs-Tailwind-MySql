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
    public function index(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'perPage' => 'nullable|integer|in:5,10,20,50,100',
            'search' => 'nullable|string',
            'role' => 'nullable|string|in:admin,user',
            'orderBy' => 'nullable|string|in:id,name,email',
            'orderDirection' => 'nullable|string|in:asc,desc',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $perPage = $request->input('perPage', 10);
        $search = $request->input('search', '');
        $role = $request->input('role', '');
        $orderBy = $request->input('orderBy', 'id');
        $orderDirection = $request->input('orderDirection', 'desc');

        $company = Company::orderBy($orderBy, $orderDirection)
            ->whereNotNull('name')
            ->with('user:id,name')
            ->when($role, function ($query, $role) {
                $query->where('role', $role);
            })
            ->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('id', 'like', "%{$search}%")
                    ->orWhere('address', 'like', "%{$search}%");
            })
            ->orderBy($orderBy, $orderDirection)
            ->paginate($perPage);

        $company->appends($validator->validate());

        if ($company->count() > 0) {
            return $this->dataFound(teks: 'Perusahaan', data: $company);
        }
        return $this->dataNotFound('Perusahaan');
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
        // 
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $company = Company::find($id);
        if (!$company) {
            return $this->dataNotFound('Perusahaan');
        }

        if (Auth::user()->role != 'admin' && $company->users_id != Auth::id()) {
            return $this->unauthorizedResponse();
        }

        return $this->dataFound($company, 'Perusahaan');
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
            return $this->dataNotFound('Perusahaan');
        }

        if (Auth::user()->role != 'admin' && $company->users_id != Auth::id()) {
            return $this->unauthorizedResponse();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'logo' => 'nullable|image|mimes:jpeg,jpg,png,webp|max:1024',
            'email' => 'required|email',
            'telephone' => 'required|string|min:6|max:15',
            'address' => 'required|string|max:100',
            'payment_methode' => 'required|string|max:100',
            'payment_name' => 'required|string|max:100',
            'payment_number' => 'required|string|max:100',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $validatedData = $validator->validated();

        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $filename = time() . '-' . Str::random(5) . '-' . $file->getClientOriginalName();
            $file->move(public_path('img/company'), $filename);

            $oldImage = public_path('/img/company/' . $company->logo);
            if (File::exists($oldImage)) {
                File::delete($oldImage);
            }

            $validatedData['logo'] = $filename;
        }

        $company->update($validatedData);

        return $this->editSuccess($company);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // 
    }
}
