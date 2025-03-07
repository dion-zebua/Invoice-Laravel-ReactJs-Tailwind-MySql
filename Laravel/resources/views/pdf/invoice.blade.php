<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Document</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <style>
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        @page {
            size: A4;
            margin: 0;
        }

        .poppins-regular {
            font-family: "Poppins", sans-serif !important;
            font-weight: 400;
            font-style: normal;
        }

        .page-break {
            page-break-after: always;
        }

        #bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .status {
            background: rgb(93, 161, 224);
            position: fixed;
            top: 0;
            left: 0;
            width: 640px;
            padding: 10px 80px;
            text-transform: capitalize;
            font-style: italic;
            color: #dddddd;
            text-align: center;
        }

        .status #status-0 {
            float: left;
        }

        .status #status-2 {
            float: right;
        }

        #container {
            padding: 60px 80px;
            /* background: url({{ public_path('img/bg-invoice.jpg') }});
            background-size: cover;
            height: 100vh; */
            width: 640px;
            position: relative;
            z-index: 9;
        }

        #header {
            display: hidden;
        }

        #header img {
            width: auto;
            height: auto;
            max-width: 200px;
            max-height: 100px;
            margin-bottom: 10px;
            margin-top: 20px;
        }

        .address-details tr td {
            width: 50%;
        }

        .address-details div.border {
            border-bottom: 1px solid #000;
            opacity: .6;
            height: 30px;
            margin-bottom: 30px;
            margin-top: 40px;
            font-weight: bold;
        }

        .address-details div.detail {
            opacity: .55;
            height: 30px;
            margin-bottom: 10px;
        }

        h1 {
            opacity: .60;
            font-size: 18px;
            margin-bottom: 5px;
        }

        p {
            line-height: 1.3;
            opacity: .5;
            letter-spacing: 0.3px;
            font-size: 16px;
            margin-bottom: 5px;
        }
    </style>
</head>

<body class="poppins-regular" style="font-size: 16px;">
    <img id="bg" src="{{ public_path('img/bg-invoice.jpg') }}" alt="background">
    <div id="container">
        <div class="status">
            @for ($i = 0; $i < 3; $i++)
                <span
                    id="status-{{ $i }}">{{ $data->status }}{{ Carbon\Carbon::parse($data->expire)->isPast() ? ', expired' : '' }}</span>
            @endfor
        </div>
        <div id="header">
            <table style="width: 100%;">
                <tbody>
                    <tr>
                        <td style="width: 50%;">
                            <img src="{{ public_path($data->logo) }}" alt="logo">
                            <p>Generator invoice</p>
                        </td>
                        <td style="width: 50%; text-align: right;">

                            <p>INV # {{ $data->code }}</p>
                            <p>Create # {{ Carbon\Carbon::parse($data->created_at)->format('Y-m-d') }}</p>
                            <p>Expire # {{ Carbon\Carbon::parse($data->expire)->format('Y-m-d') }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="details">
            <table class="address-details" style="width: 100%;">
                <tbody>
                    <tr>
                        <td style="padding-right: 30px;">

                            <div class="border">Invoice From :</div>
                        </td>
                        <td style="text-align: right; padding-left: 30px;">
                            <div class="border">Invoice To :</div>

                        </td>
                    </tr>
                    <tr>
                        <td style="padding-right: 30px;">
                            <div class="detail">
                                From : {{ $data->user->name }}
                            </div>
                            <p>
                                {{ $data->name }}
                            </p>
                            <p>
                                {{ $data->address }}
                            </p>
                            <p>
                                {{ $data->email }}
                            </p>
                            <p>
                                {{ $data->telephone }}
                            </p>
                        </td>
                        <td style="text-align: right; padding-left: 30px;">
                            <div class="detail">
                                From : {{ $data->to_name }}
                            </div>
                            <p>
                                {{ $data->to_company }}
                            </p>
                            <p>
                                {{ $data->to_address }} lorem lorem lorem lorem loremlorem lorem
                            </p>
                            <p>
                                {{ $data->to_email }}
                            </p>
                            <p>
                                {{ $data->to_telephone }}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
