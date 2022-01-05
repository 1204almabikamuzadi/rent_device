<?php

namespace App\Notifications;

use App\Models\Device;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class deviceBroken extends Notification
{
    use Queueable;
public $device;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Device $device)
    {
      $this->device=$device;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('Report break down for'.$notifiable->name)
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for reporting about!'.$this->device->description.
                          'we will change it as soon as possible' );
    }

    /**
     * 
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
