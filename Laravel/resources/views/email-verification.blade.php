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
        <img style="height: 50px;" src="https://tokodjbless.com/wp-content/uploads/2024/10/invoice.jpg" alt="logo" />
        <div style="width: 100%; height: 1px; background: #444;"></div>
        <h1 style="color:#c9c9c9;margin: 20px 0;">Verifikasi Pengguna</h1>
        <p style="color: #a9a9a9;">Email <span style="color: #367cf5;">{{ $user['email'] }}</span> telah didaftarkan dan
            segera lakukan verifikasi!!!</p>
        <p style="color: #a9a9a9;margin:10px 0">Klik tombol dibawah ini untuk verifikasi</p>
        <a href={{ 'https://invoices.my.id/verifikasi/' . $user['id'] . '/' . $user['token_verified'] }}
            style="font-weight: 700;text-decoration: underline; color: #171a1c;">
            <div style="padding: 20px; background: #afe1ff;">
                {{ 'https://invoices.my.id/verifikasi/' . $user['id'] . '/' . $user['token_verified'] }}
            </div>
        </a>
        <p style="color: #a9a9a9;  margin: 15px 0;">Jika bukan anda, maka hiraukan pesan ini!</p>
    </div>
</body>

</html>
