<?php

namespace Api\Dashboard;

use Api\Controller;
use App\Models\Dsg;
use App\Models\User;
use App\Models\Package;

class DashboardController extends Controller
{

    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    public function getStats()
    {
        $data['customers']   = User::role('customer')->active()->count();
        $data['warehouse']   = Dsg::warehouse()->count();
        $data['receiving']   = Dsg::active()->count();
        $data['damaged']     = Package::damaged()->count();
        $data['unknown']     = Package::unknown()->count();
        $data['undelivered'] = Package::undelivered()->count();

        return response()->json(['data' => $data]);
    }
}
