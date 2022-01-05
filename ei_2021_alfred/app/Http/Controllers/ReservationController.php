<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Device;
use App\Models\Reservation;
use Illuminate\Http\Request;
use App\Notifications\deviceBroken;

class ReservationController extends Controller
{
     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reservation  $category
     * @return \Illuminate\Http\Response
     */
    public function reportBreakdown(Request $request, Reservation $res){
        $user_id=auth("sanctum")->user()->id;
        $user=User::where("id",$user_id)->first();
        $reservation=Reservation::where("id",$request->id)->first();
        if($reservation){
            $device=Device::where("id",$reservation->device_id)->first();
            $reservation->ready=false; 
            $update=$reservation->save();
            $user->notify(new deviceBroken($device));
            if($update){ 

                        return response()->json([
                            "status"=>200,
                            "message"=>"reservation reported"
                        ]);   

            }
            else{
                return response()->json([
                    "status"=>400,
                    "message"=>"bad request"
                ]);
            }
            


        }
        else{
            return response()->json([
                "status"=>404,
                "message"=>"not found"
              ]);

        }
       
    }
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
    public function brokenReservations(){
        if(auth("sanctum")->check()){
            $user_id=auth("sanctum")->user()->id;
            $reservations=Reservation::where("ready",false)->get();

            return response()->json([
                "status"=>200,
                "reservations"=>$reservations
              ]);
        }

    }
    public function replaceDevice(Request $request, Reservation $res){
        $user_id=auth("sanctum")->user()->id;
        $user=User::where("id",$user_id)->first();
        $reservation=Reservation::where("id",$request->id)->first();
        if($reservation){
           $category=$reservation->device->category_id;
           $deviceToreplace=Device::where("category_id",$category)->where("isRentable",true)->first();
           $reservation->device_id=$deviceToreplace->id;
           $reservation->Ready=true;
           $reservation->save();
           return response()->json([
            "status"=>200,
            "message"=>$deviceToreplace
        ]);   

        }
        else{
            return response()->json([
                "status"=>404,
                "message"=>"reservation not found"
            ]);   

        }


    }
}
