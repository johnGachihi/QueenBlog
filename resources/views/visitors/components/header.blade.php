<header>
    <div class="top-menu">

        <ul class="left-area welcome-area">
            <li class="hello-blog">Life Without Scripts</li>
            <li><a href="mailto:hello@unscripted.co.ke">hello@unscripted.co.ke</a></li>
        </ul><!-- left-area -->


        <div class="right-area">

            <div class="src-area d-none">
                <form action="post">
                    <input class="src-input" type="text" placeholder="Search">
                    <button class="src-btn" type="submit"><i class="ion-ios-search-strong"></i></button>
                </form>
            </div><!-- src-area -->

            <ul class="social-icons">
                <li><a href="#"><i class="ion-social-facebook-outline"></i></a></li>
                <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>

            </ul><!-- right-area -->

        </div><!-- right-area -->

    </div><!-- top-menu -->

    <div class="middle-menu center-text position-relative">
        <a href="{{ url('/') }}" class="logo">
            <img src="{{ asset('storage/images/logo.jpg') }}" alt="Logo Image">
        </a>

        <div id="div" class="position-absolute" style="width: 50px; height: 50px; top: 0; right: 0"></div>
    </div>

    <div class="bottom-area">

        <div class="menu-nav-icon" data-nav-menu="#main-menu"><i class="ion-navicon"></i></div>

        <ul class="main-menu visible-on-click" id="main-menu">
            <li><a id="home-link" href="{{ url('/') }}" class="@if(Route::is('index')) active @endif">HOME</a></li>
{{--            <li><a href="#">FEATURED</a></li>--}}
            <li><a href="{{ url('/aboutme') }}" class="@if(Route::is('aboutme')) active @endif">ABOUT</a></li>
            <li><a href="{{ url('categories') }}" class="@if(Route::is('categories')) active @endif">CATEGORIES</a></li>
            <li><a href="{{ url('contact') }}" class="@if(Route::is('contact')) active @endif">CONTACT</a></li>
            @auth
            <li><a href="#" id="logout">LOGOUT</a></li>
            @endauth
        </ul><!-- main-menu -->

    </div><!-- conatiner -->
</header>

