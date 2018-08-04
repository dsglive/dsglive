<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>All Customer Invoice From X to Y
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

        td.borders,
        th.borders {
            border-top: 1px solid #dddddd;
            border-bottom: 1px solid #dddddd;
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
                    <h2 style="padding-top:-20px;">All Customer Weekly Invoice Report</h2>
                    <h3 style="padding-top:-10px; font-style: italic">For Billing Cyle X through Y
                    </h3>
                </div>
                <div class="right" style="width: 25%; color: darkblue;">
                    <span>225 Pineda St - Unit 127</span>
                    <span>Longwood FL 32750</span>
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
                            Customer: {{ $customer['profile']['company_name'] }}
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
                    @if(count($customer['invoices'])>0) 
                        @foreach($customer['invoices'] as $item)
                    <tr style="page-break-inside: avoid;">
                        <td class="borders">
                            {{ $item['customer_name'] }}
                        </td>
                        <td class="borders">
                            {{ $item['receiving_fee'] }}
                        </td>
                        <td class="borders">
                            {{ $item['storage_fee'] }}
                        </td>
                        <td class="borders">
                            {{ $item['delivery_fee'] }}
                        </td>
                        <td class="borders">
                            {{ $item['misc_fee'] }}
                        </td>
                        <td class="borders">
                            {{ $item['total'] }}
                        </td>
                    </tr>
                        @endforeach 
                    @endif
                </tbody>
            </table>
        </div>
    @endforeach    
</body>

</html>