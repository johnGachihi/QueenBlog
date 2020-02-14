<?php

namespace Tests\Feature;

use App\AboutMe;
use App\Blog;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class VisitorsViewsControllerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        factory(Blog::class, 20)->create();
        factory(AboutMe::class)->create();
    }


    public function testHomePage()
    {
        $response = $this->get('/');

        $response->assertStatus(200)
            ->assertViewIs('visitors.index')
            ->assertViewHasAll([
                'blogs' => $this->getBlogPreviews(),
                'categories' => $this->getCategories(),
                'about_me' => AboutMe::first()
            ]);
    }

    public function testSinglePost() {
        $blog = Blog::first();

        $response = $this->get('/post' . $blog->id);

        $response->assertStatus(200)
            ->assertViewIs('visitors.single-post')
            ->assertViewHas([
                'blog' => $blog,
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
