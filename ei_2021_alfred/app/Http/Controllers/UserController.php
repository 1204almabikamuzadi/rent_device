<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Basket;
use App\Models\Device;
use App\Models\Invoice;
use App\Models\Reservation;
use Illuminate\Http\Request;
use App\Notifications\InvoicePaid;
use App\Events\BasketProcessedEvent;
use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $users = User::paginate(5);
        return $users->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'password' => ['required', 'min:8'],
            'email' => ['required', 'email', 'unique:users'],
            'password_confirmation' => ['same:password'],
            'role' => ['required']
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role


        ]);
        return response()->json([
            "status" => 201,
            "user" => $user
        ]);
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
        return response()->json(
            [
                "status" => 200,
                "user" => $user
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
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
        $user->update($request->all());
        if ($request->password) {
            $user->password = Hash::make($request->password);
        }

        $user->save();
        return response()->json([
            "status" => 200,
            "user" => $user
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        if (auth("sanctum")->check()) {
            $connected_id = auth("sanctum")->user()->id;
            $connected_user = User::find($connected_id);
            if ($connected_id != $user->id) {
                $user->delete();
                return response()->json(
                    [
                        "status" => 200,
                        "message" => "this user has been deleted"
                    ]
                );
            } else {
                return response()->json(
                    [
                        "status" => 409,
                        "message" => "you can not delete your self"
                    ]
                );
            }
        } else {
            return response()->json(
                [
                    "status" => 401,
                    "message" => "Login as admin to delete user"
                ]
            );
        }
    }
    public function confirm(Request $request)
    {
        if (auth("sanctum")->check()) {
            $user_id = auth("sanctum")->user()->id;
            $user = User::where("id", $user_id)->first();

            $courses = Basket::where('user_id', $user_id)->get();

            if (count($courses) > 0) {
                $invoice = new Invoice();
                $invoice->number = strtotime("now");
                $invoice->save();
                $amount = 0;

                foreach ($courses as $course) {
                    $device = Device::where("id", $course->device_id)->first();
                    $price = $device->price;
                    $amount += $price * $course->quantity;
                    $reservation = new Reservation();
                    $reservation->user_id = $user_id;
                    $reservation->invoice_id = $invoice->id;
                    $reservation->device_id = $device->id;
                    $startdate = strtotime("today");
                    $enddate = strtotime("+1month");
                    $reservation->startDate = date("Y-m-d h:i:s", $startdate);
                    $reservation->endDate = date("Y-m-d h:i:s", $enddate);
                    $device->isRentable = false;
                    $reservation->save();
                    $device->save();
                    $basket = Basket::where("device_id", $course->device_id)->where("user_id", $user_id);
                    $basket->delete();
                }
                $invoice->amount = $amount;
                $invoice->save();
                // $user->notify(new InvoicePaid($invoice));
                event(new BasketProcessedEvent($invoice));


                return response()->json([
                    "status" => 200,
                    "courses" => "message reussi"
                ]);
            } else {
                return response()->json([
                    "status" => 204,
                    "courses" => "not found"
                ]);
            }
        } else {
            return response()->json([
                "status" => 409,
                "courses" => "login to perform"
            ]);
        }
    }
    public function disable(Request $request)
    {
        $user = User::where("id", $request->id)->first();
        if ($user) {
            $user->active = false;
            $user->save();
            return response()->json([
                "status" => 200,
                "message" => $user
            ]);
        }
        return response()->json([
            "status" => 401,
            "courses" => "the user does not exist"
        ]);
    }
}
