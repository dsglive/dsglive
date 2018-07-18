<!DOCTYPE html>
<html>

<head>
    <title>Field Transfer#
        <?php echo $ticket_data->ticket_id; ?>
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
            height: 300px;
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

        #content {
            margin-top: 25px;
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
                    <h3>Field Transfer#:
                        <?php echo $ticket_data->ticket_id; ?>
                    </h3>
                    <p style="font-style: italic">Date:
                        <?php if($ticket_data->delivery_date) : $date = strtotime($ticket_data->delivery_date); echo date('M d, Y', $date); endif; ?>
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
                <td style="width: 15%; color: darkblue; text-align: right; vertical-align: top;">
                    Customer:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; vertical-align: top;">
                    <strong><?php echo $ticket_data->customer_name; ?></strong>
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; vertical-align: top;">
                    Client:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; vertical-align: top;">
                    <?php echo $ticket_data->client_name; ?>
                </td>
            </tr>
            <!-- row 1 of 6 -->

            <tr>
                <!-- row 2 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right; vertical-align: top;">
                    Pick Up Address:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; vertical-align: top;">
                    <?php echo $ticket_data->po_address1; ?><br>
                    <?php if($ticket_data->po_address2) : echo $ticket_data->po_address2 . '<br>'; endif; ?>
                    <?php echo $ticket_data->po_city . ', ' . $ticket_data->po_state . ' ' . $ticket_data->po_zip; ?>
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; vertical-align: top;">
                    Drop Off Address:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; vertical-align: top;">
                    <?php echo $ticket_data->do_address1; ?><br>
                    <?php if($ticket_data->do_address2) : echo $ticket_data->do_address2 . '<br>'; endif; ?>
                    <?php echo $ticket_data->do_city . ', ' . $ticket_data->do_state . ' ' . $ticket_data->do_zip; ?>
                </td>
            </tr>
            <!-- row 2 of 6 -->

            <tr>
                <!-- row 3 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right; padding-top: 5px; padding-bottom: 5px;">
                    Notes:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;">
                    <?php echo $ticket_data->ticket_notes; ?>
                </td>
            </tr>
            <!-- row 3 of 6 -->

            <tr>
                <!-- row 4 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right; padding-top: 5px; padding-bottom: 5px;">
                    Hourly Rate:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;">
                    <?php $ticket_data->rate; ?>
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; padding-left: 10px; padding-top: 5px; padding-bottom: 5px;">
                    Prep:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid darkblue;">
                    <?php echo $ticket_data->prep_time; ?>
                </td>
            </tr>
            <!-- row 4 of 6 -->

            <tr>
                <!-- row 5 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right; padding-top: 5px; padding-bottom: 5px;">
                    Start:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid darkblue;">
                    <?php echo $ticket_data->start_time; ?>
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; padding-top: 5px; padding-bottom: 5px;">
                    Travel:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid darkblue;">
                    <?php echo $ticket_data->travel_time; ?>
                </td>
            </tr>
            <!-- row 5 of 6 -->

            <tr style="margin-bottom: 10px;">
                <!-- row 6 of 6 -->
                <td style="width: 15%; color: darkblue; text-align: right; padding-top: 5px; padding-bottom: 5px;">
                    End:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid darkblue;">
                    <?php echo $ticket_data->end_time; ?>
                </td>

                <td style="width: 15%; color: darkblue; text-align: right; padding-top: 5px; padding-bottom: 5px;">
                    Clean Up:
                </td>
                <td style="width: 25%; color: darkblue; text-align: left; padding-left: 10px; padding-top: 5px; padding-bottom: 5px; border-bottom: 1px solid darkblue;">
                    <?php echo $ticket_data->clean_up_time; ?>
                </td>
                <!-- row 6 of 6 -->
            </tr>
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
        <thead style="border-bottom: 1px solid darkblue;">
            <tr>
                <th>Received?</th>
                <th>Style#</th>
                <th>Description</th>
                <th>Storage Description</th>
            </tr>
            <p>Notes __________________________________________________________</p>
        </thead>
    </table>

    <p>Additional Comments:</p>
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

    <p>Verified By:</p>

    <table style="width: 50%; float: left;">
        <tr>
            <td>Shipper Rep:</td>
            <td>____________________________________</td>
        </tr>
        <tr>
            <td>Name:</td>
            <td>____________________________________</td>
        </tr>
        <tr>
            <td>Date:</td>
            <td>____________________________________</td>
        </tr>
    </table>

    <table style="width: 50%; float: left;">
        <tr>
            <td>Destination Rep:</td>
            <td>____________________________________</td>
        </tr>
        <tr>
            <td>Name:</td>
            <td>____________________________________</td>
        </tr>
        <tr>
            <td>Date:</td>
            <td>____________________________________</td>
        </tr>
    </table>

</body>

</html>