<?php

use App\Http\Controllers\AuthController;
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

Route::prefix('invoice')->group(function () {
    Route::get('{id}/{code}/stream/', [InvoiceGenerator::class, 'stream']);
    Route::get('{id}/{code}/', [InvoiceController::class, 'show']);
});


Route::middleware('auth.not.authenticated')->controller(AuthController::class)
    ->group(function () {
        Route::post('login/', 'login');
        Route::post('send-verification/', 'sendVerification');
        Route::get('check-verification/{id}/{token}/', 'checkVerification');
        Route::post('send-forgot-password/', 'sendForgotPassword');
        Route::get('check-reset-password/{id}/{token}/', 'checkResetPassword');
        Route::post('reset-password/{id}/{token}/', 'resetPassword');
    });


// 

Route::middleware('auth:sanctum')->controller(AuthController::class)
    ->group(function () {
        Route::post('logout/', 'logout');
        Route::post('check-login/', 'checkLogin');

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
                Route::post('/reset-password/', 'resetPassword');
            });

        // Product
        Route::controller(ProductController::class)
            ->prefix('product')
            ->group(function () {
                Route::get('/', 'index');
                Route::get('/{id}/', 'show');

                Route::middleware('company')->group(function () {
                    Route::middleware(['role:user'])
                        ->group(function () {
                            Route::post('/', 'store');
                        });

                    Route::put('/{id}/', 'update');
                    Route::delete('/{id}/', 'destroy');
                });
            });


        // Invoice
        Route::controller(InvoiceController::class)
            ->prefix('invoice')
            ->group(function () {

                Route::get('/', 'index');
                Route::middleware('company')->group(function () {


                    // Route::get('/{id}/{code}/', 'show');
                    Route::put('/{id}/', 'update');
                    Route::middleware(['role:user'])
                        ->group(function () {
                            Route::post('/', 'store');
                        });

                    Route::delete('/{id}/', 'destroy');
                });
            });
    });
