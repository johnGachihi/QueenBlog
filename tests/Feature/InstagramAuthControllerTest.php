<?php

namespace Tests\Feature;

use App\Http\Client\InstagramAuthClient;
use App\User;
use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Middleware;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InstagramAuthControllerTest extends TestCase
{
    use RefreshDatabase;

    private $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory(User::class)->create();
    }

    protected function tearDown(): void
    {
        parent::tearDown();

        \Mockery::close();
    }


    public function test_auth_withoutInstagramAuthCode() {
        $response = $this->actingAs($this->user)->get('/only/juli/instagram-auth');
        $response->assertStatus(200)
            ->assertViewIs('instagram-auth');
    }

//    public function test_auth_withInstagramAuthCode_() {
    public function test_auth_withInstagramAuthCode_andGettingShortLivedAccessTokenFails() {
        $mockInstagramAuthClient = $this->createStub(InstagramAuthClient::class);
        $mockInstagramAuthClient->method('getShortLivedAccessToken')
            ->willThrowException(new \Exception());

        $this->app->instance(InstagramAuthClient::class, $mockInstagramAuthClient);

        $response = $this->actingAs($this->user)->json(
            'GET', '/only/juli/instagram-auth', ["code"=>"123qwe#_"]);

        $response->assertStatus(200)
            ->assertViewIs('instagram-auth')
            ->assertViewHas('message', 'Authentication error. Please try again');
    }

    public function test_auth_withInstagramAuthCode_andGettingShortLivedAccessTokenSucceeds() {
        $mockInstagramAuthClient = $this->createMock(InstagramAuthClient::class);
        $mockInstagramAuthClient->method('getShortLivedAccessToken')
            ->willReturn('short-lived-access-token');

        $this->app->instance(InstagramAuthClient::class, $mockInstagramAuthClient);

        $mockInstagramAuthClient->expects($this->once())
            ->method('getLongLivedAccessToken')
            ->with('short-lived-access-token');

        $response = $this->actingAs($this->user)->json(
            'GET', '/only/juli/instagram-auth', ["code"=>"123qwe#_"]);
    }

    public function test_auth_withInstagramAuthCode_andGettingLongLivedAccessTokenSucceeds() {
        $mockInstagramAuthClient = $this->createMock(InstagramAuthClient::class);
        $mockInstagramAuthClient->method('getShortLivedAccessToken')
            ->willReturn('short-lived-access-token');
        $mockInstagramAuthClient->method('getLongLivedAccessToken')
            ->willReturn('long-lived-access-token');

        $this->app->instance(InstagramAuthClient::class, $mockInstagramAuthClient);

        $response = $this->actingAs($this->user)->json(
            'GET', '/only/juli/instagram-auth', ["code"=>"123qwe#_"]);

        $response->assertStatus(200)
            ->assertViewIs('instagram-auth')
            ->assertViewHas('message', 'Authentication successful');

        $this->assertDatabaseHas('instagram_access_token', [
            'long_lived_access_token' => 'long-lived-access-token'
        ]);
    }
}
