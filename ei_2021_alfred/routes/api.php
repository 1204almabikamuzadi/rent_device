<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/register','RegisterController@register');
Route::post('/login','LoginController@login');
Route::post('/logout','LoginController@logout')->middleware("auth:sanctum");
Route::apiResource("device","DeviceController");
Route::apiResource("category","CategoryController");
Route::apiResource("basket","BasketController");
Route::put("/reservation/{id}","ReservationController@reportBreakdown");
Route::get("/replaceDevice/{id}","ReservationController@replaceDevice");
Route::get("/payconfirm","UserController@confirm");
Route::get("/myReservations","ReservationController@userReservations");
Route::get("/mail","TestController@index");
Route::get("/brokenReservations","ReservationController@brokenReservations");
Route::get("/users","UserController@index")->middleware("isadmin");
Route::post('/createUser','UserController@create');
//Route::get('/user/{id}','UserController@show');
Route::apiResource("user","UserController");



