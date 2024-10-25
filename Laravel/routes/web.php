<?php

// use Illuminate\Support\Facades\Request;

use App\Http\Controllers\InvoiceGenerator;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function (Request $request) {

    $collection = collect([1, 2, 3, 4, 5]);

    // Semua
    // $collection->all();

    // rata-rata
    // $collection = collect([1, 2, 3, 4, 5])->avg();
    // $collection = $collection->avg();


    // item per array
    // $collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9])->chunk(5);

    // 
    // $collection = collect(str_split('ABBBCCCD'));

    // $chunks = $collection
    //     ->chunkWhile(function (string $value, int $key, \Illuminate\Support\Collection $chunk) {
    //         return $value == $chunk->last() ;
    //     });




    // return Dari 2 dimensi jadi 1 dimensi;
    // $collection = collect([
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9],
    // ]);

    // $collapsed = $collection->collapse();    





    // membuat value array
    // $collection = collect(['name', 'age']);

    // $combined = $collection->combine(['George', 29]);

    // return $combined->all();


    // menambah value menggunakan array
    // $collection = collect(['John Doe']);
    // $concatenated = $collection->concat(['Jane Doe'])->concat(['nameaaa' => 'Johnny Doe'])->concat(['asasasas']);
    // return $concatenated->all();


    // return boolean
    // $collection = collect([1, 2, 3, 4, 5, 9]);
    // $collection2 = $collection->contains(function (int $value, int $key) {
    //     return $value > 8;
    // });

    // return boolean untuk cek jumlah item
    // $collection = collect(['23'])->containsOneItem();

    // cek adapah ada item dalam collect
    // $collection = collect(['23', '24', '23'])->containsStrict('23');

    // cara jumlah item dalam array
    // $collection = collect(['23', '24', '23'])->count();

    // cara jumlah item dalam array (yg sama)
    // $collection = collect(['23', '24', '23'])->countBy();


    // menggabungkan item dalama array
    // $collection = collect([11, 2]);
    // $matrix = $collection->crossJoin(['a', 'b']);
    // return $matrix->all();

    // menampilkan array dengan key
    // $collection = collect([11, 2]);
    // return $collection->dd();


    // menampilkan collection yang tidak ada dalam diff
    // $collection = collect([1, 2, 3, 4, 5]);
    // $diff = $collection->diff([1, 2, 3, 4]);
    // return $diff->all();


    // menampilkan collection yang tidak ada dalam diffAssoc (value yg berbeda)
    // $collection = collect([
    //     'color' => 'orange',
    //     'type' => 'fruit',
    //     'remain' => 6,
    // ]);
    // $diff = $collection->diffAssoc([
    //     'color' => 'red',
    //     'type' => 'fruit',
    //     'remain' => 1,
    //     'used' => 6,
    // ]);
    // return $diff->all();



    // menampilkan collection yang tidak ada dalam diffAssoc (value yg berbeda)
    // $collection = collect([
    //     'color' => 'orange',
    //     'type' => 'fruit',
    //     'remain' => 6,
    // ]);
    // $diff = $collection->diffAssocUsing([
    //         'Color' => 'yellow',
    //         'Type' => 'fruit',
    //         'Remain' => 3,
    //     ], 'strnatcasecmp');
    // return $diff->all();


    // menampilkan item yang tidak ada dalam diffKeys
    // $collection = collect([
    //     'one' => 10,
    //     'two' => 20,
    //     'three' => 30,
    //     'four' => 40,
    //     'five' => 50,
    // ]);
    // $diff = $collection->diffKeys([
    //         'one' => 2,
    //         'two' => 2,
    //         'four' => 4,
    //         'six' => 6,
    //         'eight' => 8,
    //     ]);
    // return $diff->all();



    // menampilkan boolean dari value yang tidak termasuk dalam doesntContain
    // $collection = collect([0, 1, 2, 3, 4, 5]);
    // $collection2 = $collection->doesntContain(function (int $value, int $key) {
    //     return $value < 0;
    // });
    // return $collection2;


    //menampilkan key dengan dot
    // $collection = collect([
    //     'products' =>
    //     [
    //         'desk' =>
    //         [
    //             'price' => 100
    //         ]
    //     ]
    // ]);
    // $flattened = $collection->dot();
    // return $flattened->all();


    // menampilkan array + collect dalam string 
    // $collection = collect(['John Doe', 'Jane Doe']);
    // return $collection->dump();


    // menampilkan index value yg sama dengan mengabaikan tipe data
    // $collection = collect(['a', 'b', 'a', 'c', 'b', 'a']);
    // return $collection->duplicates();

    // menampilkan index value yg sama dengan tanpa mengabaikan tipe data
    // $collection = collect(['a', 'b', 'a', 'c', 'b', 'a']);
    // return $duplicates = $collection->duplicatesStrict();



    // each hanya melakukan oparasi tidak menampilkan
    // $collection = collect([1, 2, 3, 4]);
    // $collection2 = $collection->each(function (int $item, int $key) {
    //     return $item * 2;
    // });
    // return $collection2->all();


    // each hanya melakukan oparasi tidak menampilkan
    // $collection = collect([['John Doe1', 35], ['Jane Doe2', 33]]);
    // $collection->eachSpread(function (string $name, int $age) {
    //     echo 'saya ' . $name . ' umur ' . $age . '</br>';
    // });

    // cek tipe data
    // try {
    //     $collection = collect([1, 2, 3, '5']);
    //     return $collection->ensure('int');
    // } catch (\Throwable $e) {
    //     return $e->getMessage();
    // }



    // cek setiap value (true/false)
    // $collection = collect([1, 2, 3]);
    // $collection->every(function (int $value, int $key) {
    //     dd($value > 2);
    // });


    // mengecualikan key
    // $collection = collect([
    //     'product_id' => 1,
    //     'price' => 100,
    //     'discount' => false
    // ]);
    // $filtered = $collection->except(['price', 'discount']);
    // return $filtered->all();



    // menampilkan berdasarkan filter
    // $collection = collect([1, 2, 3, 4]);
    // $filtered = $collection->filter(function (int $value, int $key) {
    //     return $value >= 1;
    // });
    // return $filtered->all();


    // menampilkan item pertama
    // $collection = collect([
    //     1,
    //     2,
    //     3,
    //     4
    // ])->first(function (int $value, int $key) {
    //     return $value > 2;
    // });
    // return $collection;
    // return $collection = User::first();

    // Mengambil item pertama
    // try {
    //     $collection = collect([
    //         2,
    //         3,
    //         4
    //     ])->firstOrFail(function (int $value, int $key) {
    //         return $value > 5;
    //     });
    //     return $collection;
    // } catch (\Exception $e) {
    //     return $e->getMessage();
    // }



    // Mengambil data pertama berdasarkan key dan value
    // $collection = User::limit(5)->get();
    // $collection = $collection->firstWhere('is_verified', 0);
    // return $collection;





    // for ($i = 1; $i <= 10; $i++) {
    //     echo 'angka ke ' . $i . PHP_EOL;
    // }

    // $a = 0;
    // while ($a <= 10) {
    //     echo 'angka ke ' . $a . PHP_EOL;
    //     $a++;
    // }




    // Meratakan array 2 dimensi
    // $collection = collect([
    //     ["id" => 1],
    //     ["name" => "Dion Zebua"],
    //     ["email" => "zebuadbless@gmail.comm"],
    //     ["password" => "$2y$12\$R3DFtGtOWQRrOZaTGLxDyOWMj72PkDq3HbTa9sa0JPTDeI5wRovMy"],
    // ]);
    // $flattened = $collection->flatMap(function (array $values) {
    //     return array_map('strtoupper', $values);
    // });
    // return $flattened->all();





    // Meratakan array menjadi 1 dimensi
    // $collection = collect([User::first() , [
    //     'asas' => 'sdsdsd',
    //     'retrt' => 'sdsdsd',
    //     'retrt' => 'sdsdsd',
    // ]]);
    // $flattened = $collection->flatten();
    // return $flattened->all();



    // Mengubah value jadi key dan sebaliknya
    //     $collection = collect([
    //     'asas' => 'sdsdsdas',
    //     'retrt' => 'sdsdsdasare',
    //     'retrtwewe' => 'sdsdsdasereg',
    // ]);
    // $collection = $collection->flip();
    // return $collection->all();



    // Mengecualikan item dengan key tertentu
    // $collection = collect(User::first());
    // $collection = $collection->forget('name');
    // return $collection->all();




    // membatasi array berdasarkan page|perPage
    // $collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // $chunk = $collection->forPage(3, 3);
    // return $chunk->all();




    // menampilkan array
    // $user = User::limit(4)->get('id');
    // return $user;



    // mengelompokan array berdasarkan key dengan value yg sama
    // $user = User::limit(4)->get();
    // $grouped = $user->groupBy('is_verified');
    // return $grouped->all();




    // return boolean ketika suatu key ada (semua yang di dalam has)
    // $collection = collect(['account_id' => 1, 'product' => 'Desk', 'amount' => 5]);
    // $collection = $collection->has('productasas');
    // return $collection;




    // return boolean ketika suatu key ada (salah 1)
    // $collection = collect(['account_id' => 1, 'product' => 'Desk', 'amount' => 5]);
    // $collection = $collection->hasAny('product', 'productasas');
    // return $collection;



    // Menggabungkan semua item  pada key tertentu menjadi string
    // $collection = collect(User::limit(3)->get());
    // return $collection->implode('name', ' - ');


    // $collection = collect([
    //     'id' => 'Desk',
    //     'name' => 'Sofa',
    //     'email' => 'Chair',
    // ]);





    // menampilkan item dengan value yg sama pada insect dan collection
    // $collection = collect(User::first());
    // $intersect = $collection->intersect(['zebuadbless@gmail.comm', 'Dion Zebua', 'Bookcase']);
    // return $intersect->all();




    // menampilkan item dengan key dan value yg sama pada insect dan collection
    // $collection = collect([
    //     'color' => 'red',
    //     'size' => 'M',
    //     'material' => 'cotton'
    // ]);

    // $intersect = $collection->intersectAssoc([
    //     'color' => 'blue',
    //     'Size' => 'M',
    //     'material' => 'polyester'
    // ]);

    // return $intersect->all();





    // menampilkan item dengan key yg sama pada insect dan collection namun harus mengisi value juga meskipun salah
    // $collection = collect(User::first());
    // $intersect = $collection->intersectByKeys(['id' => 2, 'name' => 'Dion Zebua']);
    // return $intersect->all();




    // Cek apakah collection kosong
    // $collection = collect(User::where('id', 1)->get());
    // return $collection->isEmpty();





    // Cek apakah collection tidak kosong
    // $collection = collect(User::where('id', 100011)->get());
    // return $collection->isNotEmpty();




    // menggabungkan array jadi string dengan pembatas
    // $collection = collect(User::first());
    // return $collection->join(' - ', ' and ');




    // membuat ulang array dengan keyname dari value keyBy 
    // $collection = collect(User::limit(4)->get());
    // return $collection->keyBy('name');



    // kebalikan dari keyBy
    // $collection = collect(User::limit(4)->get());
    // $collection = $collection->keyBy('name');
    // return $collection->keys();



    // data terakhir
    // $collection = User::limit(4)->get();
    // return $collection->last();


    // $lazyCollection = collect([1, 2, 3, 4])->lazy();
    // $lazyCollection::class;
    // // Illuminate\Support\LazyCollection
    // return $lazyCollection->all();












    // membuat mehtode baru
    // \Illuminate\Support\Collection::macro('sumOfSquares', function () {
    //     return $this->map(function ($value) {
    //         return 'data : ' . $value; // Menghitung kuadrat
    //     }); // Menghitung jumlah dari kuadrat
    // });
    // // Menggunakan macro
    // $collection = User::limit(5)->get();
    // dd($collection->sumOfSquares());
});

Route::get('/invoice/{code}', [InvoiceGenerator::class, 'stream']);
Route::get('/user', [\App\Http\Controllers\UserController::class, 'index']);
Route::get('/company', [\App\Http\Controllers\CompanyController::class, 'index']);
