<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{toTitleCase($type)}}# {{ $id }}
    </title>
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
                    <h3>{{toTitleCase($type)}}#: {{ $id }}
                    </h3>
                    <p style="font-style: italic">Date Delivered: {{ $date_delivered }}
                    </p>
                </td>

                <td style="width: 25%; color: darkblue; text-align: right;">
                    225 Pineda Street<br> Unit 127<br> Longwood, FL 32750
                </td>
            </tr>
        </table>

        <table style="border-top: 2px solid darkblue;padding:5px;">
            <tr>
                <!-- row 1 of 5 -->
                <td style="width: 15%; color: darkblue; text-align: right; vertical-align: top;">
                    Client:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; vertical-align: top;">
                    {{ $client_name}}<br> {{ $do_address_1 }}<br> {{ $do_address_2 }}<br> {{ $do_city }} {{ $do_state }}
                    {{ $do_zip }}
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; vertical-align: top;">
                    Customer:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; vertical-align: top;">
                    <strong>{{ $customer['profile']['company_name'] }}</strong>
                </td>
            </tr>
            <!-- row 1 of 5 -->

            <tr>
                <!-- row 2 of 5 -->
                <td style="width: 15%; color: darkblue; text-align: right; vertical-align: top;">
                    Notes:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; vertical-align: top;" colspan=3>
                    {{ $notes }}
                </td>
            </tr>
            <!-- row 2 of 5 -->

            <tr>
                <!-- row 3 of 5 -->
                <td style="width: 15%; color: darkblue; text-align: right; padding: 3px 0 3px; vertical-align: bottom;">
                    Hourly Rate:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding: 3px 0 3px; vertical-align: bottom;">
                    @if($rate)<span style="padding-left:25px;">${{ number_format((float)$rate, 2, '.', '') }}
                    </span>@endif
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; padding-left: 10px; padding: 3px 0 3px; vertical-align: bottom;">
                    Prep:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding: 3px 0 3px; border-bottom: 1px solid darkblue; vertical-align: bottom;">
                    @if($prep_time)<span style="padding-left:25px;">{{ $prep_time }} hrs</span>@endif
                </td>
            </tr>
            <!-- row 3 of 5 -->

            <tr>
                <!-- row 4 of 5 -->
                <td style="width: 15%; color: darkblue; text-align: right; padding: 3px 0 3px; vertical-align: bottom;">
                    Start:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding: 3px 0 3px; border-bottom: 1px solid darkblue; vertical-align: bottom;">
                    @if($start_time)<span style="padding-left:25px;">{{ $start_time }}H</span>@endif
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; padding: 3px 0 3px; vertical-align: bottom;">
                    Travel:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding: 3px 0 3px; border-bottom: 1px solid darkblue; vertical-align: bottom;">
                    @if($travel_time)<span style="padding-left:25px;">{{ $travel_time }} hrs</span>@endif
                </td>
            </tr>

            <tr>
                <!-- row 5 of 5 -->
                <td style="width: 15%; color: darkblue; text-align: right; padding: 3px 0 3px; vertical-align: bottom;">
                    End:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding: 3px 0 3px; border-bottom: 1px solid darkblue; vertical-align: bottom;">
                    @if($end_time)<span style="padding-left:25px;">{{ $end_time }}H</span>@endif
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; padding: 3px 0 3px; vertical-align: bottom;">
                    Clean Up:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding: 3px 0 3px; border-bottom: 1px solid darkblue; vertical-align: bottom;">
                    @if($clean_up_time)<span style="padding-left:25px;">{{ $clean_up_time }} hrs</span>@endif
                </td>
            </tr>
        </table>
    </header>
    @if(count($packages))
    <table id="content">
        <thead style="border-top: 2px solid darkblue; border-bottom: 1px solid darkblue;">
            <tr>
                <th>DSG#</th>
                <th>Style#</th>
                <th>Description</th>
                <th>Location</th>
                <th>Storage Description</th>
                <th style="text-align: center;">Cube</th>
            </tr>
        </thead>
        <tbody>
            <?php $item_cube = 0; ?>
            @foreach($packages as $item)
            <tr style="border-bottom: 1px solid #ccc;page-break-inside: avoid;">
                <td style="border-bottom: 1px solid #ccc;">
                    {{ $item['dsg_id'] }}
                </td>
                <td style="border-bottom: 1px solid #ccc;">
                    {{ $item['style_no'] }}
                </td>
                <td style="border-bottom: 1px solid #ccc;">
                    {{ $item['description'] }}
                </td>
                <td style="border-bottom: 1px solid #ccc;">
                    {{ $item['bin_name'] }}
                </td>
                <td style="border-bottom: 1px solid #ccc;">
                    {{ $item['handlingrate']['name'] }}
                </td>
                <td style="border-bottom: 1px solid #ccc; text-align: center;">
                    {{ $item['cube'] }}
                </td>
                <?php $item_cube += $item['cube']; ?>
            </tr>
            @endforeach
            <tr>
                <td colspan=5><strong>Total Cube for Delivery</strong></td>
                <td style="text-align: center;"><strong><?php echo $item_cube; ?></strong></td>
            </tr>
        </tbody>
    </table>
    @endif
    <p>Additional work requested at the time of delivery and completed (additional charges will apply):</p>
    <br>
    <hr>
    <br>
    <hr>
    <br>
    <hr>
    <br>
    <hr>
    <br>
    <hr>
    <br>

    <p>These items were inspected and received in good condition by:</p>

    <table>
        <tr>
            <td>Signature:</td>
            <td>____________________________________</td>
        </tr>
        <tr>
            <td>Company:</td>
            <td>____________________________________</td>
        </tr>
    </table>   
</body>
</html>
