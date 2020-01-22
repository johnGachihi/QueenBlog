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

use App\Blog;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('only/juli')->group(function () {
    Route::get('write', function () {
        return view('write');
    })->name('write');
    Route::get('blogs', function () {
        return view('blogs', [
            'draftBlogs' => Blog::where('status', 'draft')->get(),
            'publishedBlogs' => Blog::where('status', 'published')->get()
        ]);
    });
    Route::get('blog/{blog}', 'BlogsController@show');
});

/**
 * Routes for blogs
 */
Route::post('blog', 'BlogsController@store');
Route::post('blog/{blog}', 'BlogsController@update');
