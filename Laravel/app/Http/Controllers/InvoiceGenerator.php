<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class InvoiceGenerator extends Controller
{
    public function stream($id, $code)
    {
        $invoice = Invoice::where('id', $id)
            ->where('code', $code)
            ->first();

        if (!$invoice) {
            return $this->dataNotFound('Invoice');
        }

        // $invoiceProducts = $invoice->invoiceProducts;
        $invoiceProducts = [];
        for ($i = 0; $i < 40; $i++) {
            $invoiceProducts[$i] = $invoice->invoiceProducts[0];
        }

        $qrCode = GenerateQrCodeController::getQrCode(env('APP_URL_FRONTEND') . "invoice/$invoice->id/$invoice->code/");

        // return view('pdf.invoice', ['data' => $invoice]);
        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdf.invoice', [
            'data' => $invoice,
            'products' => $invoiceProducts,
            'qrCode' => $qrCode,
        ]);

        // $pdf->setOptions([
        //     'isHtml5ParserEnabled' => true,
        //     'isPhpEnabled' => true,
        //     'defaultPaperSize' => 'a4'
        // ]);

        return $pdf->stream('invoice.pdf');

        // return $this->dataFound($invoice, 'Invoice');
    }
}
