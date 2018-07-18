<!DOCTYPE html>
<html>

<head>
<title>@if($active)Receiving @else Warehouse @endif - DSG# {{ $id }}</title>
    <!-- //! We Need to Inline Our CSS -->
    <style type="text/css">
        @page {
            margin: 180px 50px 120px;
        }

        #footer {
            position: fixed;
            left: 0px;
            bottom: -100px;
            right: 0px;
            height: 50px;
        }

        body {
            margin-top: 140px;
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
    </style>
</head>

<body>

    <header id="header">
        <table style="border-top: 2px solid #ccc; border-bottom: none">
            <tr>
                <td style="width: 25%; color: darkblue; text-align: left;">
                    Designer Services Group<br> (407) 331-1200<br> (407) 331-0870 fax
                </td>

                <td style="width: 50%; color: darkblue; text-align: center;">
                    <h3>@if($active)Receiving @else Warehouse @endif - DSG#: {{ $id }}
                    </h3>
                    <p style="font-style: italic">Date:
                        @if($packages[0]['date_received'])
                            {{ \Carbon\Carbon::parse($packages[0]['date_received'])->format('D, M d Y') }}
                        @endif
                    </p>
                </td>

                <td style="width: 25%; color: darkblue; text-align: right;">
                    225 Pineda Street<br> Unit 127<br> Longwood, FL 32750
                </td>
            </tr>
        </table>

        <table style="border-top: 2px solid darkblue; border-bottom: 2px solid darkblue;">
            <tr>
                <!-- row 1 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right;">
                    Customer:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                <strong>{{ $customer_name }}</strong>
                </td>

                <td style="width: 15%; color: darkblue; text-align: right;">
                    Carrier:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    Designer Services Group
                </td>
            </tr>
            <!-- row 1 of 6 -->

            <tr>
                <!-- row 2 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right;">
                    Client:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    {{ $client_name }}
                </td>

                <td style="width: 15%; color: darkblue; text-align: right;">
                    Shipper:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    {{ $shipper_name }}
                </td>
            </tr>
            <!-- row 2 of 6 -->

            <tr>
                <!-- row 3 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right;">
                    Phone:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    {{ $customer['profile']['phone'] }}
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; padding-left: 10px;">
                    Pieces:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    {{ $total_pieces }}
                </td>
            </tr>
            <!-- row 3 of 6 -->

            <tr>
                <!-- row 4 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right;">
                    PO#:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    {{ $packages[0]['po_no'] }}
                </td>

                <td style="width: 15%; color: darkblue; text-align: right;">
                    Receive:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    {{ $receiving_amount }}
                </td>
            </tr>
            <!-- row 4 of 6 -->
        </table>
    </header>

    <table id="content">
        <thead>
            <tr>
                <th class="short">Style #</th>
                <th class="normal">Description</th>
                <th class="normal">Location</th>
                <th class="normal">$/Day</th>
                <th class="normal">Damage</th>
            </tr>
        </thead>
        <tbody>
            @foreach($packages as $item)
            <tr>
                <td class="borders">
                    {{ $item['style_no'] }}
                </td>
                <td class="borders">
                    {{ $item['description'] }}
                </td>
                <td class="borders">
                    {{ $item['bin_name'] }}
                </td>
                <td class="borders">
                    {{ $item['storage_fee'] }}
                </td>
                <td class="borders">
                    {{ $item['damage_description'] }}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>

</body>

</html>