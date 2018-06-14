<?php

namespace Api\Client;

use Api\Controller;
use App\Models\Client;
use App\Rules\ValidateZip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\User\ClientResource;

class ClientsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:customer'], ['except' => ['me']]);
    }

    /**
     * @param Request $request
     */
    public function create(Request $request)
    {
        $data = request()->validate([
            'name'      => 'required',
            'email'     => 'required|email|unique:clients',
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
        DB::beginTransaction();
        $client = Client::create($data);
        $user   = $request->user();
        $user->client()->save($client);

        /* Check If We Dont Have Any Errors , Rollback Account Creation if Any! */
        try {
            if (!$client) {
                throw new AccountCreationFailed;
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400); // Failed Creation
        }

        DB::commit();
        return response()->json(['message' => 'Client Has Been Created!'], 400);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $client  = Client::find($request->client_id);
        $deleted = $client->delete();
        return response()->json(['status' => $deleted], 200);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function edit(Client $client)
    {
        if (!$client) {
            return response()->json(['message' => 'Cant Find Client With ID of '.$request->id]);
        }

        return new ClientResource($client);
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        $user    = $request->user();
        $clients = $user->clients;
        return ClientResource::collection($clients); // remove pagination
    }

    /**
     * @param Request $request
     */
    public function massActivate(Request $request)
    {
        $clients = $request->user()->clients();
        $clients->whereIn('id', $ids)->update(['active' => true]);
        return response()->json(['message' => 'Selected Clients Activated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function massDeactivate(Request $request)
    {
        $clients = $request->user()->clients();
        $clients = $clients->whereIn('id', $ids)->update(['active' => false]);
        return response()->json(['message' => 'Selected Users Deactivated!', 'updated' => $ids]);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function toggleStatus(Request $request)
    {
        $user = $request->user();

        $client         = Client::where('user_id', $user->id)->find($request->client_id);
        $client->active = $request->toggle;
        $client->save();
        return response()->json(['status' => $client->active], 200);
    }

    /**
     * @param User $user
     */
    public function update(Client $client, Request $request)
    {
        if (!$client) {
            return response()->json(['message' => 'Cant Find Client With ID of '.$request->id]);
        }

        $data = $request->validate([
            'name'      => 'required',
            'email'     => 'required|email|unique:clients',
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

        $client->update($data);

        return response()->json(['message' => 'Client Account Updated!']);
    }
}
