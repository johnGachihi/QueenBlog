@extends('layouts.visitors.app')

@section('stylesheets')
    <link href="{{ asset('css/common-css/layerslider.css') }}" rel="stylesheet">
    <link href="{{ asset('css/01-homepage/css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/01-homepage/css/responsive.css') }}" rel="stylesheet">
@endsection

@section('after-header')
    <div id="index-page" class="d-none"></div>
    <div class="main-slider">
        <div id="slider">
            @foreach($blogs as $blog)
                @component('visitors.components.slider-item', ['blog' => $blog])
                @endcomponent

                @if($loop->iteration == 1)
                    @break
                @endif
            @endforeach
        </div><!-- slider -->
    </div><!-- main-slider -->
@endsection

@section('page-content')
    @forelse($blogs as $blog)
        @component('visitors.components.blog-post', ['blog' => $blog])
        @endcomponent
        @if($loop->iteration == 2)
            @break
        @endif
    @empty
        No blogs yet...
    @endforelse

    @php
        $blogsWithoutFirstTwo = $blogs->skip(2);
    @endphp

    <div id="rest-of-blogs" class="row">
        @foreach($blogsWithoutFirstTwo as $blog)
            <div class="col-lg-6 col-md-12">
                @component('visitors.components.blog-post', ['blog' => $blog])
                @endcomponent
            </div>
        @endforeach
    </div>

    {{--TODO: Check condition--}}
    @if($blogs->count() > 1)
        <a id="load-more-btn" class="btn load-more-btn" href="#">LOAD OLDER POSTS</a>
    @endif
@endsection

@section('scripts')
{{--    <script src="//cdn.jsdelivr.net/npm/goodshare.js@6/goodshare.min.js"></script>--}}
@endsection
