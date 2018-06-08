<?php

namespace App\Exceptions;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserIsNotYetActive extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        $message = 'User Is Not Yet Active!';
        return response()->json(['message' => $message], 401);
    }
}
