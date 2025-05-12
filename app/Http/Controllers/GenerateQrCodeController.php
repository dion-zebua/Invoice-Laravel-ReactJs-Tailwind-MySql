<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\ErrorCorrectionLevel;
use Endroid\QrCode\Label\LabelAlignment;
use Endroid\QrCode\Label\Font\NotoSans;
use Endroid\QrCode\RoundBlockSizeMode;
use Endroid\QrCode\Writer\PngWriter;

class GenerateQrCodeController extends Controller
{
    public static function getQrCode($url)
    {
        $result = Builder::create()
            ->writer(new PngWriter())
            ->writerOptions([])
            ->validateResult(false)
            ->data($url)
            ->errorCorrectionLevel(ErrorCorrectionLevel::High)
            ->size(200)
            ->margin(0)
            ->roundBlockSizeMode(RoundBlockSizeMode::Margin)
            ->build();

        header('Content-Type: ' . $result->getMimeType());
        $result->getDataUri();
        return $result->getDataUri();
    }
}
