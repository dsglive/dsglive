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
            <h2 style="padding-top:-20px;">Current Bin List</h2>
            <h3 style="padding-top:-10px; font-style: italic">Bin:
                <?php echo $bin_label; ?> <br> Total items:
                <?php echo count($bin_items); ?> <br> Total Cube:
                <?php echo $total_cube; ?> cf</h3>
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
      <th colspan="7">Client: <?php // echo $bin[0]["client_name"] ?></th>
    </tr> -->
            <tr>
                <th>DSG #</th>
                <th>Style</th>
                <th>Item Description</th>
                <th>Customer &amp; Client</th>
                <th>Damage Description</th>
                <th>Item Cube</th>
            </tr>
        </thead>
        <tbody>
            <?php //echo "<tr><td>" . $bin_items[0]->dsg_number . "</td></tr>"; ?>
            <?php foreach ($bin_items as $binsKey => $bin) {
        // The following is ONE bin from $data['bin_items'] array. This was sent from Reports Controller:
        // 0 => 
        // object(stdClass)[32]                                         <- BTW Have in mind that this is an object!
        //     public 'item_number' => string '110' (length=3)
        //     public 'dsg_number' => string '5129' (length=4)
        //     public 'customer_id' => string '11' (length=2)
        //     public 'customer_name' => string 'Anne Rue Interiors' (length=18)
        //     public 'client_id' => string '6' (length=1)
        //     public 'client_name' => string 'Newcastle Model ' (length=16)
        //     public 'shipper_id' => string '3' (length=1)
        //     public 'shipper_name' => string 'Restoration Hardware' (length=20)
        //     public 'date_in' => string '2018-04-02' (length=10)
        //     public 'date_out' => string '0000-00-00' (length=10)
        //     public 'po_number' => string '44' (length=2)
        //     public 'style_number' => string '17' (length=2)
        //     public 'item_cube' => string '32.00' (length=5)
        //     public 'handling' => string '4' (length=1)
        //     public 'stored_on_floor' => string '0' (length=1)
        //     public 'bin' => string '2' (length=1)
        //     public 'item_description' => string 'first items ... desc.' (length=21)
        //     public 'damaged_description' => string '' (length=0)
        //     public 'damaged' => string '0' (length=1)
        //     public 'repaired' => string '0' (length=1)
        //     public 'repair_date' => string '0000-00-00 00:00:00' (length=19)
        //     public 'delivered' => string '0' (length=1)
        
        echo "<tr>";
        echo "<td>" . $bin->dsg_number . "</td>";
        echo "<td>" . $bin->style_number . "</td>";
        echo "<td>" . $bin->item_description . "</td>";
        echo "<td>" . $bin->customer_name . " | " . $bin->client_name . "</td>";
        echo "<td>" . $bin->damaged_description . "</td>";
        echo "<td>" . $bin->item_cube . "</td>";
        echo "</tr>";
        }
    ?>
        </tbody>
    </table>