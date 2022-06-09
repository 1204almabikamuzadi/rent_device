<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'description',
        'category_id'
        


    ];
    protected $with=['modele'];
    public function modele(){
        return $this->belongsTo(Modele::class);
    }
    public function reservations(){
        return $this->hasMany(Reservation::class);
    }
    

}
