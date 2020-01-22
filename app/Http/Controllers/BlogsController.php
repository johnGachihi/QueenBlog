<?php

namespace App\Http\Controllers;

use App\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class BlogsController extends Controller
{
    const BLOG_MAIN_IMAGES_FOLDER = 'blog-main-images';

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
            'tag' => 'nullable|string|max:50'
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

        if ($request->has('tag')) {
            $blog->tag = $request->input('tag');
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
        return view('write', ['blog' => $blog]);
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
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
