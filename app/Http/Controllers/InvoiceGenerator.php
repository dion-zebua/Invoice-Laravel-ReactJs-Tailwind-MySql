<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class InvoiceGenerator extends Controller
{
    public function generate($id, $code, $action)
    {
        $invoice = Invoice::where('id', $id)
            ->where('code', $code)
            ->first();

        if (!$invoice) {
            return $this->dataNotFound('Invoice');
        }

        $invoiceProducts = $invoice->invoiceProducts;
        $qrCode = GenerateQrCodeController::getQrCode(env('APP_URL_FRONTEND') . "invoice/$id/$code/");

        $pdf = Pdf::loadView('pdf.invoice', [
            'data' => $invoice,
            'products' => $invoiceProducts,
            'qrCode' => $qrCode,
            'font' => public_path('fonts/poppins.ttf'),
            // public/fonts/poppins.ttf
        ])
            ->setWarnings(true)
            ->setOptions([
                'isRemoteEnabled' => true,
            ])
            ->setHttpContext(stream_context_create([
                'ssl' => [
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                ]
            ]));
        $random = Str::random(5);

        return $pdf->$action("invoice-$id-$code-$random.pdf", [
            true
        ]);
    }

    public function stream($id, $code)
    {

        return $this->generate($id, $code, 'stream');
    }

    public function download($id, $code)
    {
        return $this->generate($id, $code, 'download');
    }

    public function show($id, $code)
    {
        $invoice = Invoice::where('id', $id)
            ->where('code', $code)
            ->first();

        if (!$invoice) {
            return $this->dataNotFound('Invoice');
        }
        return $this->dataFound($invoice, 'Invoice');
        return $this->generate($id, $code, 'download');
    }
}
