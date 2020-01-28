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

// TODO: Use controllers


use App\Blog;

// Visitors
Route::get('/', function () {
    $tags = Blog::where('status', 'published')->orderBy('tag')->pluck('tag')->unique();
    $categories = $tags->map(function ($tag, $key) {
        $category = [];
        $category['tag'] = $tag;
        $category['image'] = Blog::where('tag', $tag)->orderBy('id', 'desc')->pluck('main_image_filename')->first();
        return $category;
    });
    return view('visitors.index', [
        'blogs' => Blog::where('status', 'published')->orderBy('id', 'desc')->take(10)->get(),
        'categories' => $categories
    ]);
})->name('index');

Route::get('/post/{blog}', function (Blog $blog) {
    $blog->views = $blog->views + 1;
    $blog->save();

    $tags = Blog::where('status', 'published')->orderBy('tag')->pluck('tag')->unique();
    $categories = $tags->map(function ($tag, $key) {
        $category = [];
        $category['tag'] = $tag;
        $category['image'] = Blog::where('tag', $tag)->orderBy('id', 'desc')->pluck('main_image_filename')->first();
        return $category;
    });
    return view('visitors.single-post', [
        'blog' => $blog,
        'categories' => $categories,
        'blogs' => Blog::where('status', 'published')->orderBy('id', 'desc')->take(10)->get(),
    ]);
});

Route::get('/categories/{tag?}', function ($tag = null) {
    $tags = Blog::where('status', 'published')->orderBy('tag')->pluck('tag')->unique();
    if($tag == null) {
        $tag = $tags->get(0);
    }
    return view('visitors.categories', [
        'tags' => $tags,
        'blogs' => Blog::where('status', 'published')->where('tag', $tag)->get()
    ]);
});


// Renee
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
Route::delete('blog/{blog}', 'BlogsController@destroy');
Route::get('blog/paginated', 'BlogsController@paginated');
Route::get('blog/like/{blog}', 'BlogsController@like');
