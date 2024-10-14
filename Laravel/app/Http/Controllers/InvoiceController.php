<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreInvoiceRequest;
use App\Http\Requests\UpdateInvoiceRequest;

class InvoiceController extends Controller
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
        $id = $user->id;
        $companyId = $user->company->id;
        $code = Str::upper(Str::random(7));

        $request['code'] = $code;
        // $request['products'] = [1,2,3];
        dd($request['products.0.name']);

        $validator = Validator::make($request->all(), [
            'code' => 'required|string|unique:invoices,code',
            'expire' => 'required|date|after:now',
            'to_name' => 'required|string|max:30',
            'to_company' => 'required|string|max:30',
            'to_address' => 'required|string|max:70',
            'to_telephone' => 'required|string|max:15|min:6',
            'to_email' => 'required|email',
            // 'sub_total' => 'required|integer|min:0',
            'discount' => 'required|integer|min:0',
            // 'total' => 'required|integer|min:0',
            'tax' => 'required|in:1,0',
            // 'grand_total' => 'required|integer|min:0',
            'down_payment' => 'required|integer|min:0',
            // 'paid_off' => 'required|integer|min:0',
            'status' => 'required|in:paid,unpaid',


            'products.*.name' => 'required|string|max:30',
            'products.*.unit' => 'required|string|max:30',
            'products.*.price' => 'required|integer|min:0',
            'products.*.quantity' => 'required|integer|min:1',
            'products.*.amount' => 'required|integer|min:0',
            'products' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validasi error.',
                'errors' => $validator->errors(),
            ], 422);
        }
        return response()->json($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice $invoice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invoice $invoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInvoiceRequest $request, Invoice $invoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invoice $invoice)
    {
        //
    }
}
