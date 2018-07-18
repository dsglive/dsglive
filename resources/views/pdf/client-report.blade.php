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
            <h2 style="padding-top:-20px;">Current Inventory List</h2>
            <h3 style="padding-top:-10px; font-style: italic">
                Customer:
                <?php echo $customers_name ?><br>Client:
                <?php echo $clients_name ?><br> Total Items:
                <?php echo count($client_items); ?> <br> Total Cube:
                <?php echo $total_cube; ?> cf
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

    <table>
        <thead>
            <!-- <tr>
      <th colspan="7">Client: <?php // echo $client[0]["client_name"] ?></th>
    </tr> -->
            <tr>
                <th>Bin</th>
                <th>DSG #</th>
                <th>Style</th>
                <th>Item Description</th>
                <th>Shipper</th>
                <th>Damage Description</th>
                <th>Item Cube</th>
            </tr>
        </thead>
        <tbody>
            <?php //echo "<tr><td>" . $client_items[0]->dsg_number . "</td></tr>"; ?>
            <?php foreach ($client_items as $clientsKey => $client) {
        // The following is ONE bin from $data['client_items'] array. This was sent from Reports Controller:
        // array (size=4)
        // 0 => 
        //   object(stdClass)[32]                                         <- BTW Have in mind that this is an object!
        //     public 'item_number' => string '108' (length=3)
        //     public 'dsg_number' => string '543543' (length=6)
        //     public 'customer_id' => string '11' (length=2)
        //     public 'customer_name' => string 'Anne Rue Interiors' (length=18)
        //     public 'client_id' => string '6' (length=1)
        //     public 'client_name' => string 'Newcastle Model ' (length=16)
        //     public 'shipper_id' => string '4' (length=1)
        //     public 'shipper_name' => string 'Wayfair' (length=7)
        //     public 'date_in' => string '2017-04-03' (length=10)
        //     public 'date_out' => string '0000-00-00' (length=10)
        //     public 'po_number' => string '909' (length=3)
        //     public 'style_number' => string '321' (length=3)
        //     public 'item_cube' => string '6.00' (length=4)
        //     public 'handling' => string '2' (length=1)
        //     public 'stored_on_floor' => string '1' (length=1)
        //     public 'bin' => string '1' (length=1)
        //     public 'item_description' => string '' (length=0)
        //     public 'damaged_description' => string '' (length=0)
        //     public 'damaged' => string '0' (length=1)
        //     public 'repaired' => string '0' (length=1)
        //     public 'repair_date' => string '0000-00-00 00:00:00' (length=19)
        //     public 'delivered' => string '0' (length=1)
        echo "<tr>";
        echo "<td>" . $client->bin . "</td>";
        echo "<td>" . $client->dsg_number . "</td>";
        echo "<td>" . $client->style_number . "</td>";        
        echo "<td>" . $client->item_description . "</td>";
        echo "<td>" . $client->shipper_name . "</td>";
        echo "<td>" . $client->damaged_description . "</td>";
        echo "<td>" . $client->item_cube . "</td>";
        echo "</tr>";
        }
    ?>
        </tbody>
    </table>