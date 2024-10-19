<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\InvoiceController;
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


Route::group(['middleware' => ['auth.not.authenticated']], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('check-verifikasi/{id}/{token}', [AuthController::class, 'checkVerifikasi']);
    Route::post('forgot-password/', [AuthController::class, 'forgotPassword']);
    Route::post('reset-password/{id}/{token}', [AuthController::class, 'resetPassword']);
});


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('send-verifikasi/', [AuthController::class, 'sendVerifikasi']);

    // User
    Route::prefix('user')->group(function () {
        Route::middleware(['role:admin'])->group(function () {
            Route::post('/', [UserController::class, 'store']);
            Route::delete('/{id}', [UserController::class, 'destroy']);
        });
        Route::get('/{id}', [UserController::class, 'show']);
        Route::put('/{id}', [UserController::class, 'update']);

    });

    // Company
    Route::prefix('company')->group(function () {
        // Route::middleware(['role:admin'])->group(function () {});
        // Route::post('/', [CompanyController::class, 'store']);
        // Route::delete('/{id}', [CompanyController::class, 'destroy']);

        Route::get('/{id}', [CompanyController::class, 'show']);
        Route::put('/{id}', [CompanyController::class, 'update']);
    });

    // Product
    Route::prefix('product')->group(function () {
        Route::middleware(['role:user'])->group(function () {
            Route::post('/', [ProductController::class, 'store']);
        });

        Route::get('/{id}', [ProductController::class, 'show']);
        Route::put('/{id}', [ProductController::class, 'update']);
        Route::delete('/{id}', [ProductController::class, 'destroy']);
    });


    // Invoice
    Route::prefix('invoice')->group(function () {

        // Route::put('/{id}', [InvoiceController::class, 'update']);
        // Route::get('/{id}', [InvoiceController::class, 'show']);

        Route::middleware(['role:user'])->group(function () {
            Route::post('/', [InvoiceController::class, 'store']);
        });
        Route::delete('/{id}', [InvoiceController::class, 'destroy']);
    });
});
