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
Route::get('/', 'VisitorsViewsController@homePage')->name('index');

Route::get('/post/{blog}', 'VisitorsViewsController@singlePost');

Route::get('/categories/{tag?}', 'VisitorsViewsController@categories')->name('categories');

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

if(!function_exists('getCategories')) {
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
}

if(!function_exists('getBlogPreviews')) {
    function getBlogPreviews()
    {
        $blogs = Blog::where('status', 'published')
            ->orderBy('published_on', 'desc')
            ->orderBy('created_at', 'desc')
            ->take(10)
            ->get();

        return shortenBlogContent($blogs);
    }
}

if(!function_exists('getBlogPreviewsByTag')) {
    function getBlogPreviewsByTag($tag)
    {
        $blogs = Blog::where('status', 'published')
            ->where('tag', $tag)
            ->orderBy('published_on', 'desc')
            ->orderBy('created_at', 'desc')
            ->get();

        return shortenBlogContent($blogs);
    }
}

if(!function_exists('shortenBlogContent')) {
    function shortenBlogContent($blogs)
    {
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
}

Route::post('contact', 'ContactMessageController@arbitrateMessage');

Route::get('instagram-media', 'InstagramProfileMediaController@media');

// Renee
Route::middleware(['auth'])->group(function () {

    Route::prefix('only/juli')->group(function () {
        Route::redirect('/', 'juli/blogs');  //TODO: check the redirect url

        Route::get('write', function () {
            return view('write', [
                'tags' => Blog::select('tag')->distinct()->get()->transform(function ($tag) {
                    return $tag['tag'];
                })
            ]);
        })->name('write');

        Route::get('blogs', function () {
            return view('blogs', [
                'draftBlogs' => Blog::where('status', 'draft')->orderBy('created_at', 'desc')->get(),
                'publishedBlogs' => Blog::where('status', 'published')
                    ->orderBy('published_on', 'desc')
                    ->orderBy('created_at', 'desc')
                    ->get()
            ]);
        })->name('blogs');

        Route::get('blog/{blog}', 'BlogsController@show')->name('blog-edit');

        Route::get('instagram-auth', 'InstagramAuthController@auth')->name('instagram-auth');

        Route::get('fold-images', 'FoldImagesEditController@view');
    });

    Route::post('about_me', 'AboutMeController@update');

    Route::get('instagram-profile', 'InstagramProfileMediaController@profile');

    Route::post('blog-image-upload', 'BlogsController@blogImageUpload');

    Route::post('fold_image', 'FoldImagesEditController@save');
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
