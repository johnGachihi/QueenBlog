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

use App\AboutMe;
use App\Blog;
use Masterminds\HTML5;


// Visitors
Route::get('/', function () {
    return view('visitors.index', [
        'blogs' => getBlogPreviews(),
        'categories' => getCategories(),
        'about_me' => AboutMe::first()
    ]);
})->name('index');

Route::get('/post/{blog}', function (Blog $blog) {
    $blog->views = $blog->views + 1;
    $blog->save();

    return view('visitors.single-post', [
        'blog' => $blog,
        'categories' => getCategories(),
        'blogs' => getBlogPreviews(),
        'about_me' => AboutMe::first()
    ]);
});

Route::get('/categories/{tag?}', function ($tag = null) {
    $tags = Blog::where('status', 'published')->orderBy('tag')->pluck('tag')->unique();

    if($tag == null) {
        $tag = $tags->get(0);
    }

    return view('visitors.categories', [
        'active_tag' => $tag,
        'tags' => $tags,
        'blogs' => getBlogPreviewsByTag($tag),
        'about_me' => AboutMe::first()
    ]);
})->name('categories');

Route::get('/aboutme', function () {
    return view('visitors.about-me', [
        'categories' => getCategories(),
        'blogs' => getBlogPreviews(),
        'about_me' => AboutMe::first()
    ]);
})->name('aboutme');

Route::get('/contact', function () {
    return view('visitors.contact', [
        'categories' => getCategories(),
        'blogs' => getBlogPreviews(),
        'about_me' => AboutMe::first()
    ]);
})->name('contact');

function getCategories() {
    $tags = Blog::where('status', 'published')->orderBy('tag')->pluck('tag')->unique();
    return $tags->map(function ($tag) {
        $category = [];
        $category['tag'] = $tag;
        $category['image'] = Blog::where('tag', $tag)
            ->orderBy('published_on', 'desc')
            ->orderBy('created_at', 'desc')
            ->pluck('main_image_filename')
            ->first();
        return $category;
    });
}

function getBlogPreviews() {
    $blogs = Blog::where('status', 'published')
        ->orderBy('published_on', 'desc')
        ->orderBy('created_at', 'desc')
        ->take(10)
        ->get();

    return shortenBlogContent($blogs);
}

function getBlogPreviewsByTag($tag) {
    $blogs = Blog::where('status', 'published')
        ->where('tag', $tag)
        ->orderBy('published_on', 'desc')
        ->orderBy('created_at', 'desc')
        ->get();

    return shortenBlogContent($blogs);
}

function shortenBlogContent($blogs) {
    return $blogs->map(function ($blog) {
        $blog_content_preview = '';
        $dom_doc = new HTML5();
        $blog_content_dom = $dom_doc->loadHTML($blog->content);
        if ($first_p = $blog_content_dom->getElementsByTagName('p')->item(0)) {
            $blog_content_preview = $first_p->textContent;
        }
        $blog->content = $blog_content_preview;
        return $blog;
    });
}

Route::post('contact', 'ContactMessageController@arbitrateMessage');

Route::get('instagram-media', 'InstagramProfileMediaController@media');

// Renee
Route::middleware(['auth'])->group(function () {

    Route::prefix('only/juli')->group(function () {
        Route::redirect('/', 'juli/blogs');  //TODO: check the redirect url

        Route::get('write', function () {
            return view('write');
        })->name('write');

        Route::get('blogs', function () {
            return view('blogs', [
                'draftBlogs' => Blog::where('status', 'draft')->orderBy('created_at', 'desc')->get(),
                'publishedBlogs' => Blog::where('status', 'published')
                    ->orderBy('published_on', 'desc')
                    ->orderBy('created_at', 'desc')
                    ->get()
            ]);
        });

        Route::get('blog/{blog}', 'BlogsController@show');

        Route::get('instagram-auth', 'InstagramAuthController@auth');
    });

    Route::post('about_me', 'AboutMeController@update');

    Route::get('instagram-profile', 'InstagramProfileMediaController@profile');

    Route::post('blog-image-upload', 'BlogsController@blogImageUpload');
});

/**
 * Routes for blogs
 */
Route::post('blog', 'BlogsController@store');
Route::post('blog/{blog}', 'BlogsController@update');
Route::delete('blog/{blog}', 'BlogsController@destroy');
Route::get('blog/paginated', 'BlogsController@paginated');
Route::get('blog/like/{blog}', 'BlogsController@like');



Auth::routes();

// TODO: Remove this
Route::get('/home', 'HomeController@index')->name('home');
