<!DOCTYPE html>
<html lang="en">
<head>
    <title>Categories</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="base-url" content="{{ env('APP_URL') }}">

    <!-- Font -->

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Maven+Pro&display=swap" rel="stylesheet">


    <!-- Stylesheets -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/common-css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/common-css/ionicons.css') }}" rel="stylesheet">
    <link href="{{ asset('css/common-css/app.css') }}"rel="stylesheet">
    <link href="{{ asset('css/01-homepage/css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/01-homepage/css/responsive.css') }}" rel="stylesheet">
    <link href="{{ asset('css/06-categories/css/styles.css') }}" rel="stylesheet">

</head>
<body>
@component('visitors.components.header')
@endcomponent

<div class="container">
    <div id="categories-page" class="d-none"></div>

    <div class="top-bar row mt-4 justify-content-between sticky-top">
        <div class="d-flex col-md-8 col-12 mx-auto my-3">
            <a id="backward-scroll" class="px-4" href="#"><i class="ion-arrow-left-b"></i></a>
            <div id="categories-slide" class="flex-grow-1">
                <div class="slidee">
                    @foreach($tags as $tag)
                        <li class="mr-3 @if(Request::is("categories/".$tag))active @endif"><a href="{{ url('categories/'.$tag) }}">{{ ucfirst($tag) }}</a></li>
                    @endforeach
                </div>
            </div>
            <a id="forward-scroll" class="px-4" href="#"><i class="ion-arrow-right-b"></i></a>
        </div>
    </div>

    <div class="row mt-5">@isset($ble)ble ble ble @endisset
        @foreach($blogs as $blog)
            <div class="col-lg-4 col-md-12">
                @component('visitors.components.blog-post', ['blog' => $blog, 'withoutTag' => true])
                @endcomponent
            </div>
        @endforeach
    </div>

</div>

<!--Scripts-->
<script src="{{ asset('js/common-js/jquery-3.1.1.min.js') }}"></script>
<script src="{{ asset('js/common-js/tether.min.js') }}"></script>
<script src="{{ asset('js/common-js/bootstrap.js') }}"></script>
<script src="{{ asset('js/common-js/layerslider.js') }}"></script>
<script src="{{ asset('js/common-js/scripts.js') }}"></script>
<script src="{{ asset('js/app.js') }}" defer></script>

<script type="text/javascript" src="{{ asset('js/lib/ResizeSensor.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/lib/ElementQueries.js') }}"></script>

<script>
    console.log(@json($blogs));
</script>
</body>
</html>
