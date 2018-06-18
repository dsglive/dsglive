<?php

namespace Api\Dsg;

use Api\Controller;
use App\Models\Dsg;
use App\Rules\ValidateZip;
use Illuminate\Http\Request;
use App\Rules\RateMustBeAFloat;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Dsg\DsgResource;

class DsgController extends Controller
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
        //$latest_dsg_number = Dsg::orderBy('id','desc')->get()->first()->id + 1
        $dsg_data = request()->validate([
            'customer_id'       => 'required',
            'customer_name'     => 'required_with:customer_id',
            'client_id'         => 'required',
            'client_name'       => 'required_with:client_id',
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
            'total_pieces'      => 'required|numeric|min:0',
            'total_cube'        => [
                'required|numeric|min:0',
                new RateMustBeAFloat
            ],
            'receiving_amount'  => [
                'required|numeric|min:0',
                new RateMustBeAFloat
            ],
            'active'            => 'boolean'
        ]);
        $packages_data = request()->validate([
            'package.*.dsg_id'             => 'required|existst:dsg,id',
            'package.*.customer_id'        => 'required|existst:users,id',
            'package.*.customer_name'      => 'required_with:customer_id',
            'package.*.client_id'          => 'required|existst:users,id',
            'package.*.client_name'        => 'required_with:client_id',
            'package.*.shipper_id'         => 'required|existst:shippers,id',
            'package.*.shipper_name'       => 'required_with:shipper_id',
            'package.*.received_by'        => 'required|existst:users,id',
            'package.*.received_by_name'   => 'required_with:received_by',
            'package.*.written_by'         => 'required|existst:users,id',
            'package.*.written_by_name'    => 'required_with:written_by',
            'package.*.inspected_by'       => 'required|existst:users,id',
            'package.*.inspected_by_name'  => 'required_with:inspected_by',
            'package.*.located_by'         => 'required|existst:users,id',
            'package.*.located_by_name'    => 'required_with:located_by',
            'package.*.bin_id'             => 'required|existst:bins,id',
            'package.*.bin_name'           => 'required_with:bin_id',
            'package.*.description'        => 'required',

            'package.*.date_received'      => 'required',
            'package.*.date_out'           => 'required',
            'package.*.date_processed'     => 'required',

            'package.*.po_no'              => 'required',
            'package.*.style_no'           => 'required',
            'package.*.length'             => [
                'required|numeric|min:0',
                new RateMustBeAFloat
            ],
            'package.*.width'              => [
                'required|numeric|min:0',
                new RateMustBeAFloat
            ],
            'package.*.height'             => [
                'required|numeric|min:0',
                new RateMustBeAFloat
            ],
            'package.*.cube'               => [
                'required|numeric|min:0',
                new RateMustBeAFloat
            ],
            'package.*.handling_type'      => 'required',
            'package.*.handling_fee'       => [
                'required|numeric|min:0',
                new RateMustBeAFloat
            ],
            'package.*.store_at'           => [
                'required',
                Rule::in(['rack', 'floor'])
            ],
            'package.*.storage_fee'        => [
                'required|numeric|min:0',
                new RateMustBeAFloat
            ],
            'package.*.damaged'            => 'boolean',
            'package.*.damage_description' => 'required_with:package.*.damaged',
            'package.*.repaired'           => 'boolean',
            'package.*.date_repaired'      => 'required_with:package.*.damaged',
            'package.*.delivered'          => 'boolean',
            'package.*.date_delivered'     => 'required_with:package.*.delivered'
        ]);
        DB::beginTransaction();
        $dsg  = Dsg::create($dsg_data);

        /* Check If We Dont Have Any Errors , Rollback Account Creation if Any! */
        try {
            if (!$dsg) {
                throw new AccountCreationFailed;
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400); // Failed Creation
        }

        DB::commit();
        return response()->json(['message' => 'Dsg Has Been Created!'], 200);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $dsg     = Dsg::find($request->dsg_id);
        $deleted = $dsg->delete();
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

        return new DsgResource($dsg);
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
        $ids = request()->input('selected');
        Dsg::whereIn('id', $ids)->update(['active' => true]);
        return response()->json(['message' => 'Selected Dsg Activated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function massDeactivate(Request $request)
    {
        $ids = request()->input('selected');
        Dsg::whereIn('id', $ids)->update(['active' => false]);
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
        $dsg->save();
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

        $user = $request->user();
        $data = $request->validate([
            'name'      => 'required',
            'email'     => [
                'required',
                Rule::unique('dsg')->ignore($user->id, 'user_id')
            ],
            'phone'     => 'required',
            'address_1' => 'required',
            'address_2' => 'required',
            'city'      => 'required',
            'state'     => 'required',
            'zip'       => [
                'required',
                new ValidateZip
            ],
            'active'    => 'boolean'
        ]);

        $dsg->update($data);

        return response()->json(['message' => 'Dsg Account Updated!']);
    }
}
