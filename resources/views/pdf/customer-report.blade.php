<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>
        <?php //echo $title ?>
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

        .paragraph-line {
            color: #444;
            background-color: transparent;
            border-bottom: 1px solid #D0D0D0;
        }

        .double-line {
            color: #444;
            background-color: transparent;
            border-bottom-width: thick;
            border-bottom: 2px solid #000000;
        }

        code {
            font-family: Monaco, Verdana, Sans-serif;
            font-size: 12px;
            background-color: #f9f9f9;
            border: 1px solid #D0D0D0;
            color: #002166;
            display: block;
            margin: 14px 0 14px 0;
            padding: 12px 10px 12px 10px;
        }

        /* apply page break */

        .page-break {
            page-break-after: always;
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

        .tab {
            -moz-tab-size: 4;
            /* Firefox */
            -o-tab-size: 4;
            /* Opera 10.6-12.1 */
            tab-size: 4;
        }

        #footer {
            position: fixed;
            bottom: 0px;
            left: 0px;
            margin-bottom: 0px;
        }

        .indent-hanging {
            margin-left: 115px;
            text-indent: -45px;
        }

        input,
        textarea,
        select {
            border: dashed 1mm red;
            background: #FCC;
            color: #400;
            text-align: left;
            font-size: 11pt;
        }
    </style>

    <div class="horizontal" />
    <br>
    <div class="row">
        <div class="left" style="width: 25%; color: darkblue;">
            <span>Designer Services Group</span>
            <span>(407) 331-1200</span><br>
            <span>(407) 331-0870 fax</span>
        </div>

        <div class="middle" style="width: 50%; color: darkblue;">
            <h2 style="padding-top:-20px;">Current Inverntory List</h2>
            <h3 style="padding-top:-10px; font-style: italic">for
                <?php $firstElementsKey = key($clients); echo $clients[$firstElementsKey][0]["customer_name"]; ?>
            </h3>
            <!-- <span>Delivery Date: Oct-18-2016</span> -->
        </div>

        <div class="right" style="width: 25%; color: darkblue;">
            <span>225 Pineda St - Unit 127</span>
            <span>Longwood FL 32750</span>
        </div>
    </div>

    <br><br>

    <div class="double-line" />

    <br>
    <?php foreach ($clients as $clientsKey => $client): ?>
    <table>
        <thead>
            <tr>
                <th colspan="3" style="border-right: thin solid white">
                    Client:
                    <?php echo $client[0]["client_name"] ?>
                </th>
                <th colspan="4" style="border-left:thin solid white; text-align:right">
                    Total items:
                    <?php echo $clients_info[$clientsKey]["number_of_items"]; ?> | Total Cube:
                    <?php echo $clients_info[$clientsKey]["total_cube"]; ?> cf
                </th>
            </tr>
            <tr>
                <th>Bin</th>
                <th>DSG #</th>
                <th>Style #</th>
                <th>Item Description</th>
                <th>Shipper</th>
                <th>Damage (if any)</th>
                <th>Cube</th>
            </tr>
        </thead>
        <tbody>
            <?php
        for($clientIndex = 0; $clientIndex < count($client); $clientIndex++) {
          echo "<tr>";
          echo "<td>" . $client[$clientIndex]["bin"] . "</td>";
          echo "<td>" . $client[$clientIndex]["dsg_number"] . "</td>";
          echo "<td>" . $client[$clientIndex]["style_number"] . "</td>";
          echo "<td>" . $client[$clientIndex]["item_description"] . "</td>";
          echo "<td>" . $client[$clientIndex]["shipper_name"] . "</td>";
          echo "<td>" . $client[$clientIndex]["damaged"] . "</td>";
          echo "<td>" . $client[$clientIndex]["item_cube"] . "</td>";
          echo "</tr>";
        }
  ?>
        </tbody>
    </table>
    <?php endforeach; ?>