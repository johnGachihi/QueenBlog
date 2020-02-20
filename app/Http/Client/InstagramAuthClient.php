<?php


namespace App\Http\Client;


use Exception;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class InstagramAuthClient
{
    private $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function getShortLivedAccessToken(string $code): string
    {
        Log::error('request parameters', [
            'client_id' => env('INSTAGRAM_APP_ID'),
            'client_secret' => env('INSTAGRAM_APP_SECRET'),
            'grant_type' => 'authorization_code',
            'redirect_uri' => env('APP_URL') . '/' . env('INSTAGRAM_AUTH_REDIRECT_RELATIVE_URL'),
            'code' => $code
        ]);

        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => 'https://api.instagram.com/oauth/access_token',
            CURLOPT_USERAGENT => 'Codular Sample cURL Request',
            CURLOPT_POST => 1,
            CURLOPT_POSTFIELDS => [
                'client_id' => env('INSTAGRAM_APP_ID'),
                'client_secret' => env('INSTAGRAM_APP_SECRET'),
                'grant_type' => 'authorization_code',
                'redirect_uri' => env('APP_URL') . '/' . env('INSTAGRAM_AUTH_REDIRECT_RELATIVE_URL'),
                'code' => $code
            ]
        ]);

        $response = curl_exec($curl);
        curl_close($curl);

        $responseBody = ((array)json_decode($response));

        if (isset($responseBody['access_token'])) { // Request successful
            return ($responseBody['access_token']);
        } else if (isset($responseBody['error_message'])) {
            throw new Exception($responseBody['error_message']);
        } else {
            throw new Exception();
        }
    }

    public function getLongLivedAccessToken(string $shortLivedAccessToken)
    {
        Log::error("getLongLivedAccessToken: " . $shortLivedAccessToken);      // TODO: remove
        $response = $this->client->request('GET', 'https://graph.instagram.com/access_token' .
            '?grant_type=ig_exchange_token' .
            '&client_secret=' . env('INSTAGRAM_APP_SECRET') .
            '&access_token=' . $shortLivedAccessToken);

        $responseBody = ((array)json_decode($response->getBody()));
        Log::error(json_encode($responseBody));      // TODO: remove

        if (isset($responseBody['access_token'])) {
            return $responseBody['access_token'];
        } else if (isset($responseBody['error_message'])) {
            throw new Exception($responseBody['error_message']);
        } else {
            throw new Exception();
        }
    }
}
