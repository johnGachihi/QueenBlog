<?php

namespace App\Http\Controllers;

use App\Http\Client\InstagramAuthClient;
use App\InstagramAccessToken;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;

class InstagramAuthController extends Controller
{
    use RefreshDatabase;

    private $instagramAuthClient;

    public function __construct(InstagramAuthClient $instagramAuthClient)
    {
        $this->instagramAuthClient = $instagramAuthClient;
    }

    public function auth(Request $request) {
        if ($request->has('code')) {
            // Permissions granted
            return $this->handleSuccessfulAuth($request->code);
        } else if ($request->has('error')) {
            // Permissions not granted
            return view('instagram-auth', ["message" => "Authentication error. Please try again"]);
        } else {
            return view('instagram-auth');
        }
    }

    private function handleSuccessfulAuth(string $code) {
//        $shortLivedToken = '';
        try {
            $shortLivedToken = $this->instagramAuthClient->getShortLivedAccessToken($code);
            $longLivedToken = $this->instagramAuthClient->getLongLivedAccessToken($shortLivedToken);
            $this->persistLongLivedToken($longLivedToken);
            return view('instagram-auth', ['message' => 'Authentication successful']);
        } catch (\Exception $e) {
            // Failed to get short-lived token
            echo 'Failed getting access token';
            return view('instagram-auth', ["message" => "Authentication error. Please try again"]);
        }
    }

    private function persistLongLivedToken(string $longLivedAccessToken) {
        if (InstagramAccessToken::count() > 0) {
            $accessToken = InstagramAccessToken::all()->first();
        } else {
            $accessToken = new InstagramAccessToken();
        }

        $accessToken->long_lived_access_token = $longLivedAccessToken;
        $accessToken->save();
    }

}
