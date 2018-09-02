<?php

namespace Api\Payment;

use Api\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;
use App\Exceptions\PaymentCreationFailed;
use App\Http\Resources\Payment\PaymentResource;
use App\Exceptions\UpdatingRecordFailed;

class PaymentController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin|warehouse|customer']);
    }
    private function sanitizeData()
    {
        return request()->validate([
            'user_id'         => 'required|exists:users,id',
            'amount'          => 'required',
            'transaction_id'  => 'nullable', //! default should be invoice ID
            'type'            => 'nullable',
            'date_paid'       => 'nullable|date',
            'payment_details' => 'nullable' //! only available for api payments

        ]);

    }

    /**
     * @param Request $request
     */
    public function create(Request $request)
    {
        $data =  $this->sanitizeData();
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
        $payment     = Payment::find($request->payment_id);
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

        return new PaymentResource($payment);
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        $payments = Payment::with('customer')->get();
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

        return response()->json(['message' => 'Payment Account Updated!']);
    }
}
