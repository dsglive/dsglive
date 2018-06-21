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
     * @param Package $package
     * @param Request $request
     */
    public function uploadDamageImage(Package $package, Request $request)
    {
        $link = $package->uploadDamageImage('damaged_images');
        return response()->json(['package_images' => $link]);
    }

    /**
     * @param Package $package
     * @param Request $request
     */
    public function uploadPackageImages(Package $package, Request $request)
    {
        $link = $package->uploadPackageImage('package_images');

        return response()->json(['package_images' => $link]);
    }
}
