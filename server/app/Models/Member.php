<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    /**
     * provides public access to User instanceH
     */
    public function member()
    {
        return $this->hasOne(Member::class);
    }

    /**
     * Grant access: boolean = 1
     */
    public function grantAccess()
    {
        $this->access = 1;
        $this->save();
    }

    /**
     * Deny access: boolean = 0
     */
    public function denyAccess()
    {
        $this->access = 0;
        $this->save();
    }
}
