<?php

namespace App\Jobs;

use App\Models\User;
use App\Models\Device;
use App\Models\Invoice;
use Illuminate\Bus\Queueable;
use App\Notifications\deviceBroken;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class NotifyBreakDeviceJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
 public $user;
 public $device;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(User $user, Device $device)
    {
        $this->user=$user;
        $this->device=$device;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->user->notify(new deviceBroken($this->device));
    }
}
