<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $user = request()->route('user');
        $isPostRequest = $this->getMethod() === 'POST';

        $ignoreId = $isPostRequest ? '' : ','. $user->id;

        $rules = [
            'name' => ['required', 'min:5'],
            'email' => ['required', 'email', 'unique:users,email' . $ignoreId],
            'birth_date' => ['required'],
        ];

        if ($isPostRequest) {
            $rules['password'] = ['required', 'min:7', 'confirmed'];
            $rules['password_confirmation'] = ['required', 'min:7'];
        }

        return $rules;
    }
}
