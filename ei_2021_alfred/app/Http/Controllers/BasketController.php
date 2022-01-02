<?php

namespace App\Http\Controllers;

use App\Models\Basket;
use App\Models\Device;
use Illuminate\Http\Request;

class BasketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(auth("sanctum")->check()){
            $user_id=auth("sanctum")->user()->id;
            $carts=Basket::where("user_id",$user_id)->get();
            return response()->json([
                "status"=>200,
                "basket"=>$carts
              ]);

        }
        else{
            
            return response()->json([
                "status"=>409,
                "message"=>"connectez-vous pour acceder au panier "
              ]);
        }

        
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                "device_id"=>"required|integer",
                 "quantity"=>"required|integer|min:1"
            ]
        );
        if(auth("sanctum")->check()){
            $user_id=auth("sanctum")->user()->id;
            $device_id=$request->device_id;
            $quantity=$request->quantity;
           
            $device_check=Device::where("id",$device_id)->first();
            if($device_check){
                if(Basket::where("device_id",$device_id)->where("user_id",$user_id)->exists()){
                    $basketitem=Basket::where("device_id",$device_id)->where("user_id",$user_id)->first();
                    $qty=$basketitem->quantity;
                    $basketitem->quantity=$qty+$quantity;
                    $basketitem->save();
                    return response()->json([
                        "status"=>200,
                        "message"=>"Already added to cart"
                      ]);

                }else{
                    $basket=new Basket;
                    $basket->user_id=$user_id;
                    $basket->device_id=$device_id;
                    $basket->quantity=$quantity;
                    $basket->save();

                    return response()->json([
                        "status"=>201,
                        "message"=>"cart created successfully"
                      ]);
    

                }


               
            }

            else{
                return response()->json([
                    "status"=>404,
                    "message"=>"device does not exist"
                  ]);

            }

           
        }
        else{
            return response()->json([
                "status"=>409,
                "message"=>"login to add to cart"
              ]);
        
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Basket  $basket
     * @return \Illuminate\Http\Response
     */
    public function show(Basket $basket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Basket  $basket
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Basket $basket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Basket  $basket
     * @return \Illuminate\Http\Response
     */
    public function destroy(Basket $basket)
    {
        
        if(auth("sanctum")->check()){
            $user_id=auth("sanctum")->user()->id;
            if($user_id===$basket->user_id){
                $basket->delete();
            }
            
            return response()->json([
                "status"=>200,
                "message"=>"The basket removed succesfully"
              ]);

        }
        else{
            return response()->json([
                "status"=>409,
                "message"=>"login to add to cart"
              ]);

        }
    
        
    }
    
    
}
