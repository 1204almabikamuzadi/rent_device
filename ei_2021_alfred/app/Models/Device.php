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
    protected $appends=array('in_stock');
    protected $with=['modele'];
    public function modele(){
        return $this->belongsTo(Modele::class);
    }
    public function reservations(){
        return $this->hasMany(Reservation::class);
    }
    public function getInStockAttribute(){
     
        $stock=Device::where("modele_id",$this->modele_id)->get();
        return  !empty($stock);

       }
    

}
