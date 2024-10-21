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
            'perPage' => 'integer|in:5,10,50,100',
            'page' => 'integer|min:1',
            'verified' => 'string|in:1,0',
            'search' => 'string',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $perPage = $request->input('perPage', 10);
        $currentPage = $request->input('page', 10);
        $is_verified = $request->input('verified');
        $search = $request->input('search', '');

        $users = User::query()
            ->where('is_verified', '=', 1)
            ->paginate($perPage);

        if ($users->total() == 0) {
            return $this->dataNotFound('Pengguna');
        }

        return $this->dataFound($users);
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
