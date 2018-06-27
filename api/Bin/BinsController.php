<?php

namespace Api\Bin;

use Api\Controller;
use App\Models\Bin;
use Illuminate\Http\Request;
use App\Exceptions\BinCreationFailed;
use App\Http\Resources\Bin\BinResource;
use App\Exceptions\UpdatingRecordFailed;

class BinsController extends Controller
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
            'code'   => 'required|alpha_num',
            'active' => 'boolean'

        ]);
        $bin = Bin::create($data);

        if (!$bin) {
            throw new BinCreationFailed;
        }

        return response()->json(['message' => 'Bin Has Been Created!'], 200);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $bin     = Bin::find($request->bin_id);
        $deleted = $bin->delete();

        if (!$deleted) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $deleted], 200);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function edit(Bin $bin)
    {
        if (!$bin) {
            return response()->json(['message' => 'Cant Find Bin With ID of '.$request->id]);
        }

        return new BinResource($bin);
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        $bins = Bin::all();
        return BinResource::collection($bins); // remove pagination
    }

    /**
     * @param Request $request
     */
    public function massActivate(Request $request)
    {
        $ids     = request()->input('selected');
        $updated = Bin::whereIn('id', $ids)->update(['active' => true]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Bins Activated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function massDeactivate(Request $request)
    {
        $ids     = request()->input('selected');
        $updated = Bin::whereIn('id', $ids)->update(['active' => false]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Bins Deactivated!', 'updated' => $ids]);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function toggleStatus(Request $request)
    {
        $bin         = Bin::find($request->bin_id);
        $bin->active = $request->toggle;
        $saved       = $bin->save();

        if (!$saved) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $bin->active], 200);
    }

    /**
     * @param Bin $bin
     */
    public function update(Bin $bin, Request $request)
    {
        if (!$bin) {
            return response()->json(['message' => 'Cant Find Bin With ID of '.$request->id]);
        }

        $data = request()->validate([
            'code'   => 'required|alpha_num',
            'active' => 'boolean'

        ]);

        $updated = $bin->update($data);

        if (!$updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Bin Account Updated!']);
    }
}
