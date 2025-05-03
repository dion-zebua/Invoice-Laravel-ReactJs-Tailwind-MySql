<?php

namespace App\Console;

use App\Console\Commands\DeleteExpiredApiTokens;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{


    // protected $commands = [
    //     DeleteExpiredApiTokens::class, // Daftarkan command yang baru dibuat
    // ];

    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();
        $schedule->command('tokens:cleanup')->daily();
        $schedule->command('db:backup')->daily();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
