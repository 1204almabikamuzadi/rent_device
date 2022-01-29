<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use function PHPUnit\Framework\onConsecutiveCalls;

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
    protected $appends=array('remain_days','on_time');
    
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
    public function getRemainDaysAttribute(){
     $to=Carbon::create($this->endDate);
     $now = Carbon::now();
     $diff_days=$now->diffInDays($to);
     if($now>$to){
         $diff_days=$diff_days*-1;
     }
     return $diff_days;
     
    }
    public function getOnTimeAttribute(){
        $to=Carbon::create($this->endDate);
        $now = Carbon::now();
        return $now<$to;
        
       }

}
