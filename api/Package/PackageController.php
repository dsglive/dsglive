<?php

namespace Api\Package;

use Api\Controller;
use App\Models\Package;
use Illuminate\Http\Request;
use App\Http\Resources\Dsg\PackageResource;

class PackageController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    public function add()
    {
        $package = new Package();
        $package->save();
        $package->media;
        return new PackageResource($package);
    }

    /**
     * @param Request $request
     */
    public function uploadDamageImage(Package $package, Request $request)
    {
        $id = $package->id;
        return Package::uploadDamageImage($id, 'damaged_images');
    }

    /**
     * @param Request $request
     */
    public function uploadPackageImages(Request $request)
    {
        $package                = new Package();
        $package->description   = 'power';
        $package->handling_type = 1;
        $package->store_at      = 'floor';
        $package->delivered     = 0;
        $package->save();
        $id   = $package->id;
        $link = Package::uploadPackageImage($id, 'package_images');

        return response()->json(['package_images' => $link]);
    }
}
