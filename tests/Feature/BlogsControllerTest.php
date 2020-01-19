<?php

namespace Tests\Feature;

use App\Blog;
use App\Http\Controllers\BlogsController;
use Illuminate\Foundation\Testing\Constraints\HasInDatabase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class BlogsControllerTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function testStore_withoutBlogContent()
    {
        $response = $this->json('POST', '/blog');

        $response->assertStatus(422);
    }

    public function testStore_withBlogContent()
    {
        $response = $this->json('POST', '/blog', ['blog_content' => 'abc']);

        $response->assertStatus(200)
            ->assertJsonFragment(['status' => 'ok'])
            ->assertJsonFragment(['blog_id' => 1]); // `1` because it will always be only and first entry in table
        $this->assertDatabaseHas('blogs', ['content' => 'abc']);

    }

    public function testUpdate_onNonExistentBlog()
    {
        $response = $this->json('PUT', '/blog/1');

        $response->assertStatus(404);
    }

    public function testUpdate_onExistingBlog_ButWithoutBlogContent()
    {
        $blog = factory(Blog::class)->create();

        $response = $this->json('PUT', '/blog/' . $blog->id);

        $response->assertStatus(422);
    }

    public function testUpdate_OnExistingBlog_WithInvalidData()
    {
        $blog = factory(Blog::class)->create();

        $response = $this->json('PUT', '/blog/' . $blog->id, [
            'blog_title' => 123,
            'blog_content' => $blog_content = $this->faker->paragraphs(10, true),
            'blog_main_image' => UploadedFile::fake()->create('file.pdf', 0, 'application/pdf'),
            'blog_tag' => 123
        ]);

        $response->assertStatus(422)
            ->assertJsonFragment(['blog_title' => ['The blog title must be a string.']])
            ->assertJsonFragment(['blog_main_image' => ['The blog main image must be an image.']])
            ->assertJsonFragment(['blog_tag' => ['The blog tag must be a string.']]);
    }

    public function testUpdate_onExistingBlog_WithBlogContentAndTitle()
    {
        $blog = factory(Blog::class)->create();

        $response = $this->json('PUT', '/blog/'.$blog->id, [
            'blog_title' => $blog_title = $this->faker->sentence,
            'blog_content' => $blog_content = $this->faker->paragraphs(10, true)
        ]);

        $this->assertDatabaseHas('blogs', [
            'title' => $blog_title,
            'content' => $blog_content
        ]);
        $response->assertStatus(200)
            ->assertJson(['status' => 'ok']);
    }

    public function testUpdate_onExistingBlog_WithAllData()
    {
        Storage::fake('public');
        $blog = factory(Blog::class)->create();

        $response = $this->json('PUT', '/blog/'.$blog->id, [
            'blog_title' => $blog_title = $this->faker->sentence,
            'blog_content' => $blog_content = $this->faker->paragraphs(10, true),
            'blog_main_image' => $blog_main_image = UploadedFile::fake()->image('filename.jpg'),
            'blog_tag' => $blog_tag = $this->faker->word
        ]);

        $this->assertDatabaseHas('blogs', [
            'title' => $blog_title,
            'content' => $blog_content,
            'main_image_filename' => $blog_main_image->hashName(),
            'tag' => $blog_tag
        ]);
        Storage::disk('public')->assertExists(
            BlogsController::BLOG_MAIN_IMAGES_FOLDER. '/' .$blog_main_image->hashName());
        $response->assertStatus(200)
            ->assertJson(['status' => 'ok']);
    }
}
