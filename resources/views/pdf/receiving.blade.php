<!DOCTYPE html>
<html>

<head>
    <title>Receiver - DSG#
        <?php echo $dsg->dsg_number; ?>
    </title>
    <!-- //! We Need to Inline Our CSS -->
    <style type="text/css">
        @page {
            margin: 180px 50px 120px;
        }

        #header {
            position: fixed;
            left: 0px;
            top: -150px;
            right: 0px;
            height: 120px;
        }

        #footer {
            position: fixed;
            left: 0px;
            bottom: -100px;
            right: 0px;
            height: 50px;
        }

        #footer .page-number:after {
            content: counter(page);
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
                    <h3>Receiving - DSG#:
                        <?php echo $dsg->dsg_number; ?>
                    </h3>
                    <p style="font-style: italic">Date:
                        <?php if($items[0]->date_in) : $date = strtotime($items[0]->date_in); echo date('M d, Y', $date); endif; ?>
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
                    <strong><?php echo $dsg->customer_name; ?></strong>
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
                    <?php echo $dsg->client_name; ?>
                </td>

                <td style="width: 15%; color: darkblue; text-align: right;">
                    Shipper:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    <?php echo $dsg->shipper_name; ?>
                </td>
            </tr>
            <!-- row 2 of 6 -->

            <tr>
                <!-- row 3 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right;">
                    Phone:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    <?php if($cust_num) : echo $cust_num->phone; endif; ?>
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; padding-left: 10px;">
                    Pieces:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    <?php echo $dsg->total_pieces; ?>
                </td>
            </tr>
            <!-- row 3 of 6 -->

            <tr>
                <!-- row 4 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right;">
                    PO#:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    <?php echo $items[0]->po_number; ?>
                </td>

                <td style="width: 15%; color: darkblue; text-align: right;">
                    Receive:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px;">
                    <?php echo $dsg->receiving_amount; ?>
                </td>
            </tr>
            <!-- row 4 of 6 -->
        </table>
    </header>

    <footer id="footer">
        <table style="border-top: 2px solid #ddd;">
            <tr>
                <td style="color: darkblue;">
                    <?php echo date('D, M d, Y'); ?>
                </td>
                <td style="color: darkblue; text-align: right; position:relative !important;">
                    <span class="page-number">Page </span>
                </td>
            </tr>
        </table>
    </footer>


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
            <?php foreach($items as $item): ?>
            <tr>
                <td class="borders">
                    <?php echo $item->style_number; ?>
                </td>
                <td class="borders">
                    <?php echo $item->item_description; ?>
                </td>
                <td class="borders">
                    <?php echo $item->bin; ?>
                </td>
                <?php if($item->stored_on_floor == 0) : ?>
                <td class="borders">
                    <?php echo $rates[0]->rate_amount; ?>
                </td>
                <?php else : ?>
                <td class="borders">
                    <?php echo $rates[1]->rate_amount; ?>
                </td>
                <?php endif; ?>
                <td class="borders">
                    <?php echo $item->damaged_description; ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

</body>

</html>