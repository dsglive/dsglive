<?php

namespace Api\Misc;

use App\Misc;
use Api\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Rules\RateMustBeAFloat;
use Illuminate\Support\Facades\DB;
use App\Exceptions\MiscCreationFailed;
use App\Exceptions\UpdatingRecordFailed;
use App\Http\Resources\Misc\MiscResource;
use App\Http\Resources\User\CustomerResource;

class MiscellaneousController extends Controller
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
        $data = $this->sanitizeData();

        DB::beginTransaction();
        $misc = Misc::create($data);
        try {
            if (!$misc) {
                throw new MiscCreationFailed; //! create Exception
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400);
        }

        DB::commit();
        return response()->json(['message' => 'Miscellaneous Fee Has Been Created!'], 200);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $misc = Misc::find($request->misc_id);

        $deleted = $misc->delete();

        if (!$deleted) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $deleted], 200);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function edit(Misc $misc)
    {
        if (!$misc) {
            return response()->json(['message' => 'Cant Find Miscellaneous With ID of '.$request->id]);
        }

        return new MiscResource($misc); //! create this MiscResource
    }

    public function getCustomers()
    {
        $users     = User::with(['profile', 'clients'])->role('customer')->exceptUnknownCustomer()->get();
        $unknown   = User::with(['profile', 'clients'])->unknownCustomer()->get();
        $customers = $unknown->concat($users);
        return CustomerResource::collection($customers);
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        $misc = Misc::all();
        return MiscResource::collection($misc); // remove pagination
    }

    /**
     * @param Misc $misc
     */
    public function update(Misc $misc, Request $request)
    {
        if (!$misc) {
            return response()->json(['message' => 'Cant Find Miscellaneous With ID of '.$request->id]);
        }

        $data = $this->sanitizeData();
        DB::beginTransaction();
        $updated = $misc->update($data);
        try {
            if (!$updated) {
                throw new UpdatingRecordFailed;
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400);
        }

        DB::commit();

        return response()->json(['message' => 'Miscellaneous Fee Updated!']);
    }

    private function sanitizeData()
    {
        return request()->validate([
            'customer_id'   => 'required',
            'customer_name' => 'required_with:customer_id',
            'client_id'     => 'nullable',
            'client_name'   => 'nullable',
            'invoice_date'  => 'required',
            'amount'        => [
                'required',
                new RateMustBeAFloat
            ],
            'notes'         => 'nullable'
        ]);
    }
}
