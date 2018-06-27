<?php

namespace Api\Rate;

use Api\Controller;
use App\Models\Rate;
use Illuminate\Http\Request;
use App\Rules\RateMustBeAFloat;
use Illuminate\Validation\Rule;
use App\Exceptions\RateCreationFailed;
use App\Exceptions\UpdatingRecordFailed;
use App\Http\Resources\Rate\RateResource;

class RatesController extends Controller
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
            'name'   => 'required',
            'amount' => [
                'required',
                'numeric',
                new RateMustBeAFloat
            ],
            'type'   =>
            [
                'required',
                Rule::in(['handling', 'storage'])
            ],
            'active' => 'boolean'
        ]);
        $rate = Rate::create($data);

        if (!$rate) {
            throw new RateCreationFailed;
        }

        return response()->json(['message' => 'Rate Has Been Created!'], 200);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $rate    = Rate::find($request->rate_id);
        $deleted = $rate->delete();

        if (!$deleted) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $deleted], 200);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function edit(Rate $rate)
    {
        if (!$rate) {
            return response()->json(['message' => 'Cant Find Rate With ID of '.$request->id]);
        }

        return new RateResource($rate);
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        $rates = Rate::all();
        return RateResource::collection($rates); // remove pagination
    }

    /**
     * @param Request $request
     */
    public function massActivate(Request $request)
    {
        $ids     = request()->input('selected');
        $updated = Rate::whereIn('id', $ids)->update(['active' => true]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Rates Activated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function massDeactivate(Request $request)
    {
        $ids     = request()->input('selected');
        $updated = Rate::whereIn('id', $ids)->update(['active' => false]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Rates Deactivated!', 'updated' => $ids]);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function toggleStatus(Request $request)
    {
        $rate         = Rate::find($request->rate_id);
        $rate->active = $request->toggle;
        $saved        = $rate->save();

        if (!$saved) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $rate->active], 200);
    }

    /**
     * @param User $user
     */
    public function update(Rate $rate, Request $request)
    {
        if (!$rate) {
            return response()->json(['message' => 'Cant Find Rate With ID of '.$request->id]);
        }

        $data = request()->validate([
            'name'   => 'required',
            'amount' => [
                'required',
                'numeric',
                new RateMustBeAFloat
            ],
            'type'   =>
            [
                'required',
                Rule::in(['handling', 'storage'])
            ],
            'active' => 'boolean'
        ]);

        $updated = $rate->update($data);

        if (!$updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Rate Account Updated!']);
    }
}
