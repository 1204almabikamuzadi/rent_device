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
    public $timestamps = false;
    public function device(){
        $this->hasOne(Device::class);
    }
    public function user(){
        $this->hasOne(User::class);
    }
}
