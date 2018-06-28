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
use Illuminate\Support\Facades\DB;
use App\Exceptions\UpdatingRecordFailed;
use App\Exceptions\LogisticCreationFailed;
use App\Http\Resources\User\CustomerResource;
use App\Http\Resources\Logistic\LogisticResource;

class LogisticsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    /**
     * @return mixed
     */
    public function create()
    {
        $data     = $this->sanitizeData();
        $logistic = new Logistic();
        $saved    = $logistic->fill($data)->save();

        if (!$saved) {
            throw new LogisticCreationFailed;
        }

        $this->toggleDelivered($logistic, $data);
        return response()->json(['message' => 'Ticket Created!'], 201);
    }

    /**
     * @param $id
     */
    public function delete(Logistic $logistic)
    {
        // undo on packages the date_delivered and delivered field
        $undelivered = $logistic->packages;

        if ($undelivered && count($undelivered) > 0) {
            $undelivered_packages = Package::whereIn('id', $undelivered);
            $updated              = $undelivered_packages->update([
                'delivered'      => 0,
                'date_delivered' => null,
                'logistic_id'    => null
            ]);

            if (count($undelivered) !== $updated) {
                throw new UpdatingRecordFailed;
            }
        }

        $deleted = $logistic->delete();

        if (!$deleted) {
            throw new UpdatingRecordFailed;
        }

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

        $logistic->load('items');

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
        $logistics = Logistic::with('items')->get();
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
        try {
            if (!$updated) {
                throw new UpdatingRecordFailed;
            }

            $this->toggleDelivered($logistic, $data);
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
            'customer_id'    => 'required|exists:users,id',
            'customer_name'  => 'required_with:customer_id',
            'client_id'      => 'nullable|exists:clients,id',
            'client_name'    => 'required',
            'date_delivered' => 'required|date',
            'start_time'     => 'nullable',
            'end_time'       => 'nullable',
            'prep_time'      => [
                new RateMustBeAFloat
            ],
            'travel_time'    => [
                new RateMustBeAFloat
            ],
            'clean_up_time'  => [
                new RateMustBeAFloat
            ],
            'total_time'     => [
                new RateMustBeAFloat
            ],
            'rate'           => [
                new RateMustBeAFloat
            ],
            'surcharge'      => [
                new RateMustBeAFloat
            ],
            'total_charges'  => [
                new RateMustBeAFloat
            ],
            'notes'          => 'nullable',

            'type'           => [
                'required',
                Rule::in(['delivery_ticket', 'field_transfer'])
            ],

            'do_address_1'   => 'required',
            'do_address_2'   => 'nullable',
            'do_city'        => 'required',
            'do_state'       => 'required',
            'do_zip'         => 'required',

            'pu_address_1'   => 'sometimes|required',
            'pu_address_2'   => 'sometimes|nullable',
            'pu_city'        => 'sometimes|required',
            'pu_state'       => 'sometimes|required',
            'pu_zip'         => 'sometimes|required',

            'packages'       => 'sometimes|required|array'

        ]);
    }

    /**
     * @param Logistic $logistic
     * @param $data
     */
    private function toggleDelivered(Logistic $logistic, $data)
    {
        if (request()->has('packages')) {
            $old_delivered = $logistic->packages()->pluck('id')->toArray();
            $delivered     = $data['packages'];
            $undelivered   = array_diff($old_delivered, $delivered);

            if (count($delivered) > 0) {
                $delivered_packages = Package::whereIn('id', $delivered);
                $updated            = $delivered_packages->update([
                    'delivered'      => 1,
                    'date_delivered' => $data['date_delivered'],
                    'logistic_id'    => $logistic->id
                ]);

                if (count($delivered) !== $updated) {
                    throw new UpdatingRecordFailed;
                }
            }

            if (count($undelivered) > 0) {
                $undelivered_packages = Package::whereIn('id', $undelivered);
                $updated              = $undelivered_packages->update([
                    'delivered'      => 0,
                    'date_delivered' => null,
                    'logistic_id'    => null
                ]);

                if (count($undelivered) !== $updated) {
                    throw new UpdatingRecordFailed;
                }
            }
        }
    }
}
