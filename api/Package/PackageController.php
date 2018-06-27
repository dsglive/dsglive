<?php

namespace Api\Package;

use Api\Controller;
use App\Models\Package;
use App\Exceptions\UpdatingRecordFailed;
use App\Exceptions\PackageCreationFailed;
use App\Http\Resources\Dsg\PackageResource;

class PackageController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin|warehouse']);
    }

    public function add()
    {
        $package = new Package();
        $saved   = $package->save();

        if (!$saved) {
            throw new PackageCreationFailed;
        }

        $package->media;
        return new PackageResource($package);
    }

    /**
     * @param $id
     */
    public function delete($id)
    {
        $package = Package::find($id);
        $deleted = $package->delete();

        if (!$deleted) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Package Deleted!']);
    }

    /**
     * @param $id
     */
    public function uploadDamageImage($id)
    {
        try {
            $link = Package::uploadDamageImage($id, 'damaged_images');
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }

        return response()->json(['damaged_images' => $link]);
    }

    /**
     * @param $id
     */
    public function uploadPackageImages($id)
    {
        try {
            $link = Package::uploadPackageImage($id, 'package_images');
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }

        return response()->json(['package_images' => $link]);
    }
}
