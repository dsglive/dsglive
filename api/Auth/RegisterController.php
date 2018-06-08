<?php

namespace Api\Auth;

use Api\Controller;
use App\Models\Role;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Http\Request;
use Laravel\Passport\Client;
use App\Traits\IssueTokenTrait;
use Illuminate\Support\Facades\DB;
use App\Exceptions\AccountCreationFailed;

class RegisterController extends Controller
{
    use IssueTokenTrait;

    /**
     * @var mixed
     */
    private $client;

    public function __construct()
    {
        $this->client = Client::first();
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function register(Request $request)
    {
        /* validate request input */
        request()->validate([
            'username'              => 'required|unique:users',
            'email'                 => 'required|email|unique:profiles',
            'password'              => 'required|min:6|confirmed',
            'password_confirmation' => 'required',
            'role'                  => [
                'sometimes',
                'required',
                'exists:roles,name'
            ]
        ]);
        /* create user account */
        DB::beginTransaction();
        $user = User::create([
            'username' => request('username'),
            'password' => request('password')
        ]);

        /* create an empty profile */
        $profile        = new Profile();
        $profile->email = request('email');
        $user->profile()->save($profile);
        $roles = Role::all()->pluck('name');
        $role = request('role');
        // Check if has Role and is Inside the Database
        if ($role && $roles->contains($role)) {
            /* Set Role */
            $user->assignRole($role);
        } else {
            /* attach default role */
            $user->assignRole('customer');
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

        // Account Successfully Created
        DB::commit();
        return $this->issueToken($request, 'password');
    }
}
