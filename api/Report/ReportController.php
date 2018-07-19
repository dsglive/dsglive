<?php

namespace Api\Report;

use Api\Controller;
use App\Models\Dsg;
use App\Models\Package;
use Illuminate\Http\Request;
use App\Http\Resources\Dsg\DsgResource;
use App\Http\Resources\Dsg\PackageResource;

class ReportController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    public function reportAllDamaged()
    {
        $packages = Package::with('media')->damaged()->active()->get();
        return PackageResource::collection($packages);
    }

    /**
     * @param Request $request
     */
    public function reportAllUnknown(Request $request)
    {
        $dsg = Package::where('customer_id', 1)->OrWhere('client_id', 1)->active()
                                               ->distinct()->pluck('dsg_id')->toArray();
        $dsg = Dsg::whereIn('id', $dsg)->get();
        return DsgResource::collection($dsg);
    }

    /**
     * @param Request $request
     */
    public function reportByBin(Request $request)
    {
        $packages = Package::where('bin_name', $request->input('bin_name'))->active()->get();
        return PackageResource::collection($packages);
    }

    /**
     * @param Request $request
     */
    public function reportByClient(Request $request)
    {
        $packages = Package::where('client_id', $request->input('client_id'))
            ->where('customer_id', $request->input('customer_id'))->active()->get();
        return PackageResource::collection($packages);
    }

    /**
     * @param Request $request
     */
    public function reportByCustomer(Request $request)
    {
        $packages = Package::where('customer_id', request()->input('customer_id'))->active()->get();
        return PackageResource::collection($packages);
    }

    /**
     * @param Package $package
     */
    public function viewPackage(Package $package)
    {
        return new PackageResource($package);
    }
}
