<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Exceptions\InvalidCredentials;
use App\Exceptions\UserIsNotYetActive;

trait IssueTokenTrait
{
    /**
     * @param Request      $request
     * @param $grantType
     * @param $scope
     */
    public function issueToken(Request $request, $grantType, $scope = null)
    {
        $params = [
            'grant_type'    => $grantType,
            'client_id'     => $this->client->id,
            'client_secret' => $this->client->secret,
            'scope'         => $scope,
            'username'      => $request->username
        ];
        $credentials   = $request->only(['username', 'password']);
        $authenticated = Auth::attempt($credentials);

        if (!$authenticated) {
            throw new InvalidCredentials;
        }

        $user = Auth::user();

        if ($user->active) {
            $request->request->add($params);
            $proxy = Request::create('oauth/token', 'POST');
            return Route::dispatch($proxy);
        }

        throw new UserIsNotYetActive;
    }
}
