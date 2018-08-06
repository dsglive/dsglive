<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Weekly Billing Invoice {{ $date_started }}  to {{ $date_ended }}
    </title>
    <style type="text/css">
        div.page { page-break-after: always; page-break-inside: avoid; }


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

        td.border--top{
            border-top: 2px solid #dddddd;
        }

        td.border--bottom{ 
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
    @foreach($customers as $customer)
        <div class="page">
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
            <br>
            <br>
            <table>
                <thead>
                    <tr>
                        <th colspan="3" style="border-right: thin solid white">
                            Customer: {{ $customer['customer_name'] }}
                        </th>
                    </tr>
                    <tr>
                        <th>Client</th>
                        <th>Receiving</th>
                        <th>Storage</th>
                        <th>Delivery</th>
                        <th>Misc</th>
                        <th>Total Bill</th>
                    </tr>
                </thead>
                <tbody>
                    @if(count($customer['clients'])>0) 
                        @foreach($customer['clients'] as $item)
                    <tr style="page-break-inside: avoid;">
                        <td class="border--top">
                            {{ $item['client_name'] }} <br>
                        </td>
                        <td class="border--top">
                            ${{ $item['receiving_fee'] ? number_format((float)$item['receiving_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                        <td class="border--top">
                            ${{ $item['storage_fee'] ? number_format((float)$item['storage_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                        <td class="border--top">
                            ${{ $item['delivery_fee'] ? number_format((float)$item['delivery_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                        <td class="border--top">
                            ${{ $item['misc_fee'] ? number_format((float)$item['misc_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                        <td class="border--top">
                            ${{ $item['total'] ? number_format((float)$item['total'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                    </tr>
                    <tr style="page-break-inside: avoid;">
                        <td colspan="6" class="border--bottom">
                            Dsg Included : 
                            @foreach($item['dsg_records'] as $dsg) 
                            {{ $dsg }}
                            @if($loop->last) @else , @endif
                            @endforeach 
                        </td>
                    </tr>
                        @endforeach 
                    <tr style="page-break-inside: avoid;">
                        <td style="font-weight: bold;">
                            Dsg Customer Total
                        </td>
                        <td style="font-weight: 900;">
                            ${{ $customer['receiving_fee'] ? number_format((float)$customer['receiving_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                        <td style="font-weight: 900;">
                            ${{ $customer['storage_fee'] ? number_format((float)$customer['storage_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                        <td style="font-weight: 900;">
                            ${{ $customer['delivery_fee'] ? number_format((float)$customer['delivery_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                        <td style="font-weight: 900;">
                            ${{ $customer['misc_fee'] ? number_format((float)$customer['misc_fee'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                        <td style="font-weight: 900;">
                        </td>
                    </tr>
                    <tr style="page-break-inside: avoid;">
                        <td style="font-weight: bold;" colspan="3">
                        </td>
                        <td style="font-weight: bold;"colspan="2">
                            Total For The Week:
                        </td>
                        <td style="font-weight: bold;">
                            ${{ $customer['total'] ? number_format((float)$customer['total'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                    </tr>
                    <tr style="page-break-inside: avoid;">
                        <td style="font-weight: bold;" colspan="3">
                        </td>
                        <td style="font-weight: bold;" colspan="2">
                            Total Balance:
                        </td>
                        <td style="font-weight: bold;">
                            ${{ $customer['balance'] ? number_format((float)$customer['balance'], 2, '.', '') : number_format((float)0, 2, '.', '') }}
                        </td>
                    </tr>
                    <tr style="page-break-inside: avoid;">
                        <td colspan="3">
                        </td>
                        <td style="padding-top:-10px; font-style: italic; font-size:.75em;font-color:black;" colspan="3">
                            (includes current week AND any outstanding balance)
                        </td>
                    </tr>
                    @endif
                </tbody>
            </table>
        </div>
    @endforeach    
</body>

</html>