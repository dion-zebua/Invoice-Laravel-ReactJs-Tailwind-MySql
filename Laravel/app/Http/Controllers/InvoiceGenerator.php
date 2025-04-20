<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class InvoiceGenerator extends Controller
{
    public function generate($id, $code)
    {
        $invoice = Invoice::where('id', $id)
            ->where('code', $code)
            ->first();

        if (!$invoice) {
            return $this->dataNotFound('Invoice');
        }

        $invoiceProducts = $invoice->invoiceProducts;

        $qrCode = GenerateQrCodeController::getQrCode(env('APP_URL_FRONTEND') . "invoice/$invoice->id/$invoice->code/");

        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdf.invoice', [
            'data' => $invoice,
            'products' => $invoiceProducts,
            'qrCode' => $qrCode,
        ])
            // ->setWarnings(true)
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
        return $pdf;
    }

    public function stream($id, $code)
    {
        $random = Str::random(5);

        $pdf = $this->generate($id, $code);
        return $pdf->stream("invoice-$id-$code-$random.pdf", [
            true
        ]);
    }

    public function download($id, $code)
    {
        $random = Str::random(5);

        $pdf = $this->generate($id, $code);
        return $pdf->download("invoice-$id-$code-$random.pdf", [
            true
        ]);
    }
}
