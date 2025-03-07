<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\Verification;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
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
    public function index(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'perPage' => 'nullable|integer|in:5,10,20,50,100',
            'verified' => 'nullable|boolean',
            'search' => 'nullable|string',
            'role' => 'nullable|string|in:admin,user',
            'orderBy' => 'nullable|string|in:id,name,sales,telephone,invoice_count',
            'orderDirection' => 'nullable|string|in:asc,desc',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $perPage = $request->input('perPage', 10);
        $is_verified = $request->input('verified');
        $search = $request->input('search', '');
        $role = $request->input('role', '');
        $orderBy = $request->input('orderBy', 'id');
        $orderDirection = $request->input('orderDirection', 'desc');

        $user = User::query()->select('id', 'name', 'sales', 'role', 'telephone', 'is_verified')
            ->withCount('invoice')
            ->when($role, function ($query, $role) {
                $query->where('role', $role);
            })
            ->when($is_verified, function ($query, $is_verified) {
                $query->where('is_verified', $is_verified);
            })->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('sales', 'like', "%{$search}%");
            })
            ->orderBy($orderBy, $orderDirection)
            ->paginate($perPage);

        $user->appends($validator->validated());

        if ($user->count() > 0) {
            return $this->dataFound($user, 'Pengguna');
        }
        return $this->dataNotFound('Pengguna');
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
        $request['role'] = $request['role'] ?? 'user';
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'email' => 'required|email|unique:users,email',
            'role' => 'required|string|in:admin,user',
            'password' => 'required|string|min:8|max:30',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $tokenVerified = Str::random(60);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'token_verified' => Hash::make($tokenVerified),
        ]);

        Mail::to($request->email)->send(new Verification($user, $tokenVerified));

        return $this->createSuccess($user);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);

        if ($user) {

            $userLogin = Auth::user();
            if ($userLogin->role != 'admin' && $user->id != $userLogin->id) {
                return $this->unauthorizedResponse();
            }

            return $this->dataFound($user, 'Pengguna');
        }

        return $this->dataNotFound('Pengguna');
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
            return $this->dataNotFound('Pengguna');
        }

        $userLogin = Auth::user();
        if ($userLogin->role != 'admin' && $user->id != $userLogin->id) {
            return $this->unauthorizedResponse();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'email' => 'required|email|unique:users,email,' . $id,
            'password' => 'required|string|min:8|max:30',

            'sales' => 'required|string|max:50',
            'logo' => 'required|image|mimes:jpeg,jpg,png,webp|max:1024',
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
            $filename = time() . '-' . Str::random(5) . '-' . Str::slug($request->name)  . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('img/company'), $filename);

            $oldImage = public_path($user->logo);
            if (File::exists($oldImage)) {
                File::delete($oldImage);
            }

            $validatedData['logo'] = "img/company/$filename";
        }

        $user->update($validatedData);

        return $this->editSuccess($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if ($id == Auth::id()) {
            return $this->unauthorizedResponse();
        }

        if (!$user) {
            return $this->dataNotFound('Pengguna');
        }

        $user->delete();

        return $this->deleteSuccess();
    }
}
