<?php

namespace Api\Dsg;

use Api\Controller;
use App\Models\Dsg;
use App\Models\Rate;
use App\Models\User;
use App\Models\Package;
use App\Models\Shipper;
use Illuminate\Http\Request;
use App\Rules\RateMustBeAFloat;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Exceptions\DsgCreationFailed;
use App\Http\Resources\Dsg\DsgResource;
use App\Exceptions\UpdatingRecordFailed;
use App\Exceptions\PackageCreationFailed;
use App\Http\Resources\User\CustomerResource;
use App\Http\Resources\User\EmployeeResource;
use App\Http\Resources\User\WithShipperResource;

class DsgController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin|warehouse']);
    }

    /**
     * @param Request $request
     */
    public function create(Request $request)
    {
        $dsg_data      = $this->sanitizeDsg();
        $packages_data = $this->sanitizePackagesData();

        DB::beginTransaction();
        $dsg   = Dsg::create($dsg_data);
        $dsgId = $dsg->id;
        try {
            if (!$dsg) {
                throw new DsgCreationFailed;
            }

            foreach ($packages_data['packages'] as $package) {
                $package['dsg_id'] = $dsgId;
                $item              = Package::find($package['id']);
                $item->fill($package);
                $saved = $item->save();

                if (!$saved) {
                    throw new PackageCreationFailed;
                }
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400);
        }

        DB::commit();
        return response()->json(['message' => 'Dsg Has Been Created!'], 200);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $dsg             = Dsg::find($request->dsg_id);
        $ids             = $dsg->packages->pluck('id')->toArray();
        $remove_packages = Package::whereIn('id', $ids)->delete();

        if (count($ids) !== $remove_packages) {
            throw new UpdatingRecordFailed;
        }

        $deleted = $dsg->delete();

        if (!$deleted) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $deleted], 200);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function edit(Dsg $dsg)
    {
        if (!$dsg) {
            return response()->json(['message' => 'Cant Find Dsg With ID of '.$request->id]);
        }

        $dsg->load('packages.media');

        return new DsgResource($dsg);
    }

    public function getCustomers()
    {
        $users     = User::with(['profile', 'clients'])->role('customer')->exceptUnknownCustomer()->active()->get();
        $unknown   = User::with(['profile', 'clients'])->unknownCustomer()->get();
        $customers = $unknown->concat($users);
        return CustomerResource::collection($customers);
    }

    public function getEmployees()
    {
        $users = User::with('profile')->where('id', '!=', 1)->role(['admin','warehouse'])->active()->get();
        return EmployeeResource::collection($users);
    }

    public function getHandlingRates()
    {
        $handling = Rate::ofType('handling')->active()->get();
        return response()->json(['rates' => $handling]);
    }

    public function getShippers()
    {
        $active = Shipper::exceptUnknownShipper()->active()->get();
        $unknown = Shipper::unknownShipper()->get();
        $shippers = $unknown->concat($active);
        return WithShipperResource::collection($shippers);
    }

    public function getStorageRates()
    {
        $storage = Rate::ofType('storage')->active()->get();
        return response()->json(['rates' => $storage]);
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        $dsg = Dsg::all();
        return DsgResource::collection($dsg); // remove pagination
    }

    /**
     * @param Request $request
     */
    public function massActivate(Request $request)
    {
        $ids     = request()->input('selected');
        $updated = Dsg::whereIn('id', $ids)->update(['active' => true]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Dsg Activated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function massDeactivate(Request $request)
    {
        $ids     = request()->input('selected');
        $updated = Dsg::whereIn('id', $ids)->update(['active' => false]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Dsg Deactivated!', 'updated' => $ids]);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function toggleStatus(Request $request)
    {
        $user = $request->user();

        $dsg         = Dsg::find($request->dsg_id);
        $dsg->active = $request->toggle;
        $saved       = $dsg->save();

        if (!$saved) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $dsg->active], 200);
    }

    /**
     * @param Dsg $dsg
     */
    public function update(Dsg $dsg, Request $request)
    {
        if (!$dsg) {
            return response()->json(['message' => 'Cant Find Dsg With ID of '.$request->id]);
        }

        $dsg_data      = $this->sanitizeDsg();
        $packages_data = $this->sanitizePackagesData();
        DB::beginTransaction();
        $updated = $dsg->update($dsg_data);
        try {
            if (!$updated) {
                throw new UpdatingRecordFailed;
            }

            foreach ($packages_data['packages'] as $package) {
                $item = Package::find($package['id']);
                $item->fill($package);
                $saved = $item->save();

                if (!$saved) {
                    throw new UpdatingRecordFailed;
                }
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400);
        }

        DB::commit();

        return response()->json(['message' => 'Dsg Account Updated!']);
    }

    private function sanitizeDsg()
    {
        return request()->validate([
            'customer_id'       => 'required',
            'customer_name'     => 'required_with:customer_id',
            'client_id'         => 'nullable',
            'client_name'       => 'nullable',
            'shipper_id'        => 'required',
            'shipper_name'      => 'required_with:shipper_name',
            'received_by'       => 'required',
            'received_by_name'  => 'required_with:received_by',
            'written_by'        => 'required',
            'written_by_name'   => 'required_with:written_by',
            'inspected_by'      => 'required',
            'inspected_by_name' => 'required_with:inspected_by',
            'located_by'        => 'required',
            'located_by_name'   => 'required_with:located_by',
            'total_pieces'      => 'required',
            'date_processed'    => 'required',
            'total_cube'        => [
                'required',
                new RateMustBeAFloat
            ],
            'receiving_amount'  => [
                'required',
                new RateMustBeAFloat
            ],
            'active'            => 'boolean'
        ]);
    }

    private function sanitizePackagesData()
    {
        return request()->validate([
            'packages.*.id'                 => 'required|exists:packages,id',
            'packages.*.dsg_id'             => 'nullable|exists:dsg,id',
            'packages.*.customer_id'        => 'required|exists:users,id',
            'packages.*.customer_name'      => 'required_with:customer_id',
            'packages.*.client_id'          => 'nullable|exists:clients,id',
            'packages.*.client_name'        => 'nullable',
            'packages.*.shipper_id'         => 'required|exists:shippers,id',
            'packages.*.shipper_name'       => 'required_with:shipper_id',
            'packages.*.bin_id'             => 'required|exists:bins,id',
            'packages.*.bin_name'           => 'required_with:bin_id',
            'packages.*.description'        => 'required',

            'packages.*.date_received'      => 'required',
            'packages.*.date_out'           => 'nullable|date',
            'packages.*.date_processed'     => 'required',

            'packages.*.po_no'              => 'nullable',
            'packages.*.style_no'           => 'nullable',
            'packages.*.length'             => [
                'nullable',
                new RateMustBeAFloat
            ],
            'packages.*.width'              => [
                'nullable',
                new RateMustBeAFloat
            ],
            'packages.*.height'             => [
                'nullable',
                new RateMustBeAFloat
            ],
            'packages.*.cube'               => [
                'required',
                new RateMustBeAFloat
            ],
            'packages.*.handling_type'      => 'required',
            'packages.*.handling_fee'       => [
                'required',
                new RateMustBeAFloat
            ],
            'packages.*.store_at'           => [
                'required',
                Rule::in(['rack', 'floor'])
            ],
            'packages.*.storage_fee'        => [
                'required',
                new RateMustBeAFloat
            ],
            'packages.*.damaged'            => 'nullable|boolean',
            'packages.*.damage_description' => 'required_if:packages.*.damaged,true',
            'packages.*.repaired'           => 'nullable|boolean',
            'packages.*.date_repaired'      => 'required_if:packages.*.repaired,true',
            'packages.*.delivered'          => 'nullable|boolean',
            'packages.*.date_delivered'     => 'required_if:packages.*.delivered,true'
        ]);
    }
}
