<?php

if (!function_exists('getRupiah')) {
    function getRupiah($int)
    {
        return 'Rp' . number_format($int, 0, ',', '.');
    }
}

if (!function_exists('numberToWords')) {
    function numberToWords($int)
    {
        $ones = [
            '',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen'
        ];

        $tens = [
            '',
            '',
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety'
        ];

        $scales = [
            '',
            'thousand',
            'million',
            'billion'
        ];

        if ($int == 0) {
            return 'zero';
        }

        return convertRecursive($int, $ones, $tens, $scales);
    }

    function convertRecursive($num, $ones, $tens, $scales)
    {
        if ($num < 20) {
            return $ones[$num];
        } elseif ($num < 100) {
            return $tens[intval($num / 10)] . ($num % 10 ? ' ' . convertRecursive($num % 10, $ones, $tens, $scales) : '');
        } elseif ($num < 1000) {
            return $ones[intval($num / 100)] . ' hundred' . ($num % 100 ? ' ' . convertRecursive($num % 100, $ones, $tens, $scales) : '');
        }

        for ($i = count($scales) - 1; $i > 0; $i--) {
            $unit = pow(1000, $i);
            if ($num >= $unit) {
                return convertRecursive(intval($num / $unit), $ones, $tens, $scales) . ' ' . $scales[$i] .
                    ($num % $unit ? ' ' . convertRecursive($num % $unit, $ones, $tens, $scales) : '');
            }
        }
    }
}