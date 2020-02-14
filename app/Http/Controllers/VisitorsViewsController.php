<?php

namespace App\Http\Controllers;

use App\AboutMe;
use App\Blog;
use Illuminate\Http\Request;

class VisitorsViewsController extends Controller
{
    public function homePage() {
        return view('visitors.index', [
            'blogs' => $this->getBlogPreviews(),
            'categories' => $this->getCategories(),
            'about_me' => AboutMe::first()
        ]);
    }




    private function getCategories() {
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

    private function getBlogPreviews() {
        $blogs = Blog::where('status', 'published')
            ->orderBy('published_on', 'desc')
            ->orderBy('created_at', 'desc')
            ->take(10)
            ->get();

        return shortenBlogContent($blogs);
    }

    private function getBlogPreviewsByTag($tag) {
        $blogs = Blog::where('status', 'published')
            ->where('tag', $tag)
            ->orderBy('published_on', 'desc')
            ->orderBy('created_at', 'desc')
            ->get();

        return shortenBlogContent($blogs);
    }

    private function shortenBlogContent($blogs) {
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
