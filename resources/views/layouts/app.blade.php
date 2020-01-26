<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="base-url" content="{{ env('APP_URL') }}">
    <meta name="asset-url" content="{{ asset('/') }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    @yield('scripts')

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @yield('styles')

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Maven+Pro&display=swap" rel="stylesheet">

    <!-- Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body style="background-color: white">

<div class="container">
    <!--NavBar-->
    <nav class="navbar navbar-light bg-white border-bottom justify-content-center">
        <div></div>
        <a class="navbar-brand" href="#">
            <img src="{{ asset("storage/images/logo.png") }}" height="50" alt="">
            <span class="align-bottom ml-2 text-dark text-on-navbar d-md-inline d-none">@yield('logo-text')</span>
        </a>
    </nav>

    <!-- Page Content -->
    <div class="container">
        @yield('content')
    </div>
</div>
</body>

</html>
