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

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('write')->group(function () {
    Route::get('write', function () {
        return view('write');
    });
});

/**
 * Routes for blogs
 */
Route::post('blog', 'BlogsController@store');
Route::put('blog/{blog}', 'BlogsController@update');
