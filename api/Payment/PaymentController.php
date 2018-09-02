<?php

namespace Api\Payment;

use Api\Controller;
use App\Models\User;
use App\Models\Payment;
use Illuminate\Http\Request;
use App\Exceptions\UpdatingRecordFailed;
use App\Exceptions\PaymentCreationFailed;
use App\Http\Resources\User\CustomerResource;
use App\Http\Resources\Payment\PaymentResource;

class PaymentController extends Controller
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
        $data    = $this->sanitizeData();
        $payment = Payment::create($data);

        if (!$payment) {
            throw new PaymentCreationFailed;
        }

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
        $payment->load('customer.profile','customer.roles','customer.media');

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
        $payments = Payment::with('customer.profile','customer.roles','customer.media')->get();
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

        $data = $this->sanitizeData();

        $updated = $payment->update($data);

        if (!$updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Payment Details Updated!']);
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
}
