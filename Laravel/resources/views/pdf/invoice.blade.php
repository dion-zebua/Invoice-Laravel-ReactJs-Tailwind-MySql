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
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            font-style: normal;
        }

        .page-break {
            page-break-after: always;
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
            background: url({{ public_path('img/bg-invoice.jpg') }});
            background-size: cover;
            height: 100%;

            width: 620px;
            /* padding-top: 30px !important;
            padding: 45px 80px; */
            /* z-index: 9; */
            position: relative;
        }

        .header img {
            width: auto;
            height: auto;
            max-width: 200px;
            max-height: 100px;
        }

        h1 {
            opacity: .65;
            font-size: 18px;
            margin-bottom: 5px;
        }

        p {
            opacity: .65;
            font-size: 16px;
            font-weight: bold;
        }
    </style>
</head>

<body class="poppins-regular">
    <div id="container">
        <div class="status">
            @for ($i = 0; $i < 3; $i++)
                <span
                    id="status-{{ $i }}">{{ $data->status }}{{ Carbon\Carbon::parse($data->expire)->isPast() ? ', expired' : '' }}</span>
            @endfor
        </div>
        <div class="header">
            <div class="">

                <img src="{{ public_path('img/company/' . $data->company->logo) }}" alt="logo">
                <p>Generator invoice</p>
            </div>
            <div class="">

            </div>
        </div>
    </div>
</body>

</html>
