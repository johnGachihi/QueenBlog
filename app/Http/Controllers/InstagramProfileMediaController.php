<?php

namespace App\Http\Controllers;

use App\InstagramAccessToken;
use http\Env\Response;
use Illuminate\Http\Request;

class InstagramProfileMediaController extends Controller
{
    private $client;

    public function __construct(\GuzzleHttp\Client $client)
    {
        $this->client = $client;
    }

    public function profile()
    {
        try {
            $fetchUrl = 'https://graph.instagram.com/me?fields=username&access_token=';
            $fetchUrl .= $this->getInstagramAccessToken();
            $response = $this->client->request('GET', $fetchUrl);
            return response()->json(json_decode($response->getBody()));
        } catch (\Exception $e) {
            return response()->json(['error' => 'true'], 400);
        }
    }

    public function media()
    {
        try {
            $token = $this->getInstagramAccessToken();
            $fetchUrl = 'https://graph.instagram.com/me/media?fields=id,media_url&access_token=' . $token;
            $response = $this->client->request('GET', $fetchUrl);
            return response()->json(json_decode($response->getBody()));
        } catch (\Exception $e) {
            return response()->json(['error' => 'true'], 400);
        }
    }

    private function getInstagramAccessToken()
    {
        if (InstagramAccessToken::count() > 0) {
            $accessToken = InstagramAccessToken::first();
            return $accessToken->long_lived_access_token;
        } else {
            throw new \Exception("No token");
        }
    }
}
