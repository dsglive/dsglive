<?php

namespace App\Exceptions;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogisticCreationFailed extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        $message = 'Server Too Busy! Ticket Creation Failed!';
        Log::critical($message);
        return response()->json(['message' => $message], 500);
    }
}
