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
    <div style="font-family: system-ui;width: 100%; background: #171a1c; padding: 20px;">
        <img style="height: 50px;" src="{{ env('APP_URL_FRONTEND') . 'images/invoice.jpg' }}" alt="logo" />
        <div style="width: 100%; height: 1px; background: #444;"></div>
        <h1 style="color:#c9c9c9;margin: 20px 0;">{{ $title }}</h1>
        <p style="color: #a9a9a9;">Email <span style="color: #367cf5;">{{ $user['email'] }}</span> telah
            {{ $desc }} dan
            segera lakukan {{ $title }}, token berakhir 30 menit kedepan!!!</p>
        <p style="color: #a9a9a9;margin:10px 0">Klik tombol dibawah ini untuk {{ $title }}</p>
        <a href={{ env('APP_URL_FRONTEND') . $link . '/' . $user['id'] . '/' . $token }}
            style="font-weight: 700;text-decoration: underline; color: #171a1c;">
            <div style="padding: 20px; background: #afe1ff;">
                {{ env('APP_URL_FRONTEND') . $link . '/' . $user['id'] . '/' . $token }}
            </div>
        </a>
        <p style="color: #a9a9a9;  margin: 15px 0;">Jika bukan anda, maka hiraukan pesan ini!</p>
    </div>
</body>

</html>
