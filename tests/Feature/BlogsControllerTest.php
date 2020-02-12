<?php

namespace Tests\Feature;

use App\Blog;
use App\Http\Controllers\BlogsController;
use App\User;
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
        $response = $this->json('POST', '/blog', ['content' => 'abc']);

        $response->assertStatus(200)
            ->assertJsonFragment(['status' => 'ok'])
            ->assertJsonFragment(['blog_id' => 1]); // `1` because it will always be only and first entry in table
        $this->assertDatabaseHas('blogs', ['content' => 'abc']);

    }

    public function testUpdate_onNonExistentBlog()
    {
        $response = $this->json('POST', '/blog/1');

        $response->assertStatus(404);
    }

    public function testUpdate_onExistingBlog_ButWithoutBlogContent()
    {
        $blog = factory(Blog::class)->create();

        $response = $this->json('POST', '/blog/' . $blog->id);

        $response->assertStatus(422);
    }

    public function testUpdate_OnExistingBlog_WithInvalidData()
    {
        $blog = factory(Blog::class)->create();

        $response = $this->json('POST', '/blog/' . $blog->id, [
            'title' => 123,
            'content' => $blog_content = $this->faker->paragraphs(10, true),
            'main_image' => UploadedFile::fake()->create('file.pdf', 0, 'application/pdf'),
            'tag' => 123
        ]);

        $response->assertStatus(422)
            ->assertJsonFragment(['title' => ['The title must be a string.']])
            ->assertJsonFragment(['main_image' => ['The main image must be an image.']])
            ->assertJsonFragment(['tag' => ['The tag must be a string.']]);
    }

    public function testUpdate_OnExistingBlog_WithInvalidStatus()
    {
        $blog = factory(Blog::class)->create();

        $response = $this->json('POST', '/blog/' . $blog->id, [
            'content' => $blog_content = $this->faker->paragraphs(10, true),
            'status' => 123
        ]);

        $response->assertStatus(422)
            ->assertJsonFragment(['status' => ['The selected status is invalid.']]);
    }

    public function testUpdate_onExistingDraftBlog_WithPublishedStatus()
    {
        $blog = factory(Blog::class)->create([
            'status' => 'draft'
        ]);

        $response = $this->json('POST', '/blog/' . $blog->id, [
            'content' => $blog_content = $this->faker->paragraphs(10, true),
            'status' => 'published'
        ]);

        $response->assertStatus(200)
            ->assertJson(['status' => 'ok']);
        $this->assertDatabaseHas('blogs', ['status' => 'published'])
            ->assertDatabaseMissing('blogs', ['status' => 'draft']);
    }

    public function testUpdate_onExistingPublishedBlog_WithDraftStatus()
    {
        $blog = factory(Blog::class)->create([
            'status' => 'published'
        ]);

        $response = $this->json('POST', '/blog/' . $blog->id, [
            'content' => $blog_content = $this->faker->paragraphs(10, true),
            'status' => 'draft'
        ]);

        $response->assertStatus(200)
            ->assertJson(['status' => 'ok']);
        $this->assertDatabaseHas('blogs', ['status' => 'draft'])
            ->assertDatabaseMissing('blogs', ['status' => 'published']);
    }

    public function testUpdate_onExistingBlog_WithBlogContentAndTitle()
    {
        $blog = factory(Blog::class)->create();

        $response = $this->json('POST', '/blog/' . $blog->id, [
            'title' => $blog_title = $this->faker->sentence,
            'content' => $blog_content = $this->faker->paragraphs(10, true)
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

        $response = $this->json('POST', '/blog/' . $blog->id, [
            'title' => $blog_title = $this->faker->sentence,
            'content' => $blog_content = $this->faker->paragraphs(10, true),
            'main_image' => $blog_main_image = UploadedFile::fake()->image('filename.jpg'),
            'tag' => $blog_tag = $this->faker->word
        ]);

        $this->assertDatabaseHas('blogs', [
            'title' => $blog_title,
            'content' => $blog_content,
            'main_image_filename' => $blog_main_image->hashName(),
            'tag' => $blog_tag
        ]);
        Storage::disk('public')->assertExists(
            BlogsController::BLOG_MAIN_IMAGES_FOLDER . '/' . $blog_main_image->hashName());
        $response->assertStatus(200)
            ->assertJson(['status' => 'ok']);
    }

    public function testDestroy_withNonExistentBlog() {
        $response = $this->json('DELETE', '/blog/1');

        $response->assertStatus(404);
    }

    public function testDestroy_withExistingBlog() {
        $blog = factory(Blog::class)->create();

        $response = $this->json('DELETE', '/blog/'.$blog->id);

        $this->assertDatabaseMissing('blogs', ['id' => $blog->id]);
        $response->assertJson(['status' => 'ok']);
    }

    public function testLike() {
        $blog = factory(Blog::class)->create();
        $previous_likes = $blog->likes;

        $response = $this->json('GET', '/blog/like/'.$blog->id);

        $response->assertStatus(200)
            ->assertJson(['status' => 'ok']);
        $this->assertDatabaseHas('blogs', ['likes' => $previous_likes + 1]);
    }


    public function  testBlogImageUpload_withoutUpload() {
        $user = factory(User::class)->create();
        $response = $this->actingAs($user)->json('POST', 'blog-image-upload');

        $response->assertStatus(422);
        $response->assertJsonFragment(['upload' => ['The upload field is required.']]);
    }

    public function testBlogImageUpload_withInvalidUpload() {
        $user = factory(User::class)->create();
        $response = $this->actingAs($user)->json('POST', 'blog-image-upload', [
            'upload' => UploadedFile::fake()->create('file.pdf', 0, 'application/pdf'),
        ]);

        $response->assertStatus(422);
        $response->assertJsonFragment(['upload' => ['The upload must be an image.']]);
    }

    public function testBlogImageUpload_returnsImagePathAndName() {
        Storage::fake('public');
        $fakeUpload = UploadedFile::fake()->image('image.png');

        $user = factory(User::class)->create();
        $response = $this->actingAs($user)->json('POST', 'blog-image-upload', [
            'upload' => $fakeUpload,
        ]);

        $response->assertStatus(200);
        $response->assertJsonFragment(['url' =>
            asset('storage' . '/' . BlogsController::BLOG_IMAGES_FOLDER . '/' . $fakeUpload->hashName())]);

        Storage::disk('public')->assertExists(
            BlogsController::BLOG_IMAGES_FOLDER . '/' . $fakeUpload->hashName());
    }
}
