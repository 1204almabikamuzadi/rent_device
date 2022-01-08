<?php

namespace App\Listeners;

use App\Events\BasketProcessedEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class InvoiceCreateListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  BasketProcessedEvent  $event
     * @return void
     */
    public function handle(BasketProcessedEvent $event)
    {
        echo($event->invoice);
    }
}
