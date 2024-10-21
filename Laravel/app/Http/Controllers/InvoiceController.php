<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreInvoiceRequest;
use App\Http\Requests\UpdateInvoiceRequest;
use App\Models\InvoiceProduct;
use Illuminate\Support\Facades\DB;

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
        $code = Str::upper(Str::random(7));

        $productCollect = collect($request->products);

        $productRes = $productCollect->map(function ($item) {
            $item['amount'] = $item['price'] * $item['quantity'];
            return $item;
        });

        $request['products'] = $productRes->toArray();
        $request['code'] = $code;
        $request['users_id'] = $user->id;
        $request['companies_id'] = $user->company->id;

        $subTotal = $productRes->sum('amount');
        $request['sub_total'] = $subTotal;
        $request['total'] = $subTotal - $request['discount'];

        $request['grand_total'] = $request['tax'] == 1
            ? $request['total'] * 0.89
            : $request['total'];

        $request['paid_off'] = $request->status === 'paid'
            ? 0
            : ($request['down_payment'] ?? $request['grand_total']);


        $validator = Validator::make($request->all(), [
            'code' => 'required|string|unique:invoices,code',
            'expire' => 'required|date|after:now',
            'to_name' => 'required|string|max:30',
            'to_company' => 'required|string|max:30',
            'to_address' => 'required|string|max:70',
            'to_telephone' => 'required|string|max:15|min:6',
            'to_email' => 'required|email',
            'sub_total' => 'required|integer|min:0',
            'discount' => 'required|integer|min:0',
            'total' => 'required|integer|min:0',
            'tax' => 'required|in:1,0',
            'grand_total' => 'required|integer|min:0',
            'down_payment' => 'required|integer|min:0',
            'paid_off' => 'required|integer|min:0',
            'status' => 'required|in:paid,unpaid',


            'products.*.name' => 'required|string|max:30',
            'products.*.unit' => 'required|string|max:30',
            'products.*.price' => 'required|integer|min:0',
            'products.*.quantity' => 'required|integer|min:1',
            'products.*.amount' => 'required|integer|min:0',
            'products' => 'required|array',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        try {
            Db::transaction(function () use ($request, $code, $validator) {

                $invoice = Invoice::create($validator->valid());

                $productCollect = collect($request->products);
                foreach ($request['products'] as $key => $product) {
                    InvoiceProduct::create([
                        'invoices_code' => $code,
                        'name' => $product['name'],
                        'unit' => $product['unit'],
                        'price' => $product['price'],
                        'quantity' => $product['quantity'],
                        'amount' => $product['amount'],
                    ]);
                }
            });

            DB::commit();

            return $this->createSuccess($validator->valid());
        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'status' => true,
                'message' => $e->getMessage() . $e->getLine(),
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $invoice = Invoice::find($id);

        if (!$invoice) {
            return $this->dataNotFound('Invoice');
        }

        return $this->dataFound($invoice, 'Invoice');
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
    public function destroy($id)
    {
        $invoice = Invoice::find($id);

        if (!$invoice) {
            return $this->dataNotFound('Invoice');
        }

        $userLogin = Auth::user();
        if ($userLogin->role != 'admin' && $invoice->users_id != $userLogin->id) {
            return $this->unauthorizedResponse();
        }

        $invoice->delete();
        return $this->deleteSuccess();
    }
}
