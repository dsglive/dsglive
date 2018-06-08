<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class EmailNotFound extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        return response()->json(['message' => 'Email : ***'.$request->email.'*** not found.'], 404);
    }
}
