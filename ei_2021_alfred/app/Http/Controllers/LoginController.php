<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);
    
        $user = User::where('email', $request->email)->first();
    
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
         Auth::user($user);
         if($user->role==="admin"){
           return $user->createToken('token', ['server:admin'])->plainTextToken;
         }
         else{
            return $user->createToken($request->device_name)->plainTextToken;
         }
    
        
    }
    public function authenticate(Request $request)
    {
       $login= $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);
        
        if(!Auth::attempt([$login])){
            return response( ['email' => 'The provided credentials are incorrect.'],200);
        }
     
    
       }
    public function logout(Request $request){
        $request->user()->tokens()->delete();
        $request->user()->currentAccessToken()->delete();
        return response()->json("logout",201);
       
    }
    public function connect(Request $request ){
    
        return response("this time everything is ok");
    }
}
