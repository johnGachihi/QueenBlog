<?php

namespace Tests\Feature;

use App\Blog;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogsControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testStore_withoutBlogContent()
    {
        $response = $this->json('POST', '/blog');

        $response->assertStatus(422);
    }

    public function testStore_withBlogContent()
    {
        $response = $this->json('POST', '/blog', ['blog_content' => 'abc']);

        $response->assertStatus(200)
            ->assertJson(['status' => 'ok']);
        $this->assertDatabaseHas('blogs', ['content' => 'abc']);

    }

    public function testUpdate_onNonExistentBlog() {
        $response = $this->json('PUT', '/blog/1');

        $response->assertStatus(404);
    }

    public function testUpdate_onExistingBlog_ButWithoutBlogContent() {
        $blog = factory(Blog::class)->create();

        $response = $this->json('PUT', '/blog/' . $blog->id);

        $response->assertStatus(422);
    }

    public function testUpdate_onExistingBlog_WithBlogContent()
    {
        $blog = factory(Blog::class)->create();

        $response = $this->json('PUT', '/blog/' . $blog->id, ['blog_content' => 'abc']);

        $this->assertDatabaseHas('blogs', ['content' => 'abc']);
        $response->assertStatus(200);
        $response->assertJson(['status' => 'ok']);
    }
}
