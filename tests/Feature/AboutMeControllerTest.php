<?php

namespace Tests\Feature;

use App\AboutMe;
use App\Http\Controllers\AboutMeController;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class AboutMeControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testUpdate_Unauthorized()
    {
        $response = $this->json('POST', 'about_me', ['about_me' => 123]);
        $response->assertStatus(401);

    }

    public function testUpdate_withInvalidData()
    {
        $user = factory(User::class)->create();
        $response = $this->actingAs($user)->json('POST', 'about_me', [
            'about_me' => 123,
            'about_me_image_file' => UploadedFile::fake()->create('file.pdf', 0, 'application/pdf'),
            'about_me_side' => 123,
            'about_me_side_image_file' => UploadedFile::fake()->create('file.pdf', 0, 'application/pdf'),
            'about_me_side_name' => 123
        ]);

        $response->assertStatus(422)
            ->assertJsonFragment(['about_me' => ['The about me must be a string.']])
            ->assertJsonFragment(['about_me_image_file' => ['The about me image file must be an image.']])
            ->assertJsonFragment(['about_me_side' => ['The about me side must be a string.']])
            ->assertJsonFragment(['about_me_side_image_file' => ['The about me side image file must be an image.']])
            ->assertJsonFragment(['about_me_side_name' => ['The about me side name must be a string.']]);
    }

    public function testUpdateRetainsSingleRowInAboutMeTable()
    {
        $user = factory(User::class)->create();
        $this->actingAs($user)->json('POST', 'about_me', [
            'about_me' => 'about me'
        ]);
        $this->actingAs($user)->json('POST', 'about_me', [
            'about_me' => 'about me'
        ]);

        $this->assertEquals(1, DB::table('about_me')->count());
    }

    public function testUpdate_withValidData()
    {
        Storage::fake('public');

        $user = factory(User::class)->create();
        $response = $this->actingAs($user)->json('POST', 'about_me', [
            'about_me' => 'about me',
            'about_me_image_file' => UploadedFile::fake()->image('image.jpeg'),
            'about_me_side' => 'about me side',
            'about_me_side_image_file' => UploadedFile::fake()->image('image.png'),
            'about_me_side_name' => 'about me side name'
        ]);

        $this->assertDatabaseHas('about_me', [
            'about_me' => 'about me',
            'about_me_image' => AboutMeController::ABOUT_ME_IMAGE . '.jpeg',
            'about_me_side' => 'about me side',
            'about_me_side_image' => AboutMeController::ABOUT_ME_SIDE_IMAGE . '.png',
            'about_me_side_name' => 'about me side name'
        ]);

        Storage::disk('public')->assertExists(
            AboutMeController::ABOUT_ME_IMAGES_FOLDER . '/' . AboutMeController::ABOUT_ME_IMAGE . '.jpeg');
        Storage::disk('public')->assertExists(
            AboutMeController::ABOUT_ME_IMAGES_FOLDER . '/' . AboutMeController::ABOUT_ME_SIDE_IMAGE . '.png');

        $response->assertStatus(200)
            ->assertJson(['status' => 'ok']);
    }

    public function testUploadImages_whenImagesExistedPreviously()
    {
        Storage::fake('public');

        $image_filename = AboutMeController::ABOUT_ME_IMAGE . '.jpeg';
        $sideImage_filename = AboutMeController::ABOUT_ME_SIDE_IMAGE.'.png';

        UploadedFile::fake()->image($image_filename)
            ->storeAs(AboutMeController::ABOUT_ME_IMAGES_FOLDER, $image_filename, 'public');
        UploadedFile::fake()->image($sideImage_filename)
            ->storeAs(AboutMeController::ABOUT_ME_IMAGES_FOLDER, $sideImage_filename, 'public');

        DB::table('about_me')->insert([
            'about_me_image' => $image_filename,
            'about_me_side_image' => $sideImage_filename
        ]);

        $user = factory(User::class)->create();
        $this->actingAs($user)->json('POST', 'about_me', [
            'about_me_image_file' => UploadedFile::fake()->image('image.png'),
            'about_me_side_image_file' => UploadedFile::fake()->image('image.jpeg'),
        ]);

        Storage::disk('public')->assertExists(
            AboutMeController::ABOUT_ME_IMAGES_FOLDER . '/' . AboutMeController::ABOUT_ME_IMAGE . '.png');
        Storage::disk('public')->assertExists(
            AboutMeController::ABOUT_ME_IMAGES_FOLDER . '/' . AboutMeController::ABOUT_ME_SIDE_IMAGE . '.jpeg');

        Storage::disk('public')->assertMissing(
            AboutMeController::ABOUT_ME_IMAGES_FOLDER . '/' . AboutMeController::ABOUT_ME_IMAGE . '.jpeg');
        Storage::disk('public')->assertMissing(
            AboutMeController::ABOUT_ME_IMAGES_FOLDER . '/' . AboutMeController::ABOUT_ME_SIDE_IMAGE . '.png');
    }

    public function testUpload_withAboutMeSideNameOnly() {
        $user = factory(User::class)->create();
        $this->actingAs($user)->json('POST', 'about_me', [
            'about_me_side_name' => "about me side name"
        ]);

        $this->assertDatabaseHas('about_me', [
            'about_me_side_name' => 'about me side name'
        ]);
    }
}
