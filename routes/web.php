<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\StudentController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/example', function () {
    return view('example');
});
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('add-student', [StudentController::class, 'create'])->name('add-student');
Route::post('create-student', [StudentController::class, 'CreateStudent'])->name('createStudent');
// Route::get('add-student', [App\Http\Controllers\StudentController::class, 'create'])->name('add-student');
