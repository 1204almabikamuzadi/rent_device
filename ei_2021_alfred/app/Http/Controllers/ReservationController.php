<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function userReservations(){
        if(auth("sanctum")->check()){
            $user_id=auth("sanctum")->user()->id;
            $reservations=Reservation::where("user_id",$user_id)->get();

            return response()->json([
                "status"=>200,
                "reservations"=>$reservations
              ]);
        }
    }
}
