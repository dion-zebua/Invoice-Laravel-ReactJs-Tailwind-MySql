<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class BackupDB extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backup Database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $dbHost = env('DB_HOST');
        $dbUser = env('DB_USERNAME');
        $dbPass = env('DB_PASSWORD');
        $dbName = env('DB_DATABASE');

        $mysqldumpPath = env("DB_PATH");

        $filename = 'backup-' . date('Y-m-d_H-i-s') . '.sql';
        $fullPath = storage_path('app/backup/' . $filename);

        if (!file_exists(dirname($fullPath))) {
            mkdir(dirname($fullPath), 0755, true);
        }

        $command = "$mysqldumpPath --user=\"{$dbUser}\" --password=\"{$dbPass}\" --host=\"{$dbHost}\" {$dbName} | gzip > \"{$fullPath}\"";

        exec($command, $output, $returnVar);

        if ($returnVar === 0) {
            echo "Backup berhasil: $filename";
        } else {
            echo "Backup gagal (kode: $returnVar)";
        }
    }
}
