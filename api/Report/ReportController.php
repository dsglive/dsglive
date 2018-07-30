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
        $this->middleware(['role:admin'], ['except' =>
            ['reportUnknownClient', 'reportUnknownCustomer', 'reportUnknownShipper']
        ]);
    }

    public function reportAllDamaged()
    {
        $packages = Package::with('media')->damaged()->active()->get();
        return PackageResource::collection($packages);
    }

    public function reportAllRepaired()
    {
        $packages = Package::with('media')->repaired()->active()->get();
        return PackageResource::collection($packages);
    }

    /**
     * @param Request $request
     */
    public function reportAllUnknown(Request $request)
    {
        $dsg = Dsg::orUnknownCustomer()->orUnknownClient()->orUnknownShipper()->get();
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
     * @param Request $request
     */
    public function reportUnknownClient(Request $request)
    {
        $user = $request->user();

        if ($user->hasRole('admin') || $user->hasRole('warehouse')) {
            $dsg = Dsg::unknownClient()->get();
        } else {
            $dsg = Dsg::where('customer_id', $user->id)->unknownClient()->get();
        }

        return DsgResource::collection($dsg);
    }

    /**
     * @param Request $request
     */
    public function reportUnknownCustomer(Request $request)
    {
        $dsg = Dsg::unknownCustomer()->get();

        return DsgResource::collection($dsg);
    }

    /**
     * @param Request $request
     */
    public function reportUnknownShipper(Request $request)
    {
        $user = $request->user();

        if ($user->hasRole('admin') || $user->hasRole('warehouse')) {
            $dsg = Dsg::unknownShipper()->get();
        } else {
            $dsg = Dsg::where('customer_id', $user->id)->unknownShipper()->get();
        }

        return DsgResource::collection($dsg);
    }

    /**
     * @param Package $package
     */
    public function viewPackage(Package $package)
    {
        return new PackageResource($package);
    }
}
