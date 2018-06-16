<?php

namespace Api\Dsg;

use Api\Controller;
use App\Models\Dsg;
use App\Rules\ValidateZip;
use Illuminate\Http\Request;
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
        $data = request()->validate([
            'customer_id' => 'required',
            'client_id' => 'required',
            'shipper_id' => 'required',
            'total_pieces' => 'required',
            'total_cube' => 'required',
            'receiving_amount' => 'required',
            'active' => 'boolean',
        ]);
        DB::beginTransaction();
        $dsg = Dsg::create($data);
        $user = $request->user();
        $user->dsg()->save($dsg);

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
        $dsg = Dsg::find($request->dsg_id);
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
            return response()->json(['message' => 'Cant Find Dsg With ID of ' . $request->id]);
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

        $dsg = Dsg::find($request->dsg_id);
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
            return response()->json(['message' => 'Cant Find Dsg With ID of ' . $request->id]);
        }

        $user = $request->user();
        $data = $request->validate([
            'name' => 'required',
            'email' => [
                'required',
                Rule::unique('dsg')->ignore($user->id, 'user_id')
            ],
            'phone' => 'required',
            'address_1' => 'required',
            'address_2' => 'required',
            'city' => 'required',
            'state' => 'required',
            'zip' => [
                'required',
                new ValidateZip
            ],
            'active' => 'boolean'
        ]);

        $dsg->update($data);

        return response()->json(['message' => 'Dsg Account Updated!']);
    }
}
