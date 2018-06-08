<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class RevokeAdminUpdate extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        if ($request->wantsJson()) {
            return response()->json(['message' => 'You Have Been Forbidden To Modify Admin Account'], 403);
        }

        return redirect(\Config::get('app.url'));
    }
}
