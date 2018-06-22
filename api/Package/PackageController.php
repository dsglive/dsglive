<?php

namespace Api\Package;

use Api\Controller;
use App\Models\Package;
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

    public function delete($id)
    {
        $package = Package::find($id);
        $package->delete();
        return response()->json(['message' => 'Package Deleted!']);
    }

    /**
     * @param $id
     */
    public function uploadDamageImage($id)
    {
        $link = Package::uploadDamageImage($id, 'damaged_images');
        return response()->json(['damaged_images' => $link]);
    }

    /**
     * @param $id
     */
    public function uploadPackageImages($id)
    {
        $link = Package::uploadPackageImage($id, 'package_images');

        return response()->json(['package_images' => $link]);
    }
}
