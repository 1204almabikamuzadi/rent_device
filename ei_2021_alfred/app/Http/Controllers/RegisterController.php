<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    function register(Request $request){
        $request->validate([
            'name'=>['required'],
            'password'=>['required','min:8'],
            'email'=>['required','email','unique:users'],
            'password_confirmation'=>['same:password']
        ]);
       $user= User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
            
            
        ]);
        return($user);

    }
}
