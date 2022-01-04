<?php

namespace App\Http\Controllers;

use App\Mail\TestMail;
use Illuminate\Http\Request;
use App\Mail\TestMarkDownMail;
use Illuminate\Support\Facades\Mail;

class TestController extends Controller
{
    public function index(){
        Mail::to("test@mail.com")->send(new TestMarkDownMail());
        return view("emails.test");

    } 
}
