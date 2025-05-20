<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Str;

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
        ]);
        $pdf->setOptions([
            'fontDir' => public_path('/font'),
            'fontCache' => public_path('/font'),
            'defaultFont' => 'poppins',
            'isRemoteEnabled' => true,
        ]);
        $pdf->getDomPDF()->setHttpContext(
            stream_context_create([
                'ssl' => [
                    'allow_self_signed' => TRUE,
                    'verify_peer' => FALSE,
                    'verify_peer_name' => FALSE,
                ]
            ])
        );

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
    }
}
