---
title: Reverse Migration and Seed Existing Database in Laravel
description: Cara bikin migration dan seeder buat existing database ngga pake ribet ngga pake pusing
image: https://miro.medium.com/v2/resize:fit:720/0*wDSL2yCx_0J9BxxU
author: Ali Zul
github: alizul01
linkedin: alizulfikar
date: 2023-07-03
tags:
  - laravel
  - backend
---

Halo all! Pernah ngga sih kamu udah pernah punya database ‘exist’ dan kamu pengen data-data itu otomatis terpanggil di seeder ke depan? Instead of kamu bikin manual _yang pastinya males banget kalo tabelnya banyal_, kamu bisa nih pakai beberapa third-party library yang bisa membuatkan migrasi dan seeder secara otomatis! Lets jump right into it~

# Library Package

Kenalin nih dua library yang bakal ngebantu banget,

1. orangehill/iseed
2. kitloong/laravel-migrations-generator

Dua library di atas merupakan library yang dapat mengotomasi pembuatan seeder dan migrasi dari database tables yang sudah ada, eits tapi ini ada saran tambahan kalau misalkan kamu mengalami error seperti ini saat menjalankan command

```bash
php artisan migrate:generate
```

Tiba — tiba muncul error seperti ini,

```
  Class 'Doctrine\DBAL\Driver\PDOMySql\Driver' not found

  at project-name-kamu\vendor\laravel\framework\src\Illuminate\Database\MySqlConnection.php:64
    60|      * @return \Doctrine\DBAL\Driver\PDOMySql\Driver
    61|      */
    62|     protected function getDoctrineDriver()
    63|     {
  > 64|         return new DoctrineDriver;
    65|     }
    66| }
```

Well gausah panik! Kamu cukup menjalankan ini saja,

```bash
composer require doctrine/dbal:^2.0
```

Notes: Install versi 2.0 ya! Saat artikel ini ditulis, ntah kenapa versi terbaru itu ngga mau jalan, tapi kalau kamu penasaran bisa dicoba aja yak. But misalkan kamu udah terlanjur install versi terbaru, kamu bisa ganti di composer.json-nya menjadi seperti ini

```
{
  ...
  {
    "doctrine/dbal": "^2.0",
  }
  ...
}
```

# Reverse Migration

Nah kalau kamu udah ngikutin langkah di atas dengan benar, seharusnya kamu tinggal menjalankan command

```bash
php artisan migrate:generate
```

Otomatis kamu akan langsung meng-generate migration di folder database/migrations kamu! Tapi kalau misal ada error, bisa kamu diskusikan di bawah ya siapa tau aku bisa bantuin nih :)

Tampilan saat berhasil menjalankan generate migrations

![generate migration](https://miro.medium.com/v2/resize:fit:720/format:webp/1*GbQGVc9Qvhr8e7-eDUtgEg.png)

# Reverse Seeder

Nah untuk reverse seeder ini sedikit tricky, why? Sejauh artikel ini ditulis, iseed tidak support langsung membuatkan seeder untuk semua tabel, so kamu harus satu per satu menuliskan nama tabelnya seperti ini

```bash
php artisan iseed nama_tabel
```

**Hey, males banget kan?**

Well, ada solusi nih! Instead of kamu bikin satu per satu sampai besok pun ga bakal kelar kalo tabelmu banyak :’ wkwk, kamu bisa nih bikin command pribadi untuk iseed:all, gimana caranya?

Pertama, kita buat command kita sendiri dengan cara seperti ini

```bash
php artisan make:command iseedAll
```

Setelah itu command yang kita buat akan otomatis masuk ke folder `app/Console/Commands/iseedAll.php`\

Nah, kamu cukup ikuti kode di bawah ini ya~

```php
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class iseedAll extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'iseed:all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Ini merupakan command untuk membuat seed database secara otomatis, iseed tidak support untuk membuat all seed jadi ini pembuatan secara manual';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $query = DB::select('SHOW TABLES WHERE "Tables_in_nama-database-kamu" NOT LIKE "migrations"');
        $collection = new \Illuminate\Support\Collection($query);
        $tables = $collection->implode('Tables_in_nama-database-kamu', ',');
        $this->info("Calling iseed for all tables");
        $this->call('iseed', ["tables" => $tables]);
    }
}
```

Well selamat kamu sudah berhasil membuat command laravelmu sendiri, cukup dengan memanggil `php artisan iseed:all` atau command lain yang kamu buat sendiri, iseed akan langsung membuatkan seeders langsung ke dalam folder `Database/Seeders`

Oh iya penjelasan singkat nih dari handling kode di atas,

```php
public function handle()
{
    $query = DB::select('SHOW TABLES WHERE "Tables_in_nama-database-kamu" NOT LIKE "migrations"');
    $collection = new \Illuminate\Support\Collection($query);
    $tables = $collection->implode('Tables_in_nama-database-kamu', ',');
    $this->info("Calling iseed for all tables");
    $this->call('iseed', ["tables" => $tables]);
}
```

1. `$query` akan melakukan query all tables di database kamu, yang mana nanti ia akan berbentuk array
2. `$collection` akan membuat array kamu dalam bentuk collection dan akan membentuk seperti ini `[{"Tables_in_nama-database-kamu" : "nama-tabel-kamu"}, ...]`
3. `$tables` akan menyimpan value dan dipisah dengan tanda koma, karena iseed support multiple table tapi harus pakai koma
4. `$this->info` hanya sebaga informasi di terminal kamu kalau sedang menjalankan command
5. `$this->call` akan memanggil command iseed dan parameter $tables akan kita berikan variable $table yang telah kita buat sebelumnya

Seharusnya kalau berhasil doi akan langsung begini gais~

![result](https://miro.medium.com/v2/resize:fit:720/format:webp/1*S7ThY6kqpUdgRUrV7IbGEA.png)

Yay sudah berhasil!

Semoga bermanfaat ya! Anyway kalau ingin koneksi di linkedin atau github langsung cus~
