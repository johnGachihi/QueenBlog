<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body style="background-color: white">

<div class="container">
    <!--NavBar-->
    <nav class="navbar navbar-light bg-white border-bottom">
        <a class="navbar-brand" href="#">
            <img src="{{ asset("storage/logo.png") }}" height="50" alt="">
            <span class="align-bottom ml-3 text-secondary">Spread the word ...</span>
        </a>
    </nav>

    <!-- Page Content -->
    <div class="container">
        @yield('content')
    </div>
</div>
</body>

</html>
