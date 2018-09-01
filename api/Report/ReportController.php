<?php

namespace Api\Report;

use Api\Controller;
use App\Models\Dsg;
use App\Models\User;
use App\Models\Invoice;
use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Resources\Dsg\DsgResource;
use App\Http\Resources\Dsg\PackageResource;

class ReportController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin'], ['except' =>
            ['reportUnknownClient', 'reportUnknownCustomer', 'reportUnknownShipper',
                'reportAllRepaired', 'reportAllUndelivered', 'reportAllDamaged'
            ]
        ]);
    }

    /**
     * @param Invoice $invoice
     * @return mixed
     */
    private function getUsers(Invoice $invoice)
    {
        $user       = User::with('profile')->find($invoice->customer_id);
        $first_name = optional($user->profile)->first_name;
        $last_name  = optional($user->profile)->last_name;
        $name       = optional($user->profile)->company_name;

        if (!$name) {
            if ($first_name) {
                $name = $first_name;
            }

            if ($last_name) {
                $name = $first_name.' '.$last_name;
            }
        }

        $customer = [
            'customer_id'   => $invoice->customer_id,
            'customer_name' => $name,
            'receiving_fee' => $invoice->receiving_fee ?? 0,
            'delivery_fee'  => $invoice->delivery_fee ?? 0,
            'storage_fee'   => $invoice->storage_fee ?? 0,
            'misc_fee'      => $invoice->misc_fee ?? 0,
            'clients'       => collect([])
        ];
        $customer['total']   = $customer['receiving_fee'] + $customer['delivery_fee'] + $customer['storage_fee'] + $customer['misc_fee'];
        return $customer;
    }

    /**
     * @param Request $request
     */
    public function reportAllDamaged(Request $request)
    {
        $user = $request->user();

        if ($user->hasRole('admin') || $user->hasRole('warehouse')) {
            $packages = Package::with('media')->damaged()->active()->get();
        } else {
            $packages = Package::with('media')->where('customer_id', $user->id)->damaged()->active()->get();
        }

        return PackageResource::collection($packages);
    }

    /**
     * @param Request $request
     */
    public function reportAllRepaired(Request $request)
    {
        $user = $request->user();

        if ($user->hasRole('admin') || $user->hasRole('warehouse')) {
            $packages = Package::with('media')->repaired()->active()->get();
        } else {
            $packages = Package::with('media')->where('customer_id', $user->id)->repaired()->active()->get();
        }

        return PackageResource::collection($packages);
    }

    /**
     * @param Request $request
     */
    public function reportAllUndelivered(Request $request)
    {
        $user = $request->user();

        if ($user->hasRole('admin') || $user->hasRole('warehouse')) {
            $packages = Package::with('media')->undelivered()->active()->get();
        } else {
            $packages = Package::with('media')->where('customer_id', $user->id)->undelivered()->active()->get();
        }

        return PackageResource::collection($packages);
    }

    /**
     * @param Request $request
     */
    public function reportAllUnknown(Request $request)
    {
        $dsg = Dsg::orUnknownCustomer()->orUnknownClient()->orUnknownShipper()->get();
        return DsgResource::collection($dsg);
    }

    /**
     * @param Request $request
     */
    public function reportByBin(Request $request)
    {
        $packages = Package::where('bin_name', $request->input('bin_name'))->active()->get();
        return PackageResource::collection($packages);
    }

    /**
     * @param Request $request
     */
    public function reportByClient(Request $request)
    {
        $packages = Package::where('client_id', $request->input('client_id'))
            ->where('customer_id', $request->input('customer_id'))->active()->undelivered()->get();
        return PackageResource::collection($packages);
    }

    /**
     * @param Request $request
     */
    public function reportByCustomer(Request $request)
    {
        $packages = Package::where('customer_id', request()->input('customer_id'))->active()->undelivered()->get();
        return PackageResource::collection($packages);
    }

    public function searchCustomerReport(Request $request)
    {
        $packages = Package::where('customer_id', request()->input('customer_id'))
        ->when($request->from && $request->to, function($query) use ($request){
            return $query->whereBetween('date_received', [$request->from, $request->to]);
        })
        ->when($request->searchBy['value'] === 'style_no', function($query) use ($request){
            return $query->where('style_no', 'like', '%' . $request->search . '%');
        })
        ->when($request->searchBy['value'] === 'description', function($query) use ($request){
            return $query->where('description', 'like', '%' . $request->search . '%');
        })
        ->when($request->searchBy['value'] === 'dsg_id', function($query) use ($request){
            return $query->where('dsg_id', $request->search);
        })
        ->when($request->searchBy['value'] === 'shipper_name', function($query) use ($request){
            return $query->where('shipper_name', 'like', '%' . $request->search . '%');
        })
        ->active()
        ->undelivered()
        ->orderBy($request->sortBy['value'],$request->orderBy)
        ->get();
        return PackageResource::collection($packages);

    }

    /**
     * @param Request $request
     */
    public function reportUnknownClient(Request $request)
    {
        $user = $request->user();

        if ($user->hasRole('admin') || $user->hasRole('warehouse')) {
            $dsg = Dsg::unknownClient()->get();
        } else {
            $dsg = Dsg::where('customer_id', $user->id)->unknownClient()->get();
        }

        return DsgResource::collection($dsg);
    }

    /**
     * @param Request $request
     */
    public function reportUnknownCustomer(Request $request)
    {
        $dsg = Dsg::unknownCustomer()->get();

        return DsgResource::collection($dsg);
    }

    /**
     * @param Request $request
     */
    public function reportUnknownShipper(Request $request)
    {
        $user = $request->user();

        if ($user->hasRole('admin') || $user->hasRole('warehouse')) {
            $dsg = Dsg::unknownShipper()->get();
        } else {
            $dsg = Dsg::where('customer_id', $user->id)->unknownShipper()->get();
        }

        return DsgResource::collection($dsg);
    }

    /**
     * @return mixed
     */
    public function totalAllCustomerInvoice(Request $request)
    {
        $invoices  = Invoice::with('customer.profile')->whereBetween('date_started', [$request->date_started, $request->date_ended])->orderBy('created_at', 'DESC')->get();
        $customers = collect([]);

        foreach ($invoices as $invoice) {
            //! Add A Way to Include Total Current Balance For Each Customer
            $customers[] = $this->getUsers($invoice);
        }

        $unique_customers = collect($customers->unique('customer_id')->pluck('customer_id'));

        $merge_customers = [];

        foreach ($unique_customers as $id) {
            $merge_customers[$id] = $customers->whereIn('customer_id', $id)->values();
        }

        $aggregated_customers = [];

        foreach ($unique_customers as $id) {
            $name          = '';
            $receiving_fee = 0;
            $delivery_fee  = 0;
            $storage_fee   = 0;
            $misc_fee      = 0;

            foreach ($merge_customers[$id] as $key => $customer) {
                $name = $customer['customer_name'];
                $receiving_fee += $customer['receiving_fee'];
                $delivery_fee += $customer['delivery_fee'];
                $storage_fee += $customer['storage_fee'];
                $misc_fee += $customer['misc_fee'];

                $aggregated_customers[$customer['customer_id']] = [
                    'customer_id'   => $customer['customer_id'],
                    'customer_name' => $customer['customer_name'],
                    'receiving_fee' => $receiving_fee,
                    'delivery_fee'  => $delivery_fee,
                    'storage_fee'   => $storage_fee,
                    'misc_fee'      => $misc_fee,
                    'total'         => $receiving_fee + $delivery_fee + $storage_fee + $misc_fee,
                    'balance'       => $receiving_fee + $delivery_fee + $storage_fee + $misc_fee
                ];
            }
        }

        $customers = array_values($aggregated_customers);
        return response()->json(['customers' => $customers] , 200);
    }

    /**
     * @param Package $package
     */
    public function viewPackage(Package $package)
    {
        return new PackageResource($package);
    }
}
