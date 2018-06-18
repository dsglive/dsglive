<?php

namespace Api\Package;

use Api\Controller;
use App\Models\Package;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    /**
     * @param Request $request
     */
    public function uploadDamageImage(Request $request)
    {
        $package = new Package();
        $package->description = 'power';
        $package->handling_type = 1;
        $package->store_at = 'floor';
        $package->delivered = 0;
        $package->save();
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
        $id = $package->id;
        $link = Package::uploadPackageImage($id, 'package_images');

        return response()->json(['package_images' => $link]);
    }
}
