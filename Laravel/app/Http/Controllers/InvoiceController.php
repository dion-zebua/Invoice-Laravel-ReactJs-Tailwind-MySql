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
    public function index(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'perPage' => 'nullable|integer|in:5,10,20,50,100',
            'search' => 'nullable|string',
            'status' => 'nullable|string|in:paid,unpaid',
            'orderBy' => 'nullable|string|in:id,companies_id,code,to_name,to_email',
            'orderDirection' => 'nullable|string|in:asc,desc',
        ]);

        if ($validator->fails()) {
            return $this->unprocessableContent($validator);
        }

        $perPage = $request->input('perPage', 10);
        $search = $request->input('search', '');
        $status = $request->input('status');
        $orderBy = $request->input('orderBy', 'id');
        $orderDirection = $request->input('orderDirection', 'desc');

        $user = Auth::user();
        $invoice = Invoice::query()->select(
            'id',
            'users_id',
            'companies_id',
            'code',
            'to_name',
            'to_company',
            'to_address',
            'to_telephone',
            'to_email',
            'status',
            'down_payment',
            'grand_total'
        )
            ->with('company:id,name,email,telephone,address,sales')
            ->when($status, function ($query, $status) {
                $query->where('status', $status);
            })
            ->when($user->role == 'user', function ($q) use ($user) {
                $q->where('users_id', $user->id);
            })
            ->where(function ($q) use ($search) {
                $q->where('code', 'like', "%{$search}%")
                    ->orWhere('to_email', 'like', "%{$search}%")
                    ->orWhere('to_name', 'like', "%{$search}%")
                    ->orWhere('to_address', 'like', "%{$search}%")
                    ->orWhere('to_telephone', 'like', "%{$search}%")
                    ->orWhere('to_company', 'like', "%{$search}%")
                    ->orWhereHas('company', function ($query) use ($search) {
                        $query->where('address', 'like', "%{$search}%")
                            ->orWhere('sales', 'like', "%{$search}%")
                            ->orWhere('telephone', 'like', "%{$search}%")
                            ->orWhere('email', 'like', "%{$search}%")
                            ->orWhere('name', 'like', "%{$search}%");
                    });
            })
            ->orderBy($orderBy, $orderDirection)
            ->paginate($perPage);

        $invoice->appends($validator->validate());

        if ($invoice->count() > 0) {
            return $this->dataFound($invoice, 'Invoice');
        }
        return $this->dataNotFound('Invoice');
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
    public function show($code)
    {
        $invoice = Invoice::with('invoiceProducts')->where('code', $code)->first();

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
