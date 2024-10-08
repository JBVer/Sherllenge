<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    /**
     * provides public access to User instance
     */
    public function member()
    {
        return $this->hasOne(Member::class);
    }
}
