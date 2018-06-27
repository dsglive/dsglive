<?php

namespace Api\Account;

use Api\Controller;
use App\Models\User;
use App\Rules\ValidateZip;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Rules\MustMatchPassword;
use App\Exceptions\UpdatingRecordFailed;
use App\Http\Resources\User\AccountResource;

class AccountController extends Controller
{
    public function __construct()
    {
        // $this->middleware(['can:edit-profile']);
    }

    /**
     * @param Request $request
     */
    public function updateAccount(Request $request)
    {
        $user = $request->user();

        $data = request()->validate([
            'username'              => [
                'required',
                Rule::unique('users')->ignore($user->id)
            ],
            'old_password'          => [
                'sometimes',
                'required',
                new MustMatchPassword($user->password)
            ],
            'password'              => 'required_with:old_password|min:6|confirmed',
            'password_confirmation' => 'required_with:password'
        ]);
        // fill will only assign those in the fillable fields of user
        $user->username = $request->username;
        $user->password = $request->password;
        $save           = $user->save();

        if (!$save) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Password Successfully Changed!']);
    }

    /**
     * @param Request $request
     */
    public function updateProfile(Request $request)
    {
        $user = $request->user();
        $data = request()->validate([
            'company_name' => 'required',
            'email'        => [
                'required',
                Rule::unique('profiles')->ignore($user->id, 'user_id')
            ],
            'first_name'   => 'required',
            'last_name'    => 'required',
            'phone'        => 'required',
            'address_1'    => 'required',
            'address_2'    => 'nullable',
            'city'         => 'required',
            'state'        => 'required',
            'zip'          => [
                'required',
                new ValidateZip
            ],
            'country'      => 'sometimes|required',
            'notes'        => 'nullable|max:255'
        ]);
        $profile = $user->profile;
        $updated = $profile->update($data);

        if (!$updated) {
            throw new UpdatingRecordFailed;
        }

        return new AccountResource($user->load('profile'));
    }
}
