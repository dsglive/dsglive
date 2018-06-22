<?php

namespace Api\Dashboard;

use Api\Controller;
use App\Models\Dsg;
use App\Models\User;
use App\Models\Package;
use Illuminate\Http\Request;

class CustomerStatsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:customer']);
    }

    /**
     * @param Request $request
     */
    public function getStats(Request $request)
    {
        $user                = $request->user();
        $data['clients']     = $user->clients()->active()->count();
        $data['receiving']   = Dsg::where('customer_id', $user->id)->active()->count();
        $data['damaged']     = Package::where('customer_id', $user->id)->damaged()->count();
        $data['unknown']     = Package::where('customer_id', $user->id)->unknown()->count();
        $data['undelivered'] = Package::where('customer_id', $user->id)->undelivered()->active()->count();
        $data['balance']     = 0;
        
        return response()->json(['data' => $data]);
    }
}
