<?php

namespace Api\Auth;

use Api\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Rules\MustBeValidUsername;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\User\AccountResource;

class LoginController extends Controller
{

    /**
     * @param Request $request
     */
    public function check(Request $request)
    {
        if ($request->user()) {
            return response()->json(['authenticated' => true], 200);
        }

        return response()->json(['authenticated' => false], 401);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function login(Request $request)
    {
        request()->validate([
            'username' => [
                'required',
                new MustBeValidUsername
            ],
            'password' => 'required|min:6'
        ]);
        $user = User::findByUsername($request->username);
        $user = new AccountResource($user->load('profile'));
        $token = $user->createToken('DSG Login')->accessToken;
        // Manually Create A Token and Attach it To Header
        return response()->json(['status' => 'success', 'data' => $user])->header('Authorization', $token);
    }

    /**
     * @param Request $request
     */
    public function logout(Request $request)
    {
        $accessToken = $request->user()->token();

        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update(['revoked' => true]);

        $accessToken->revoke();
        return response()->json(['message' => 'User Logout.'], 200);
    }

    /**
     * Override Email As Default Username
     */
    public function username()
    {
        return 'username';
    }
}
