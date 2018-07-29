<?php

namespace Api\Shipper;

use Api\Controller;
use App\Models\Shipper;
use App\Rules\ValidateZip;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Exceptions\UpdatingRecordFailed;
use App\Exceptions\ShipperCreationfailed;
use App\Http\Resources\User\ShipperResource;
use App\Http\Resources\User\WithShipperResource;

class ShippersController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    /**
     * @param Request $request
     */
    public function create(Request $request)
    {
        $data = request()->validate([
            'name'      => 'required',
            'email'     => 'nullable|email|unique:shippers',
            'phone'     => 'nullable',
            'address_1' => 'nullable',
            'address_2' => 'nullable',
            'city'      => 'nullable',
            'state'     => 'nullable',
            'zip'       => [
                'nullable',
                new ValidateZip
            ],
            'active'    => 'boolean'

        ]);
        DB::beginTransaction();
        $shipper = Shipper::create($data);

        /* Check If We Dont Have Any Errors , Rollback Account Creation if Any! */
        try {
            if (!$shipper) {
                throw new ShipperCreationfailed;
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400); // Failed Creation
        }

        DB::commit();

        $shipper = new WithShipperResource($shipper);

        return response()->json(['message' => 'Shipper Has Been Created!', 'shipper' => $shipper], 200);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $shipper = Shipper::find($request->shipper_id);
        $deleted = $shipper->delete();

        if (!$deleted) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $deleted], 200);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function edit(Shipper $shipper)
    {
        if (!$shipper) {
            return response()->json(['message' => 'Cant Find Shipper With ID of '.$request->id]);
        }

        return new ShipperResource($shipper);
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        $shippers = Shipper::all();
        return ShipperResource::collection($shippers); // remove pagination
    }

    /**
     * @param Request $request
     */
    public function massActivate(Request $request)
    {
        $ids     = request()->input('selected');
        $updated = Shipper::whereIn('id', $ids)->update(['active' => true]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Shippers Activated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function massDeactivate(Request $request)
    {
        $ids     = request()->input('selected');
        $updated = Shipper::whereIn('id', $ids)->update(['active' => false]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Shippers Deactivated!', 'updated' => $ids]);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function toggleStatus(Request $request)
    {
        $shipper         = Shipper::find($request->shipper_id);
        $shipper->active = $request->toggle;
        $saved           = $shipper->save();

        if (!$saved) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $shipper->active], 200);
    }

    /**
     * @param User $user
     */
    public function update(Shipper $shipper, Request $request)
    {
        if (!$shipper) {
            return response()->json(['message' => 'Cant Find Shipper With ID of '.$request->id]);
        }

        $data = $request->validate([
            'name'      => 'required',
            'email'     => [
                'nullable',
                Rule::unique('shippers')->ignore($shipper->id, 'id')
            ],
            'phone'     => 'nullable',
            'address_1' => 'nullable',
            'address_2' => 'nullable',
            'city'      => 'nullable',
            'state'     => 'nullable',
            'zip'       => [
                'nullable',
                new ValidateZip
            ],
            'active'    => 'boolean'
        ]);

        $updated = $shipper->update($data);

        if (!$updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Shipper Account Updated!']);
    }
}
