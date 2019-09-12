<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\Auth\LoginController;
use Illuminate\Http\Request;

Auth::routes();

Route::middleware('auth')->resource('/api/posts', 'PostController');
Route::middleware('auth')->resource('/api/users', 'UserController');
Route::middleware('auth')->resource('/api/categories', 'CategoryController');
Route::get('/user/isAuth', 'UserController@isAuth');
Route::get('/home', 'HomeController@index')->name('home');

Route::fallback(function () {
    return view('welcome');
});

