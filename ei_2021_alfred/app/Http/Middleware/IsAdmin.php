<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(auth("sanctum")->check()){
            $user_id=auth("sanctum")->user()->id;
            $user=User::Find($user_id);
            if($user->tokenCan('server:admin')){
                return $next($request);
            }
            else{
                return response()->json(
                    [
                        
                        "message"=>"you are not an admin"
                    ]
                );
              
            }
            
        }
        else{
            return response()->json(
                [
                    "status"=>401,
                    "message"=>"you are logged in pleas log in"
                ]
            );
        }
      
    }
}
