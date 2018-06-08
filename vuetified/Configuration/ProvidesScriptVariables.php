<?php

namespace Vuetified\Configuration;

use Vuetified\Vuetified;
use Illuminate\Support\Facades\Auth;
use Vuetified\Contracts\InitialFrontendState;

trait ProvidesScriptVariables
{
    /**
     * Get the default JavaScript variables for Spark.
     *
     * @return array
     */
    public static function scriptVariables()
    {
        return [
            'csrfToken'    => csrf_token(),
            'env'          => config('app.env'),
            'api_endpoint' => config('app.api'),
        ];
    }
}
