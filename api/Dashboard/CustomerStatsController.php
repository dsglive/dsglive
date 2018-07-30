<?php

namespace Api\Dashboard;

use Api\Controller;
use App\Models\Dsg;
use App\Models\User;
use App\Models\Invoice;
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
        $data['clients']     = $user->clients()->count();
        $data['receiving']   = Dsg::where('customer_id', $user->id)->active()->count();
        $data['damaged']     = Package::where('customer_id', $user->id)->damaged()->count();
        $data['repaired'] = Package::where('customer_id', $user->id)->repaired()->count();
        $data['unknown']     = Dsg::where('customer_id', $user->id)->unknownClient()->count();
        $data['undelivered'] = Package::where('customer_id', $user->id)->undelivered()->active()->count();

        $data['balance'] = Invoice::where('customer_id', $user->id)->where('overdue', false)->sum('total');

        return response()->json(['data' => $data]);
    }
}
