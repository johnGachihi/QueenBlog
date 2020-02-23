<?php

namespace App\Http\Controllers;

use App\Blog;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Masterminds\HTML5;

// TODO: Remove unused methods.
class BlogsController extends Controller
{
    const BLOG_MAIN_IMAGES_FOLDER = 'blog-main-images';
    const BLOG_IMAGES_FOLDER = 'blog-images';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $this->validateRequestHasBlogContent($request);
        $blog = $this->persistBlogData($request);

        return response()->json(['status' => 'ok', 'blog_id' => $blog->id]);
    }

    private function validateRequestHasBlogContent(Request $request)
    {
        $request->validate([
            'content' => 'required'
        ]);
    }

    private function persistBlog(Array $blogData)
    {
        $blog = new Blog();
        $blog->content = $blogData['content'];

        $blog->save();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Blog $blog
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Blog $blog)
    {
        $this->validateUpdateRequest($request);
        $this->persistBlogData($request, $blog);
        return response()->json(['status' => 'ok']);
    }

    private function validateUpdateRequest(Request $request)
    {
        $request->validate([
            'title' => 'nullable|string',
            'content' => 'required|string',
            'main_image' => 'nullable|image',
            'tag' => 'nullable|string|max:50',
            'status' => Rule::in(['draft', 'published'])
        ]);
    }

    private function persistBlogData(Request $request, Blog $blog = null): Blog
    {
        if($blog == null) $blog = new Blog();

        if ($request->has('title')) {
            $blog->title = $request->input('title');
        }

        $blog->content = $request->input('content');

        if ($request->has('main_image')) {
            $blog->main_image_filename = $request->file('main_image')->hashName();
            $request->file('main_image')->store(self::BLOG_MAIN_IMAGES_FOLDER, 'public');
        }

        if ($request->has('tag') && $request->tag) {
            $blog->tag = $request->input('tag');
        }


        if ($request->has('status')) {
            if ($request->status === "published" && $blog->status !== 'published') {
                $blog->published_on = Carbon::now();
            }
            $blog->status = $request->input('status');
        }

        $blog->save();
        return $blog;
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Blog $blog
     * @return \Illuminate\View\View
     */
    public function show(Blog $blog)
    {
        return view('write', [
            'blog' => $blog,
            'tags' => Blog::select('tag')->distinct()->get()->transform(function ($tag) {
                return $tag['tag'];
            })
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Blog $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Blog $blog
     */
    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json(['status' => 'ok']);
    }

    public function paginated() {
        $paginator = Blog::where('status', 'published')->orderBy('updated_at', 'desc')->take(10)->paginate(10);
        $paginator->getCollection()->transform(function ($blog) {
            $blog_content_preview = '';
            $dom_doc = new HTML5();
            $blog_content_dom = $dom_doc->loadHTML($blog->content);
            if ($first_p = $blog_content_dom->getElementsByTagName('p')->item(0)) {
                $blog_content_preview = $first_p->textContent;
            }
            $blog->content = $blog_content_preview;
            return $blog;
        });

        return $paginator;
    }

    public function like(Blog $blog) {
        $blog->likes = $blog->likes + 1;
        $blog->save();

        return response()->json(['status' => 'ok']);
    }

    public function blogImageUpload(Request $request) {
        $request->validate([
            'upload' => 'required|image'
        ]);

        $path = $request->file('upload')->store(self::BLOG_IMAGES_FOLDER, 'public');

        if ($path) {
            return response()->json(['url' => asset("storage/$path")]);
        } else {
            return response()->json(['error' => ['message' => 'Error while uploading.']]);
        }

    }
}
