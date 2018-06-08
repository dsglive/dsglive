<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

trait IssueTokenTrait
{
    /**
     * @param Request $request
     * @param $grantType
     * @param $scope
     */
    public function issueToken(Request $request, $grantType, $scope = null)
    {
        $params = [
            'grant_type'    => $grantType,
            'client_id'     => $this->client->id,
            'client_secret' => $this->client->secret,
            'scope'         => $scope
        ];

        if ('social' !== $grantType) {
            $params['username'] = $request->username;
        } else {
            //? add logic here for social to save also scope and access token in Social Accounts table
            //! Save Access Token, Refresh Token, Username, Expires At, Type, and Scope
        }

        $request->request->add($params);

        $proxy = Request::create('oauth/token', 'POST');

        return Route::dispatch($proxy);
    }
}
