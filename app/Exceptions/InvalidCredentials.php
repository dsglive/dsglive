<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class InvalidCredentials extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        return response()->json(['message' => 'You Have Provided Invalid Credentials'], 400);
    }
}
