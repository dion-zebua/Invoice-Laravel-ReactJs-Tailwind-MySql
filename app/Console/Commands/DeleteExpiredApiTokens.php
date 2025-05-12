<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DeleteExpiredApiTokens extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tokens:cleanup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete tokens older than 1 day';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // $token = DB::table('personal_access_tokens')
        //     ->where('expires_at', '<', Carbon::now())
        //     ->delete();
        $token = DB::table('personal_access_tokens')
            ->where('expires_at', '<', Carbon::now())
            ->delete();

        $this->info("Deleted $token expired tokens.");
    }
}
