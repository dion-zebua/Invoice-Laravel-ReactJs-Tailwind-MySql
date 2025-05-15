<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Push extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'push:lara';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        exec("git add -A && git commit -m \"malas ngoding, paham 🖐\" && git push -u origin laravel");
    }
}
