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
        $logistic = new Logistic();
        $logistic->fill($data)->save();
        $this->markAsDelivered($data, $logistic->id);
        return response()->json(['message' => 'Ticket Created!'], 201);
    }

    /**
     * @param $id
     */
    public function delete($id)
    {
        $package = Logistic::find($id);
        // undo on packages the date_delivered and delivered field
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

    /**
     * @param $data
     */
    private function markAsDelivered($data, $id)
    {
        if (count($data['packages']) > 0) {
            $packages = Package::whereIn('id', $data['packages']);
            $packages->update(['delivered' => 1, 'date_delivered' => $data['date_delivered'], 'logistic_id' => $id]);
        }
    }

    private function sanitizeData()
    {
        return request()->validate([
            'customer_id'    => 'required|exists:users,id',
            'customer_name'  => 'required_with:customer_id',
            'client_id'      => 'nullable|exists:clients,id',
            'client_name'    => 'required',
            'date_delivered' => 'required|date',
            'start_time'     => 'required|integer',
            'end_time'       => 'required|integer|gte:start_time',
            'prep_time'      => [
                'required',
                new RateMustBeAFloat
            ],
            'travel_time'    => [
                'required',
                new RateMustBeAFloat
            ],
            'clean_up_time'  => [
                'required',
                new RateMustBeAFloat
            ],
            'total_time'     => [
                'required',
                new RateMustBeAFloat
            ],
            'rate'           => [
                'required',
                new RateMustBeAFloat
            ],
            'surcharge'      => [
                'required',
                new RateMustBeAFloat
            ],
            'total_charges'  => [
                'required',
                new RateMustBeAFloat
            ],
            'notes'          => 'nullable',

            'type'           => [
                'required',
                Rule::in(['delivery_ticket', 'field_transfer'])
            ],

            'do_address_1'   => 'required',
            'do_address_2'   => 'required',
            'do_city'        => 'required',
            'do_state'       => 'required',
            'do_zip'         => 'required',

            'pu_address_1'   => 'sometimes|required',
            'pu_address_2'   => 'sometimes|required',
            'pu_city'        => 'sometimes|required',
            'pu_state'       => 'sometimes|required',
            'pu_zip'         => 'sometimes|required',

            'packages'       => 'sometimes|required|array'

        ]);
    }

    /**
     * @param $data
     */
    private function toggleDelivered($data, $logistic)
    {
// compare the new data packages with current logistic packages

// chances that client has all the item delivered already
        // to track this we need to add logistic_id on packages to track down specific logistic
        $delivered = $logistic->packages()->get();
        $packages  = Package::whereIn('id', $data['packages']);
    }
}
