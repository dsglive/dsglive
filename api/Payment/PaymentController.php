<?php

namespace Api\Payment;

use Api\Controller;
use App\Models\User;
use App\Models\Payment;
use App\Events\MoneyAdded;
use Illuminate\Http\Request;
use App\Events\MoneySubtracted;
use App\Exceptions\UpdatingRecordFailed;
use App\Exceptions\PaymentCreationFailed;
use App\Http\Resources\User\CustomerResource;
use App\Http\Resources\Payment\PaymentResource;

class PaymentController extends Controller
{
    //! ADD EVENT TO LISTEN , THEN WE UPDATE THE BALANCE OF THE CUSTOMER
    public function __construct()
    {
        $this->middleware(['role:admin']);
    }

    /**
     * @param Request $request
     */
    public function create(Request $request)
    {
        $data    = $this->sanitizeData();
        $payment = Payment::create($data);

        if (!$payment) {
            throw new PaymentCreationFailed;
        }

        $this->subtractBalance($data['user_id'], $data['amount']);

        return response()->json(['message' => 'Payment Has Been Created!'], 200);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $payment = Payment::find($request->payment_id);
        $deleted = $payment->delete();

        if (!$deleted) {
            throw new UpdatingRecordFailed;
        }

        $this->addBalance($payment->user_id, $payment->amount);

        return response()->json(['status' => $deleted], 200);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function edit(Payment $payment)
    {
        if (!$payment) {
            return response()->json(['message' => 'Cant Find Payment With ID of '.$request->id]);
        }

        $payment->load('customer.profile', 'customer.roles', 'customer.media');

        return new PaymentResource($payment);
    }

    public function getCustomers()
    {
        $users     = User::with(['profile'])->role('customer')->exceptUnknownCustomer()->get();
        $unknown   = User::with(['profile'])->unknownCustomer()->get();
        $customers = $unknown->concat($users);
        return CustomerResource::collection($customers);
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        $payments = Payment::with('customer.profile', 'customer.roles', 'customer.media')->get();
        return PaymentResource::collection($payments); // remove pagination
    }

    /**
     * @param Payment $payment
     */
    public function update(Payment $payment, Request $request)
    {
        if (!$payment) {
            return response()->json(['message' => 'Cant Find Payment With ID of '.$request->id]);
        }

        $user_id    = $payment->user_id;
        $old_amount = $payment->amount;

        $data = $this->sanitizeData();

        $new_amount = $data['amount'];

        $updated = $payment->update($data);

        if (!$updated) {
            throw new UpdatingRecordFailed;
        }

        $difference = abs($new_amount - $old_amount);

        if ($new_amount > $old_amount) {
            $this->subtractBalance($user_id, $difference);
        } elseif ($old_amount > $new_amount) {
            $this->addBalance($user_id, $difference);
        }

        return response()->json(['message' => 'Payment Details Updated!']);
    }

    /**
     * @param $userID
     * @param $amount
     */
    private function addBalance($userID, $amount)
    {
        event(new MoneyAdded($userID, $amount));
    }

    private function sanitizeData()
    {
        return request()->validate([
            'user_id'         => 'required|exists:users,id',
            'amount'          => 'required',
            'transaction_id'  => 'nullable', //! default should be invoice ID
            'type'            => 'nullable',
            'date_paid'       => 'nullable|date',
            'payment_details' => 'nullable', //! only available for api payments
            'notes'           => 'nullable'
        ]);
    }

    /**
     * @param $data
     */
    private function subtractBalance($userID, $amount)
    {
        event(new MoneySubtracted($userID, $amount));
    }
}
