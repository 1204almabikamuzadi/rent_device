<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;

class EnsureUserIsactive
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
            if($user->active==true){
                return $next($request);
            }
            else{
                return response()->json(
                    [
                        
                        "message"=>"you are not active"
                    ]
                );
              
            }
            
        }
        else{
            return response()->json(
                [
                    "status"=>409,
                    "message"=>"you are not allowed to perform this action"
                ]
            );
        }
      
    }
}
