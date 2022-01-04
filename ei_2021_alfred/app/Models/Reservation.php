<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'startDate',
        'endDate'

    ];
    protected $with=['device'];
    function device(){
        return $this->belongsTo(Device::class, 'device_id');
    }
    public $timestamps = false;
   
    public function user(){
        $this->hasOne(User::class);
    }
    public function invoice(){
        $this->hasOne(Invoice::class);
    }
}
