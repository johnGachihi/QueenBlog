<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
//    protected $dateFormat = 'l, F j, Y';
    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('l, F j, Y');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('l, F j, Y');
    }

    public function getPublishedOnAttribute($date)
    {
        if ($date)
            return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('l, F j, Y');
    }
}
