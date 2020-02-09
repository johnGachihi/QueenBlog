<?php

namespace Tests\Feature;

use App\InstagramAccessToken;
use App\User;
use GuzzleHttp\Client;
use GuzzleHttp\Handler\MockHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Middleware;
use GuzzleHttp\Psr7\Response;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InstagramProfileMediaControllerTest extends TestCase
{
    use RefreshDatabase;

    private $client;
    private $requestsContainer = [];
    private $mockHandler;
    private $user;

    protected function setUp(): void
    {
        parent::setUp();

        $requestsHistory = Middleware::history($this->requestsContainer);

        $this->mockHandler = new MockHandler();
        $handlerStack = HandlerStack::create($this->mockHandler);

        $handlerStack->push($requestsHistory);

        $this->client = new Client(['handler' => $handlerStack]);

        $this->app->instance(\GuzzleHttp\Client::class, $this->client);

        $this->user = factory(User::class)->create();

    }

    public function test_profile_request()
    {
        $this->mockHandler->append(new Response(200));

        // TODO: use a factory instead
        $instagram_access_token = new InstagramAccessToken();
        $instagram_access_token->long_lived_access_token = 'long-lived-access-token';
        $instagram_access_token->save();

        $this->actingAs($this->user)->json('GET', 'instagram-profile');

        $request = $this->requestsContainer[0]['request'];

        $this->assertEquals(
            'https://graph.instagram.com/me?fields=username&access_token='
            . $instagram_access_token->long_lived_access_token,
            $request->getUri()
        );

        $this->assertEquals('GET', $request->getMethod());
    }

    public function test_profile_whenRequestSuccessful()
    {
        $this->mockHandler->append(new Response(200, [], '{"username": "waithaka859"}'));

        // TODO: use a factory instead
        $instagram_access_token = new InstagramAccessToken();
        $instagram_access_token->long_lived_access_token = 'long-lived-access-token';
        $instagram_access_token->save();

        $response = $this->actingAs($this->user)->json('GET', 'instagram-profile');

        $response->assertJson(['username' => 'waithaka859']);
    }

    public function test_profile_whenRequestFails() {
        $this->mockHandler->append(new Response(400));

        // TODO: use a factory instead
        $instagram_access_token = new InstagramAccessToken();
        $instagram_access_token->long_lived_access_token = 'long-lived-access-token';
        $instagram_access_token->save();


        $response = $this->actingAs($this->user)->json('GET', 'instagram-profile');

        $response->assertStatus(400)
            ->assertJson(['error' => 'true']);
    }

    public function test_profile_whenTheresNoToken() {
        $this->mockHandler->append(new Response(400));


        $response = $this->actingAs($this->user)->json('GET', 'instagram-profile');

        $response->assertStatus(400)
            ->assertJson(['error' => 'true']);
    }
}
