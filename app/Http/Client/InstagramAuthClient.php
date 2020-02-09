<?php


namespace App\Http\Client;


use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Log;

class InstagramAuthClient
{
    private $client;

    public function __construct(\GuzzleHttp\Client $client)
    {
        $this->client = $client;
    }

    public function getShortLivedAccessToken(string $code): string
    {
        Log::error("getShortLivedAccessToken: " . $code);      // TODO: remove
        $response = $this->client->request('POST', 'https://api.instagram.com/oauth/access_token',
            [
                'json' => [
                    'client_id' => env('INSTAGRAM_APP_ID'),
                    'client_secret' => env('INSTAGRAM_APP_SECRET'),
                    'grant_type' => 'authorization_code',
                    'redirect_uri' => env('APP_URL') . '/' . env('INSTAGRAM_AUTH_REDIRECT_RELATIVE_URL'),
                    'code' => $code
                ]
            ]);

//        print_r((array)json_decode($response->getBody()));
        $responseBody = ((array)json_decode($response->getBody()));
        Log::error(json_encode($responseBody));      // TODO: remove

        if (isset($responseBody['access_token'])) { // Request successful
            return ($responseBody['access_token']);
        } else if (isset($responseBody['error_message'])) {
            throw new \Exception($responseBody['error_message']);
        } else {
            throw new \Exception();
        }
    }

    public function getLongLivedAccessToken(string $shortLivedAccessToken)
    {
        Log::error("getShortLivedAccessToken: " . $shortLivedAccessToken);      // TODO: remove
        $response = $this->client->request('GET', 'https://graph.instagram.com/access_token' .
            '?grant_type=ig_exchange_token' .
            '&client_secret=' . env('INSTAGRAM_APP_SECRET') .
            '&access_token=' . $shortLivedAccessToken);

        $responseBody = ((array)json_decode($response->getBody()));
        Log::error(json_encode($responseBody));      // TODO: remove

        if (isset($responseBody['access_token'])) {
            return $responseBody['access_token'];
        } else if (isset($responseBody['error_message'])) {
            throw new \Exception($responseBody['error_message']);
        } else {
            throw new \Exception();
        }
    }
}
