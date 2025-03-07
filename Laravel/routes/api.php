<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\InvoiceGenerator;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('invoice/{id}/{code}/stream/', [InvoiceGenerator::class, 'stream']);

Route::middleware('auth.not.authenticated')->controller(AuthController::class)
    ->group(function () {
        Route::post('login/', 'login');
        Route::post('check-verifikasi/{id}/{token}/', 'checkVerifikasi');
        Route::post('forgot-password//', 'forgotPassword');
        Route::post('reset-password/{id}/{token}/', 'resetPassword');
    });


// 

Route::middleware(['auth:sanctum', 'company'])->controller(AuthController::class)
    ->group(function () {
        Route::post('logout/', 'logout');
        Route::post('send-verifikasi/', 'sendVerifikasi');

        // User
        Route::controller(UserController::class)
            ->prefix('user')
            ->group(function () {
                Route::middleware(['role:admin'])
                    ->group(function () {
                        Route::get('/', 'index');
                        Route::post('/', 'store');
                        Route::delete('/{id}/', 'destroy');
                    });
                Route::get('/{id}/', 'show');
                Route::put('/{id}/', 'update');
            });

        // Product
        Route::controller(ProductController::class)
            ->prefix('product')
            ->group(function () {
                Route::get('/', 'index');

                Route::middleware(['role:user'])
                    ->group(function () {
                        Route::post('/', 'store');
                    });

                Route::get('/{id}/', 'show');
                Route::put('/{id}/', 'update');
                Route::delete('/{id}/', 'destroy');
            });


        // Invoice
        Route::controller(InvoiceController::class)
            ->prefix('invoice')
            ->group(function () {

                Route::get('/', 'index');

                Route::get('/{id}/{code}/', 'show');
                Route::put('/{id}/', 'update');
                Route::middleware(['role:user'])
                    ->group(function () {
                        Route::post('/', 'store');
                    });

                Route::delete('/{id}/', 'destroy');
            });
    });
