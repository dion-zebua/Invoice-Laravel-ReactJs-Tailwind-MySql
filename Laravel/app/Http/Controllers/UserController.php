<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\Verification;
use App\Models\Company;
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
    public function index(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'perPage' => 'nullable|integer|' . \Illuminate\Validation\Rule::in([5, 10, 20, 50, 100]),
            'page' => 'nullable|integer|min:1',
            'verified' => 'nullable|boolean',
            'search' => 'nullable|string',
            'role' => 'nullable|string|in:admin,user',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $perPage = $request->input('perPage', 10);
        $currentPage = $request->input('page', 10);
        $is_verified = $request->input('verified');
        $role = $request->input('role');
        $search = $request->input('search', '');

        $users = User::query()
            // ->when(request()->hasAny(['verified', 'role', 'search']), function ($query) use ($role, $search, $is_verified) {
            //     if (request()->has('verified')) {
            //         $query->where('is_verified', '=', $is_verified);
            //     }
            //     if ($role) {
            //         $query->where('role', '=', $role);
            //     }
            //     if ($search) {
            //         $query->where(function ($q) use ($search) {
            //             $q->where('name', 'like', "%{$search}%")
            //                 ->orWhere('email', 'like', "%{$search}%");
            //         });
            //     }
            // })
            ->paginate($perPage);

        $users->appends($validator->validate());
        return response()->json($users);
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
            return $this->unprocessableContent($validator);
        }

        $tokenVerified = Str::random(60);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'token_verified' => Hash::make($tokenVerified),
        ]);

        $company = Company::create([
            'users_id' => $user->id,
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
            'name' => 'string|max:50',
            'email' => 'email|unique:users,email,' . $id,
            'password' => 'string|min:8|max:30',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }


        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return $this->editSuccess($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return $this->dataNotFound('Pengguna');
        }
        $user->delete();

        return $this->deleteSuccess();
    }
}
