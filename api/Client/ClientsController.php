<?php

namespace Api\Client;

use Api\Controller;
use App\Models\User;
use App\Models\Client;
use App\Rules\ValidateZip;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Exceptions\ClientCreationFailed;
use App\Exceptions\UpdatingRecordFailed;
use App\Http\Resources\User\ClientResource;
use App\Http\Resources\User\WithClientResource;

class ClientsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:customer|admin']);
    }

    /**
     * @param Request $request
     */
    public function create(Request $request)
    {
        $user;

        $data = request()->validate([
            'user_id'   => 'nullable|exists:users,id',
            'name'      => 'required',
            'email'     => 'nullable|email|unique:clients',
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
        $client = Client::create($data);

        if (null === $data['user_id']) {
            $user = $request->user();
            $user->clients()->save($client);
        } else {
            $user = User::find($data['user_id']);
            $user->clients()->save($client);
        }

        /* Check If We Dont Have Any Errors , Rollback Account Creation if Any! */
        try {
            if (!$client) {
                throw new ClientCreationFailed;
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400); // Failed Creation
        }

        DB::commit();
        $client = new WithClientResource($client);
        return response()->json(['message' => 'Client Has Been Created!', 'client' => $client], 200);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $client  = Client::find($request->client_id);
        $deleted = $client->delete();

        if (!$deleted) {
            throw new UpdatingRecordFailed;
        }

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
        if ($user = $request->input('customer')) {
            $user = User::find($user);
        } else {
            $user = $request->user();
        }

        $clients = $user->clients;
        return ClientResource::collection($clients); // remove pagination
    }

    /**
     * @param Request $request
     */
    public function massActivate(Request $request)
    {
        $ids     = request()->input('selected');
        $clients = $request->user()->clients();
        $updated = $clients->whereIn('id', $ids)->update(['active' => true]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Clients Activated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function massDeactivate(Request $request)
    {
        $ids     = request()->input('selected');
        $clients = $request->user()->clients();
        $updated = $clients->whereIn('id', $ids)->update(['active' => false]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Clients Deactivated!', 'updated' => $ids]);
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
        $saved          = $client->save();

        if (!$saved) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $client->active], 200);
    }

    /**
     * @param Client $client
     */
    public function update(Client $client, Request $request)
    {
        if (!$client) {
            return response()->json(['message' => 'Cant Find Client With ID of '.$request->id]);
        }

        $user = $request->user();
        $data = $request->validate([
            'name'      => 'required',
            'email'     => [
                'nullable',
                Rule::unique('clients')->ignore($user->id, 'user_id')
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

        $updated = $client->update($data);

        if (!$updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Client Account Updated!']);
    }
}
