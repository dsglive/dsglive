<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class RateMustBeAFloat implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Amount Should be A Positive Number up to 4 Decimal places.';
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return preg_match('/^(?!0\d|$)\d*(\.\d{1,4})?$/', $value);
    }
}
