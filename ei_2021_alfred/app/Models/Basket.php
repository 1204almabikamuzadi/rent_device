<?php

namespace App\Models;

use App\Models\Device;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Basket extends Model
{
    use HasFactory;
     protected $with=['device'];
    function device(){
        return $this->belongsTo(Device::class, 'device_id');
    }

    
}
