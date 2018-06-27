<?php

namespace Api\Logistic;

use Api\Controller;
use App\Models\User;
use App\Models\Client;
use App\Models\Package;
use App\Models\Logistic;
use Illuminate\Http\Request;
use App\Rules\RateMustBeAFloat;
use Illuminate\Validation\Rule;
use App\Http\Resources\User\CustomerResource;
use App\Http\Resources\Logistic\LogisticResource;

class LogisticsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    public function create()
    {
        $data     = $this->sanitizeData();
        return $data;
        $logistic = new Logistic();
        $logistic->fill($data)->save();
        return response()->json(['message' => 'Ticket Created!'], 201);
    }

    /**
     * @param $id
     */
    public function delete($id)
    {
        $package = Logistic::find($id);
        $package->delete();
        return response()->json(['message' => 'Logistic Deleted!']);
    }

    /**
     * @param Logistic $logistic
     */
    public function edit(Logistic $logistic)
    {
        if (!$logistic) {
            return response()->json(['message' => 'Cant Find Logistic With ID of '.$request->id]);
        }

        return new LogisticResource($logistic);
    }

    /**
     * @param Client $client
     */
    public function getClientPackages(Client $client)
    {
        if (!$client) {
            return response()->json(['message' => 'Cant Find Client With ID of '.$request->id]);
        }

        return Package::ofClient($client->id)->undelivered()->get();
    }

    public function getInitialData()
    {
        $users             = User::with(['profile', 'clients'])->role('customer')->get();
        $data['customers'] = CustomerResource::collection($users);
        return response()->json(['data' => $data]);
    }

    public function index()
    {
        $logistics = Logistic::all();
        return LogisticResource::collection($logistics);
    }

    /**
     * @param Logistic $logistic
     * @param Request  $request
     */
    public function update(Logistic $logistic, Request $request)
    {
        if (!$logistic) {
            return response()->json(['message' => 'Cant Find Logistic With ID of '.$request->id]);
        }

        $data = $this->sanitizeData();
        DB::beginTransaction();
        $updated = $logistic->update($data);

        //! IMPORTANT TO DO!!! Loop thru packages!
        try {
            if (!$updated) {
                throw new AccountCreationFailed;
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400);
        }

        DB::commit();

        return response()->json(['message' => 'Logistic#:'.$logistic->id.' Updated!']);
    }

    private function sanitizeData()
    {
        return request()->validate([
            'customer_id'   => 'required|exists:users,id',
            'customer_name' => 'required_with:customer_id',
            'client_id'     => 'nullable|exists:clients,id',
            'client_name'   => 'required',

            'start_time'    => 'nullable|integer',
            'end_time'      => 'nullable|integer',
            'prep_time'     => [
                'required',
                new RateMustBeAFloat
            ],
            'travel_time'   => [
                'required',
                new RateMustBeAFloat
            ],
            'clean_up_time' => [
                'required',
                new RateMustBeAFloat
            ],
            'total_time'    => [
                'required',
                new RateMustBeAFloat
            ],
            'rate'          => [
                'required',
                new RateMustBeAFloat
            ],
            'surcharge'     => [
                'required',
                new RateMustBeAFloat
            ],
            'total_charges' => [
                'required',
                new RateMustBeAFloat
            ],
            'notes'         => 'nullable',

            'type'          => [
                'required',
                Rule::in(['delivery_ticket', 'field_transfer'])
            ],

            'do_address_1'  => 'required',
            'do_address_2'  => 'required',
            'do_city'       => 'required',
            'do_state'      => 'required',
            'do_zip'        => 'required',

            'pu_address_1'  => 'sometimes|required',
            'pu_address_2'  => 'sometimes|required',
            'pu_city'       => 'sometimes|required',
            'pu_state'      => 'sometimes|required',
            'pu_zip'        => 'sometimes|required',

            'packages'      => 'sometimes|required|json'

        ]);
    }
}
