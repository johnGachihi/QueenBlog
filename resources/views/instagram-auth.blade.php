@extends('layouts.app')

@section('content')
    <div id="instagram-auth-page" class="d-none"></div>
    @component('renee.components.header')
        @slot('left_side')
            <span id="instagram-profile-indicator">Loading profile...</span>
        @endslot

        @slot('right_side')
            @component('renee.components.dropdown-menu')
            @endcomponent
        @endslot
    @endcomponent

    <span class="d-block text-center">Work in progress</span>
    <div style="height: calc(100vh - 77px)" class="d-flex flex-column align-items-center justify-content-center">
        @isset($message)
            <span>{{ $message }}</span>
        @endisset
        <a href="https://api.instagram.com/oauth/authorize?client_id=732107967315761&redirect_uri=https://unscripted-a-test.wolfteamalpha.ninja/only/juli/instagram-auth&scope=user_profile,user_media&response_type=code"
            class="my-5">
            Give permissions
        </a>
    </div>
@endsection
