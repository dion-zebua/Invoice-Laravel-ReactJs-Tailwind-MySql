<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            line-height: 20px;
        }
    </style>
</head>

<body>
    <div
        style="font-family: system-ui;width: 100%; max-width: 380px; background: #171a1c; padding: 20px; margin: 0 auto; border-radius: 5px;">
        <img style="height: 50px;" src="{{ env('APP_LOGO') }}" alt="logo" />
        <h1 style="color:#c9c9c9;margin: 20px 0;">{{ $title }}</h1>
        <p style="color: #a9a9a9;">Anda telah
            {{ $desc }} pada {{ \Carbon\Carbon::now()->locale('id')->translatedFormat('l, d F Y H:i') }}.
            Silahkan {{ Str::lower($title) }} anda dalam waktu 30 menit sebelum tautan kedaluwarsa.</p>
        @if (!empty($password))
            <p style="color:#c9c9c9;margin: 20px 0;">Password sementara: {{ $password }}</p>
        @endif
        <p style="color: #a9a9a9; margin: 20px 0">Klik tombol di bawah ini untuk {{ Str::lower($title) }} Anda:</p>

        <a href="{{ env('APP_URL_FRONTEND') . $link . '/' . $user['id'] . '/' . $token }}"
            style="background: #367cf5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            {{ $title }} Sekarang
        </a>

        <p style="color: #a9a9a9; margin: 15px 0;">Jika Anda tidak merasa melakukan permintaan ini, abaikan email ini.
            Akun Anda akan tetap aman.</p>
        <p style="color: #a9a9a9; margin: 15px 0;">&copy; {{ date('Y') }} {{ env('APP_NAME') }}. All rights
            reserved.</p>
    </div>
</body>

</html>
