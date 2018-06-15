<?php

namespace Api\Bin;

use Api\Controller;
use App\Models\Bin;
use Illuminate\Http\Request;
use App\Http\Resources\Bin\BinResource;

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
        return response()->json(['message' => 'Bin Has Been Created!'], 200);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $bin     = Bin::find($request->bin_id);
        $deleted = $bin->delete();
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
        $ids = request()->input('selected');
        Bin::whereIn('id', $ids)->update(['active' => true]);
        return response()->json(['message' => 'Selected Bins Activated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function massDeactivate(Request $request)
    {
        $ids = request()->input('selected');
        Bin::whereIn('id', $ids)->update(['active' => false]);
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
        $bin->save();
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

        $bin->update($data);

        return response()->json(['message' => 'Bin Account Updated!']);
    }
}
