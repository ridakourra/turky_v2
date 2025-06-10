<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\EmployerController;
use App\Http\Controllers\EntrepriseController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/test', function (){
    return Inertia::render('Test');
});


// Auth
Route::middleware(['guest'])->group(function () {
    Route::get('/login', [AuthController::class, 'create'])->name('login');
    Route::post('/login', [AuthController::class, 'store']);
});
Route::middleware(['auth'])->group(function () {
    Route::any('/logout', [AuthController::class, 'destroy'])->name('logout');

    // Admin
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');

    // Entreprise
    Route::get('/entreprise', [EntrepriseController::class, 'edit'])->name('entreprise');
    Route::post('/entreprise', [EntrepriseController::class, 'update']);

    // Clients
    Route::resource('clients', ClientController::class);

    // Employers
    Route::resource('employers', EmployerController::class);
});
