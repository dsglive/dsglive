<?php

namespace Api\User;

use Api\Controller;
use App\Models\Role;
use App\Models\User;
use App\Models\Profile;
use App\Rules\ValidateZip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Exceptions\UsernameNotFound;
use App\Exceptions\UserTokenNotFound;
use App\Http\Resources\User\UserResource;
use App\Http\Resources\User\AccountResource;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin'], ['except' => ['me']]);
    }

    /**
     * @param Request $request
     */
    public function create(Request $request)
    {
        request()->validate([
            'username'              => 'required|unique:users',
            'email'                 => 'required|email|unique:profiles',
            'password'              => 'required|min:6|confirmed',
            'password_confirmation' => 'required',
            'roles'                 => [
                'sometimes',
                'required',
                'exists:roles,name'
            ],
            'company_name'          => 'required',
            'active'                => 'boolean',
            'first_name'            => 'required',
            'last_name'             => 'required',
            'phone'                 => 'required',
            'address_1'             => 'required',
            'address_2'             => 'required',
            'city'                  => 'required',
            'state'                 => 'required',
            'zip'                   => [
                'required',
                new ValidateZip
            ]
        ]);
        DB::beginTransaction();
        $user = User::forceCreate([
            'username' => request('username'),
            'password' => request('password'),
            'active'   => request('active')
        ]);

        /* create an empty profile */
        $profile               = new Profile();
        $profile->email        = request('email');
        $profile->first_name   = request('first_name');
        $profile->last_name    = request('last_name');
        $profile->phone        = request('phone');
        $profile->address_1    = request('address_1');
        $profile->address_2    = request('address_2');
        $profile->city         = request('city');
        $profile->state        = request('state');
        $profile->zip          = request('zip');
        $profile->company_name = request('company_name');
        $profile->notes        = request('notes');

        $user->profile()->save($profile);
        $roles = Role::all()->pluck('name');
        $role  = request('roles');

        foreach ($role as $key => $value) {
            if ($roles->contains($value)) {
                /* Set Role */
                $user->assignRole($value);
            }
        }

        /* Check If We Dont Have Any Errors , Rollback Account Creation if Any! */
        try {
            if (!$user && !$profile) {
                throw new AccountCreationFailed;
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400); // Failed Creation
        }

        DB::commit();
    }

    public function delete(Request $request)
    {
        if (1 === $request->user_id) {
            return response()->json(['message' => 'You Cannot Delete Super Admin!'], 400);
        }

        $user = User::find($request->user_id);
        $deleted = $user->delete();
        return response()->json(['status' => $deleted], 200);
    }

    /**
     * @param $username
     */
    public function findByUsername($username)
    {
        $user = User::findByUsername($username);

        if (!$user) {
            throw new UsernameNotFound;
        }

        return new AccountResource($user->load('profile'));
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        return UserResource::collection(User::with(['profile', 'media', 'roles'])->get()); // remove pagination
    }

    /**
     * @param Request $request
     */
    public function massActivate(Request $request)
    {
        $ids   = $this->selectExceptSuperAdmin();
        $users = User::whereIn('id', $ids)->update(['active' => true]);
        return response()->json(['message' => 'Selected Users Activated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function massDeactivate(Request $request)
    {
        $ids   = $this->selectExceptSuperAdmin();
        $users = User::whereIn('id', $ids)->update(['active' => false]);
        return response()->json(['message' => 'Selected Users Deactivated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function me(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            throw new UserTokenNotFound;
        }

        return new AccountResource($user->load('profile'));
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function toggleStatus(Request $request)
    {
        if (1 === $request->user_id) {
            return response()->json(['message' => 'You Cannot Modify Super Admin!'], 400);
        }

        $user         = User::find($request->user_id);
        $user->active = $request->toggle;
        $user->save();
        return response()->json(['status' => $user->active], 200);
    }

    /**
     * @return mixed
     */
    private function selectExceptSuperAdmin()
    {
        $ids = request()->input('selected');

// remove the superadmin on being toggle
        if (($key = array_search('1', $ids)) !== false) {
            unset($ids[$key]);
        }

        return $ids;
    }
}
