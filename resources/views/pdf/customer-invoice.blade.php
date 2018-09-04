<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Management Report {{ $date_started }} to {{ $date_ended }} for {{ $customer['customer_name'] }}
    </title>
    <style type="text/css">
        div.page {
            page-break-after: always;
            page-break-inside: avoid;
        }


        #footer {
            position: fixed;
            left: 0px;
            bottom: -100px;
            right: 0px;
            height: 50px;
        }

        body {
            margin-top: 150px;
        }

        #content {
            margin-top: 20px;
        }

        /* style table */

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        thead {
            color: darkblue;
        }

        td,
        th {
            text-align: left;
            padding: 10px 0;
            font-size: 15px;
        }

        td.border--top {
            border-top: 2px solid #dddddd;
        }

        td.border--bottom {
            border-bottom: 2px solid #dddddd;
        }

        td.padding-left {
            padding-left: 10px;
        }

        /* tr:nth-child(even) {
            background-color: #dddddd;
        } */

        ul {
            list-style-type: none;
        }

        .row {
            width: 100%;
            padding-left: 5px;
            padding-right: 5px;
        }

        .left {
            display: inline-block;
            text-align: left;
        }

        .right {
            display: inline-block;
            text-align: right;
        }

        .middle {
            display: inline-block;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="page">
        <div class="row">
            <div class="left" style="width: 25%; color: darkblue;">
                <span>Designer Services Group</span>
                <span>(407) 331-1200</span><br>
                <span>(407) 331-0870 fax</span>
            </div>
            <div class="middle" style="width: 49%; color: darkblue;">
                <h2 style="padding-top:-30px;">Management Report</h2>
            <h2 style="padding-top:-20px;">{{ $customer['customer_name'] }}</h2>
                <h3 style="padding-top:-10px; font-style: italic; font-size:.75em;font-color:black;">For Invoice Date {{ $date_started }} through {{ $date_ended }}
                </h3>
            </div>
            <div class="right" style="width: 25%; color: darkblue;">
                <span>225 Pineda St - Unit 127</span>
                <span>Longwood FL 32750</span><br>
                <span>TERMS: Due upon receipt</span>
            </div>
        </div>
        <hr style="border-color:black;">
        <br>
        <br>
        <table>
            <thead>
                <tr>
                    <th>Invoice Date</th>
                    <th>Receiving</th>
                    <th>Storage</th>
                    <th>Delivery</th>
                    <th>Misc</th>
                    <th>Total Bill</th>
                </tr>
            </thead>
            <tbody>
                @if(count($invoices)>0) 
                @foreach($invoices as $item)
                <tr style="page-break-inside: avoid;">
                    <td class="border--top">
                        {{ $item['invoice_date'] }} <br>
                    </td>
                    <td class="border--top">
                        ${{ $item['receiving_fee'] ? number_format((float)$item['receiving_fee'], 2, '.', '') : number_format((float)0, 2, '.', '')
                        }}
                    </td>
                    <td class="border--top">
                        ${{ $item['storage_fee'] ? number_format((float)$item['storage_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                    </td>
                    <td class="border--top">
                        ${{ $item['delivery_fee'] ? number_format((float)$item['delivery_fee'], 2, '.', '') : number_format((float)0, 2, '.', '')
                        }}
                    </td>
                    <td class="border--top">
                        ${{ $item['misc_fee'] ? number_format((float)$item['misc_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                    </td>
                    <td class="border--top">
                        ${{ $item['total'] ? number_format((float)$item['total'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                    </td>
                </tr>
                
                @endforeach
                <tr style="page-break-inside: avoid;">
                    <td style="font-weight: bold;">
                        Totals
                    </td>
                    <td style="font-weight: 900;">
                        ${{ $customer['receiving_fee'] ? number_format((float)$customer['receiving_fee'], 2, '.', '') : number_format((float)0, 2,
                        '.', '') }}
                    </td>
                    <td style="font-weight: 900;">
                        ${{ $customer['storage_fee'] ? number_format((float)$customer['storage_fee'], 2, '.', '') : number_format((float)0, 2, '.',
                        '') }}
                    </td>
                    <td style="font-weight: 900;">
                        ${{ $customer['delivery_fee'] ? number_format((float)$customer['delivery_fee'], 2, '.', '') : number_format((float)0, 2,
                        '.', '') }}
                    </td>
                    <td style="font-weight: 900;">
                        ${{ $customer['misc_fee'] ? number_format((float)$customer['misc_fee'], 2, '.', '') : number_format((float)0, 2, '.', '')
                        }}
                    </td>
                    <td style="font-weight: 900;">
                        ${{ $customer['total'] ? number_format((float)$customer['total'], 2, '.', '') : number_format((float)0, 2, '.', '')
                        }}
                    </td>
                </tr>
                @endif
            </tbody>
        </table>
    </div>
</body>

</html>