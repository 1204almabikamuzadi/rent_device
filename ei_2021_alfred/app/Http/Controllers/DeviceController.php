<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Facade\Ignition\DumpRecorder\Dump;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DeviceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    $devices=Device::all();
    return $devices->toJson();
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'description' => 'required|string',
            'category' => 'required|integer',
            'price' => 'required|integer',
            'myfile'=>'file',
        ]);
        $device=new Device();
        $device->description=$request->input('description');
        $device->category_id=$request->input("category");
        $device->price=$request->input("price");
        $device->image_path=Storage::put("avatar",$request->file("myfile"));

         if($device->save()){
            return response()->json([
            "success"=>"device succesfully created"
         ]);
            
         }
         else{
            return response()->json([
                "fail"=>"can not create device check inputs"
             ]);

         }
    
    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function show(Device $device)
    {
        return $device;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Device $device)
    {
        if( $device->update($request->all())){
            return response()->json([
                "success"=>"device succesfully modified",200
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * 
     * @param  \App\Models\Device  $device
     * @return \Illuminate\Http\Response
     */
    public function destroy(Device $device)
    {
        $device->delete();
    }
}
