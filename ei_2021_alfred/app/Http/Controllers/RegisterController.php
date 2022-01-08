<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Jobs\welcomeUserMailJob;
use Illuminate\Support\Facades\Hash;
use App\Notifications\UserRegisteredNotification;

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
       // $user->notify(new UserRegisteredNotification());
       welcomeUserMailJob::dispatch($user);
        return($user);

    }
}
