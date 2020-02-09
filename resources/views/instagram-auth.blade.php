@extends('layouts.app')

@section('content')
    <div id="instagram-auth-page" class="d-none"></div>
    <span id="instagram-profile-indicator" class="mt-5">Loading profile...</span>
    <div style="height: calc(100vh - 77px)" class="d-flex justify-content-center">
        <a href="https://api.instagram.com/oauth/authorize?client_id=732107967315761&redirect_uri=https://unscripted-a-test.wolfteamalpha.ninja/only/juli/instagram-auth&scope=user_profile,user_media&response_type=code"
            class="my-md-auto my-5">
            Give permissions
        </a>
    </div>
@endsection
