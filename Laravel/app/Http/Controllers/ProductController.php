<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Js;

class ProductController extends Controller
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
        $user = Auth::user();
        $request['companies_id'] = $user->company->id;
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'unit' => 'required|string|max:50',
            'price' => 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $product = Product::create($request->all());
        return response()->json([
            'status' => true,
            'message' => 'Berhasil tambah',
            'data' => $product,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {

        $product = Product::find($id);

        if (!$product) {
            return $this->dataNotFound('Produk');
        }

        $userLogin = Auth::user();
        if ($userLogin->role != 'admin' && $product->company->users_id != $userLogin->id) {
            return $this->unauthorizedResponse();
        }

        $product->makeHidden('company');
        return $this->dataFound($product, 'Produk');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return $this->dataNotFound('Produk');
        }

        $userLogin = Auth::user();
        if ($userLogin->role != 'admin' && $product->company->users_id != $userLogin->id) {
            return $this->unauthorizedResponse();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'unit' => 'required|string|max:50',
            'price' => 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $product->update($validator->valid());
        return $this->editSuccess($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return $this->dataNotFound('Produk');
        }

        $userLogin = Auth::user();
        if ($userLogin->role != 'admin' && $product->company->users_id != $userLogin->id) {
            return $this->unauthorizedResponse();
        }

        $product->delete();
        return $this->deleteSuccess();
    }
}
