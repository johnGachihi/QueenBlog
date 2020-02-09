<?php

namespace Tests\Unit;

use App\Http\Client\InstagramAuthClient;
use GuzzleHttp\Client;
use GuzzleHttp\Handler\MockHandler;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Middleware;
use GuzzleHttp\Psr7\Response;
use PHPUnit\Framework\TestCase;

class InstagramAuthClientTest extends TestCase
{
    private $instagramAuthClient;
    private $requestsContainer = [];

    private $mockHandler;

    protected function setUp(): void
    {
        parent::setUp();

        $requestsHistory = Middleware::history($this->requestsContainer);

        $this->mockHandler = new MockHandler();
        $handlerStack = HandlerStack::create($this->mockHandler);

        $handlerStack->push($requestsHistory);

        $client = new Client(['handler' => $handlerStack]);

        $this->instagramAuthClient = new InstagramAuthClient($client);
    }

    public function test_getShortLivedAccessToken_request()
    {
        $this->mockHandler->append(new Response(200, [],
            '{"access_token": "ACCESSTOKEN","user_id": 123456789}'));

        $this->instagramAuthClient->getShortLivedAccessToken('abc123');

        $this->assertEquals('https://api.instagram.com/oauth/access_token',
            $this->requestsContainer[0]['request']->getUri());

        $this->assertEquals('POST',
            $this->requestsContainer[0]['request']->getMethod());

        $this->assertEquals([
            'client_id' => env('INSTAGRAM_APP_ID'),
            'client_secret' => env('INSTAGRAM_APP_SECRET'),
            'grant_type' => 'authorization_code',
            'redirect_uri' => env('APP_URL') . '/' . env('INSTAGRAM_AUTH_REDIRECT_RELATIVE_URL'),
            'code' => 'abc123'
        ],
            (array)json_decode((string)$this->requestsContainer[0]['request']->getBody()));
    }

    public function test_getShortLivedAccessToken_whenRequestSuccessful()
    {
        $this->mockHandler->append(new Response(200, [],
            '{"access_token": "ACCESSTOKEN","user_id": 123456789}'));

        $shortLivedToken = $this->instagramAuthClient->getShortLivedAccessToken('abc123');

        $this->assertEquals("ACCESSTOKEN", $shortLivedToken);
    }

    public function test_getShortLivedAccessToken_whenRequestFails()
    {
        $this->mockHandler->append(new Response(200, [],
            '{"error_type": "OAuthException","code": 400,"error_message": "Matching code was not found or was already used"}'));

        $this->expectException(\Exception::class);

        $this->instagramAuthClient->getShortLivedAccessToken('abc123');
    }

    public function test_getLongLivedAccessToken_request()
    {
        $this->mockHandler->append(new Response(200, [],
            '{"access_token":"{long-lived-user-access-token}","token_type": "bearer","expires_in": 5183944}'
        ));

        $this->instagramAuthClient->getLongLivedAccessToken('abc123');

        $request = $this->requestsContainer[0]['request'];

        $this->assertEquals('https://graph.instagram.com/access_token' .
            '?grant_type=ig_exchange_token' .
            '&client_secret=' . env('INSTAGRAM_APP_SECRET') .
            '&access_token=abc123',
            $request->getUri());
        $this->assertEquals('GET', $request->getMethod());
    }

    public function test_getLongLivedAccessToken_whenRequestSuccessful() {
        $this->mockHandler->append(new Response(200, [],
            '{"access_token":"long-lived-access-token","token_type": "bearer","expires_in": 5183944}'
        ));

        $longLivedAccessToken = $this->instagramAuthClient->getLongLivedAccessToken('abc123');

        $this->assertEquals('long-lived-access-token', $longLivedAccessToken);
    }

    public function test_getLongLivedAccessToken_whenRequestUnsuccessful() { // It is unsuccessful when there is
                                                                             // no access_token in json response
        $this->mockHandler->append(new Response(200, [], 'Whatever'));

        $this->expectException(\Exception::class);

        $longLivedAccessToken = $this->instagramAuthClient
            ->getLongLivedAccessToken('abc123');
    }
}
