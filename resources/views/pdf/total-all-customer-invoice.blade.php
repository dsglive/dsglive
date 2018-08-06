<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Weekly Billing Invoice {{ $date_started }} to {{ $date_ended }}
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
            border-top: 1px solid black;
        }
        th.border--top { border-top: 1px solid black; }

        td.border--bottom {
            border-bottom: 1px solid #black;
        }
        th.border--bottom { border-bottom: 1px solid black; }

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
        <hr style="border-color:black;">
        <div class="row">
            <div class="left" style="width: 25%; color: darkblue;">
                <span>Designer Services Group</span>
                <span>(407) 331-1200</span><br>
                <span>(407) 331-0870 fax</span>
            </div>
            <div class="middle" style="width: 49%; color: darkblue;">
                <h2 style="padding-top:-20px;">Weekly Billing Invoice</h2>
                <h3 style="padding-top:-10px; font-style: italic; font-size:.75em;font-color:black;">For Billing Cyle {{ $date_started }} through {{ $date_ended }}
                </h3>
            </div>
            <div class="right" style="width: 25%; color: darkblue;">
                <span>225 Pineda St - Unit 127</span>
                <span>Longwood FL 32750</span><br>
                <span>TERMS: Due upon receipt</span>
            </div>
        </div>
        <hr style="border-color:black;">
        <table>
            <thead>
                <tr>
                    <th class="border--bottom">Customer</th>
                    <th class="border--bottom">Receiving</th>
                    <th class="border--bottom">Storage</th>
                    <th class="border--bottom">Delivery</th>
                    <th class="border--bottom">Misc</th>
                    <th class="border--bottom">Total Bill</th>
                </tr>
            </thead>
            <tbody>
                @php ($total_receiving_fee = 0)
                @php ($total_storage_fee = 0)
                @php ($total_delivery_fee = 0)
                @php ($total_misc_fee = 0)
                @php ($total_overall = 0)
                @if(count($customers)>0)
                @foreach($customers as $item)
                <tr style="page-break-inside: avoid;">
                    <td>
                        {{ $item['customer_name'] }} <br>
                    </td>
                    <td>
                        @php ($total_receiving_fee += $item['receiving_fee'])
                        ${{ $item['receiving_fee'] ? number_format((float)$item['receiving_fee'], 2, '.', '') : number_format((float)0, 2, '.', '')
                        }}
                    </td>
                    <td>
                        @php ($total_storage_fee += $item['storage_fee'])
                        ${{ $item['storage_fee'] ? number_format((float)$item['storage_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                    </td>
                    <td>
                        @php ($total_delivery_fee += $item['delivery_fee'])
                        ${{ $item['delivery_fee'] ? number_format((float)$item['delivery_fee'], 2, '.', '') : number_format((float)0, 2, '.', '')
                        }}
                    </td>
                    <td>
                        @php ($total_misc_fee += $item['misc_fee'])
                        ${{ $item['misc_fee'] ? number_format((float)$item['misc_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                    </td>
                    <td>
                        @php ($total_overall += $item['total'])
                        ${{ $item['total'] ? number_format((float)$item['total'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                    </td>
                </tr>
                @endforeach
                <tr style="page-break-inside: avoid;">
                    <td style="font-weight: bold;" class="border--top">
                        Weekly Total
                    </td>
                    <td style="font-weight: 900;" class="border--top">
                        ${{ $total_receiving_fee ? number_format((float)$total_receiving_fee, 2, '.', '') : number_format((float)0, 2,
                        '.', '') }}
                    </td>
                    <td style="font-weight: 900;" class="border--top">
                        ${{ $total_storage_fee ? number_format((float)$total_storage_fee, 2, '.', '') : number_format((float)0, 2, '.',
                        '') }}
                    </td>
                    <td style="font-weight: 900;" class="border--top">
                        ${{ $total_delivery_fee ? number_format((float)$total_delivery_fee, 2, '.', '') : number_format((float)0, 2,
                        '.', '') }}
                    </td>
                    <td style="font-weight: 900;" class="border--top">
                        ${{ $total_misc_fee ? number_format((float)$total_misc_fee, 2, '.', '') : number_format((float)0, 2, '.', '')
                        }}
                    </td>
                    <td style="font-weight: 900;" class="border--top">
                        ${{ $total_overall ? number_format((float)$total_overall, 2, '.', '') : number_format((float)0, 2, '.', '') }}
                    </td>
                </tr>
                @endif
            </tbody>
        </table>
    </div>
</body>

</html>