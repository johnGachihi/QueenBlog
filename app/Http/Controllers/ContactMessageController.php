<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactMessageController extends Controller
{
    public function arbitrateMessage(Request $request) {
        $message = new \App\Message();
        $message->name = $request->name;
        $message->email = $request->email;
        $message->subject =$request->subject;
        $message->message =$request->message;

        Mail::to('johngachihi3@gmail.com')->send(new ContactMessage($message));
    }
}
