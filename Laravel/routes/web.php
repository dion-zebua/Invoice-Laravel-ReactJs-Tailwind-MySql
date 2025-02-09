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
    return view('welcome');
});

// Route::get('/invoice/{code}', [InvoiceGenerator::class, 'stream']);
// Route::get('/user', [\App\Http\Controllers\UserController::class, 'index']);
// Route::get('/company', [\App\Http\Controllers\CompanyController::class, 'index']);
// Route::get('/invoice', [\App\Http\Controllers\InvoiceController::class, 'index']);
// Route::get('/product', [\App\Http\Controllers\ProductController::class, 'index']);
