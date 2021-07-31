<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'    => $this->id,
            'name'  => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'role'  => $this->role,
            'image' => $this->image,

            'dates' => [
                'birth'     => $this->birth_date->toDateString(),
                'created'   => $this->created_at->toDateString(),
                'updated'   => $this->updated_at->toDateString(),
            ]
        ];
    }
}
