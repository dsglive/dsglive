<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>
        Customer Report For: {{ $profile['first_name'] }} {{ $profile['last_name'] }}
    </title>
    <!-- //! We Need to Inline Our CSS -->
    <style type="text/css">
        body {
            background-color: #fff;
            margin: 40px;
            font-family: Lucida Grande, Verdana, Sans-serif;
            font-size: 14px;
            color: #4F5155;
        }

        a {
            color: #003399;
            background-color: transparent;
            font-weight: normal;
        }

        .horizontal {
            color: #444;
            background-color: transparent;
            border-bottom: 1px solid #D0D0D0;
        }


        /* style table */

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 30px;
        }

        thead {
            color: darkblue;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        /* tr:nth-child(even) {
            background-color: #dddddd;
        } */

        ul {
            list-style-type: none;
        }

        /* Create three unequal columns that floats next to each other */

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
    <br>
    <div class="row">
        <div class="left" style="width: 25%; color: darkblue;">
            <span>Designer Services Group</span>
            <span>(407) 331-1200</span><br>
            <span>(407) 331-0870 fax</span>
        </div>
        <div class="middle" style="width: 49%; color: darkblue;">
            <h2 style="padding-top:-20px;">Current Inverntory List</h2>
            <h3 style="padding-top:-10px; font-style: italic">for {{ $profile['company_name'] }}
            </h3>
        </div>
        <div class="right" style="width: 25%; color: darkblue;">
            <span>225 Pineda St - Unit 127</span>
            <span>Longwood FL 32750</span>
        </div>
    </div>
    <hr style="border-color:black;">
    <br> 
    <br>
    @foreach($clients as $client) 
    @if(count($client['packages'])>0)
    <table>
        <thead>
            <tr>
                <th colspan="3" style="border-right: thin solid white">
                    {{ $client['name'] }}
                </th>
                <th colspan="4" style="border-left:thin solid white; text-align:right">
                    Total items: {{ count($client['packages']) }} | Total Cube: {{ $client['total_cube'] }}
                </th>
            </tr>
            <tr>
                <th>DSG #</th>
                <th>Style #</th>
                <th>Description</th>
                <th>Shipper</th>
                <th>Damage (if any)</th>
                <th>Cube</th>
            </tr>
        </thead>
        <tbody>
            @foreach($client['packages'] as $item)
            @if(!$item['delivered'])
            <tr style="page-break-inside: avoid;">
                <td class="borders" style="width:10%;">
                    {{ $item['dsg_id'] }}
                </td>
                <td class="borders" style="width:10%;">
                    {{ $item['style_no'] }}
                </td>
                <td class="borders" style="width:30%;">
                    {{ $item['description'] }}
                </td>
                <td class="borders" style="width:15%;">
                    {{ $item['shipper_name'] }}
                </td>
                <td class="borders" style="width:30%;">
                    @if($item['damaged']) {{ $item['damage_description'] }}@endif
                </td>
                <td class="borders" style="width:5%;">
                    {{ $item['cube'] }}
                </td>
            </tr>
            @endif
            @endforeach
        </tbody>
    </table>
    @endif
    @endforeach
</body>

</html>