<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            color: #333;
        }

        .header-status {
            background-color: #e0ffe0;
            padding: 5px;
            text-align: center;
            color: #666;
            font-style: italic;
        }

        .invoice-title {
            color: #ff6b6b;
            font-size: 32px;
            margin-bottom: 20px;
        }

        .invoice-info {
            width: 100%;
            margin-bottom: 20px;
        }

        .invoice-info td {
            vertical-align: top;
            padding: 5px;
        }

        .code-details {
            text-align: right;
        }

        .address-details {
            width: 100%;
            margin-bottom: 30px;
        }

        .address-details td {
            width: 50%;
            vertical-align: top;
            padding: 10px;
        }

        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .items-table th, .items-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        .items-table th {
            background-color: #f8f9fa;
        }

        .calculation-table {
            width: 100%;
            margin-bottom: 20px;
        }

        .calculation-table td {
            padding: 5px;
        }

        .amount-table {
            width: 40%;
            margin-left: auto;
        }

        .amount-table td {
            padding: 5px;
            border-bottom: 1px solid #eee;
        }

        .amount-table td:last-child {
            text-align: right;
        }

        .payment-info {
            margin-bottom: 30px;
        }

        .qr-code {
            text-align: center;
            margin: 20px 0;
        }

        .footer {
            margin-top: 40px;
            text-align: center;
        }

        .company-name {
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header-status">Paid, Expired</div>

    <table class="invoice-info">
        <tr>
            <td>
                <div class="invoice-title">Invoices</div>
                <div>Simple invoice printing service</div>
            </td>
            <td class="code-details">
                Code Inv # 4AF5395<br>
                Create # 2024-06-09<br>
                Expire # 2024-06-09
            </td>
        </tr>
    </table>

    <table class="address-details">
        <tr>
            <td>
                <strong>Invoice From</strong><br>
                From : Deniria Zebua<br>
                PT. Berkat Melekat Abadi<br>
                Jl. Rawasari Sel. No.11c 14, RT.14/RW.2, Daerah<br>
                Khusus Ibukota Jakarta 10520<br>
                zebuadbless@gmail.com<br>
                +62 88214535126
            </td>
            <td>
                <strong>Invoice To</strong><br>
                To : Dion Zebua<br>
                PT. Jaya Perkasa Indonesia<br>
                Kebon jeruk, kota Jakarta barat Daerah khusus<br>
                ibukota Jakarta 11530<br>
                zebuadbless@gmail.com<br>
                +62 88214535126
            </td>
        </tr>
    </table>

    <table class="items-table">
        <tr>
            <th>No</th>
            <th>Product / Service</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Price</th>
            <th>Total</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Carter Jakarta Surabaya</td>
            <td>2</td>
            <td>Unit</td>
            <td>Rp 5.000.000</td>
            <td>Rp 10.000.000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Travel Lampung Jakarta</td>
            <td>2</td>
            <td>Unit</td>
            <td>Rp 450.000</td>
            <td>Rp 900.000</td>
        </tr>
    </table>

    <table class="calculation-table">
        <tr>
            <td>
                <strong>Be Calculated :</strong><br>
                Ten Million, Nine Hundred Eighty-Nine Thousand Rupiah
            </td>
            <td>
                <table class="amount-table">
                    <tr>
                        <td>Subtotal</td>
                        <td>Rp 10.900.000</td>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td>Rp 1.000.000</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>Rp 9.900.000</td>
                    </tr>
                    <tr>
                        <td>Tax 11%</td>
                        <td>Rp 1.089.000</td>
                    </tr>
                    <tr>
                        <td>Grand Total</td>
                        <td>Rp 10.989.000</td>
                    </tr>
                    <tr>
                        <td>Down Payment</td>
                        <td>Rp 989.000</td>
                    </tr>
                    <tr>
                        <td>Partial Payment</td>
                        <td>Rp 10.000.000</td>
                    </tr>
                    <tr>
                        <td>Paid Off</td>
                        <td>Rp 0</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <div class="payment-info">
        <strong>Payment Methode :</strong><br>
        • BCA<br>
        &nbsp;&nbsp;Dion Zebua<br>
        • BCA<br>
        &nbsp;&nbsp;Dion Zebua
    </div>

    <div class="qr-code">
        <img src="/api/placeholder/150/150" alt="QR Code">
    </div>

    <div class="footer">
        Thank you for turning to <span class="company-name">PT. Berkat Melekat Abadi</span>
        <div>(.................................................)</div>
    </div>
</body>
</html>