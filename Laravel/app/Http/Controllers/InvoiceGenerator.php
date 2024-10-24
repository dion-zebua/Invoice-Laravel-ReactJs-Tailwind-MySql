<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class InvoiceGenerator extends Controller
{
    public function stream($code)
    {

        $invoice = Invoice::with('invoiceProducts')->where('code', $code)->first();

        if (!$invoice) {
            return $this->dataNotFound('Invoice');
        }
        // return view('pdf.invoice', ['data' => $invoice]);
        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdf.invoice', [
            'data' => $invoice->with('invoiceProducts')->first(),
        ]);
        // return $pdf->download('invoice.pdf');
        return $pdf->stream('invoice.pdf');

        // return $this->dataFound($invoice, 'Invoice');
    }
}
