<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TestMarkDownMail extends Mailable
{
    use Queueable, SerializesModels;
    public $url="http//markdown.com";

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from("rentdevice@test.com")
                      ->subject("mon markdown")
                      ->markdown('emails.markdown-test.blade.php');
    }
}
