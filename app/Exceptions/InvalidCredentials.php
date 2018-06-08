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
        return response()->json(['message' => 'Invalid Credentials'], 404);
    }
}
