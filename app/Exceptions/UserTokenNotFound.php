<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class UserTokenNotFound extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        return response()->json(['message' => 'Token is Missing Or Has Expired!'], 401);
    }
}
