<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Basket;
use App\Models\Device;
use App\Models\Invoice;
use App\Models\Reservation;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $users=User::all();
        return $users->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
    public function confirm(Request $request){
        if(auth("sanctum")->check()){
            $user_id=auth("sanctum")->user()->id;
            $courses=Basket::where('user_id',$user_id)->get();

            if(count($courses)>0){
                $invoice=new Invoice();
                $invoice->number=strtotime("now");
                $invoice->save();
                $amount=0;

                foreach($courses as $course){
                    $device=Device::where("id",$course->device_id)->first();
                    $price=$device->price;
                    $amount+=$price*$course->quantity;
                    $reservation= new Reservation();
                    $reservation->user_id=$user_id;
                    $reservation->invoice_id=$invoice->id;
                    $reservation->device_id=$device->id;
                    $startdate=strtotime("today");
                    $enddate=strtotime("+1month");
                    $reservation->startDate=date("Y-m-d h:i:s",$startdate);
                    $reservation->endDate=date("Y-m-d h:i:s",$enddate);
                    $device->isRentable=false;
                    $reservation->save();
                    $device->save();
                    $basket=Basket::where("device_id",$course->device_id)->where("user_id",$user_id);
                    $basket->delete();

                }
                $invoice->amount=$amount;
                $invoice->save();
                return response()->json([
                    "status"=>200,
                    "courses"=>"message reussi"
                  ]);

            }
            else{
                return response()->json([
                    "status"=>204,
                    "courses"=>"not found"
                  ]);
                
            }

            
            
        }
        else{
            return response()->json([
                "status"=>409,
                "courses"=>"login to perform"
              ]);

        }
          
    }
}
