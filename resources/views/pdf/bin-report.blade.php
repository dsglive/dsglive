<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>
        Bin {{ $code }} Report
    </title>
    <!-- //! We Need to Inline Our CSS -->
    <style type="text/css">

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

    <br>
    <header>
    <table style="border-top: 2px solid #ccc; border-bottom: none;">
        <tr>
            <td style="width: 25%; color: darkblue; text-align: left;">
                Designer Services Group<br> (407) 331-1200<br> (407) 331-0870 fax
            </td>
    
            <td style="width: 50%; color: darkblue; text-align: center;">
                <h2>Current Bin List</h2>
                <h3 style="margin-top:-25px; font-style: italic">Bin: {{ $code }} <br> Total items: {{ count($packages) }}
                    <br> Total Cube: {{ $total_cube }}</h3>
            </td>
    
            <td style="width: 25%; color: darkblue; text-align: right;">
                225 Pineda Street<br> Unit 127<br> Longwood, FL 32750
            </td>
        </tr>
    </table>
    </header>
    <table >
        <thead style="border-top: 2px solid darkblue; border-bottom: 1px solid darkblue;">
            <tr>
                <th>DSG #</th>
                <th>Style#</th>
                <th>Item Description</th>
                <th>Customer &amp; Client</th>
                <th>Damage Description</th>
                <th>Item Cube</th>
            </tr>
        </thead>
        <tbody style="margin-top:10px;">
            @foreach($packages as $item)
            <tr style="page-break-inside: avoid;">
                <td class="borders">
                    {{ $item['dsg_id'] }}
                </td>
                <td class="borders">
                    {{ $item['style_no'] }}
                </td>
                <td class="borders">
                    {{ $item['description'] }}
                </td>
                <td class="borders">
                    {{ $item['customer']['profile']['company_name'] }} | {{ $item['client_name'] }}
                </td>
                <td class="borders">
                    {{ $item['damage_description'] }}
                </td>
                <td class="borders">
                    {{ $item['cube'] }}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>