<?php

namespace Api\Dashboard;

use Api\Controller;
use App\Models\Dsg;
use App\Models\Package;

class AdminStatsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin|warehouse']);
    }

    public function getStats()
    {
        $data['dsg_warehouse']     = Dsg::warehouse()->count();
        $data['dsg_receiving']     = Dsg::active()->count();
        $data['dsg_archived']      = Dsg::archived()->count();
        $data['repaired_packages'] = Package::repaired()->count();
        $data['damaged_packages']  = Package::damaged()->count();
        $data['unknown_shipper']   = Package::unknownShipper()->count();
        $data['unknown_client']    = Package::unknownClient()->count();
        $data['unknown_customer']  = Package::unknownCustomer()->count();
        $data['undelivered']       = Package::undelivered()->active()->count();

        return response()->json(['data' => $data]);
    }
}
