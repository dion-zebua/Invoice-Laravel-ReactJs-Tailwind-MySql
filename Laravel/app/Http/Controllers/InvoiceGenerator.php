<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class InvoiceGenerator extends Controller
{
    public function stream()
    {
        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdf.invoice');
        return $pdf->download('invoice.pdf');
        return $pdf->stream('invoice.pdf');
    }
}
