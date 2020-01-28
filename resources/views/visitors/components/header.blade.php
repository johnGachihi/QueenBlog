<header>
    <div class="top-menu">

        <ul class="left-area welcome-area">
            <li class="hello-blog">Life Without Scripts</li>
            <li><a href="mailto:hello@unscripted.co.ke">hello@unscripted.co.ke</a></li>
        </ul><!-- left-area -->


        <div class="right-area">

            <div class="src-area">
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

    <div class="middle-menu center-text"><a href="{{ url('/') }}" class="logo"><img src="{{ asset('storage/images/logo.png') }}"
                                                                       alt="Logo Image"></a></div>

    <div class="bottom-area">

        <div class="menu-nav-icon" data-nav-menu="#main-menu"><i class="ion-navicon"></i></div>

        <ul class="main-menu visible-on-click" id="main-menu">
            {{--<li class="drop-down"><a href="#!">HOME<i class="ion-ios-arrow-down"></i></a>

                <ul class="drop-down-menu">
                    <li><a href="#">FEATURED</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li class="drop-down"><a href="#!">CATEGORIES<i class="ion-ios-arrow-right"></i></a>
                        <ul class="drop-down-menu drop-down-inner">
                            <li><a href="#">FEATURED</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">CATEGORIES</a></li>
                        </ul>
                    </li>
                </ul>

            </li>--}}
            <li><a href="{{ url('/') }}" class="@if(Route::is('index')) active @endif">HOME</a></li>
            <li><a href="#">FEATURED</a></li>
            <li><a href="03-About-me.html">ABOUT</a></li>   <!-- TODO -->
            <li><a href="{{ url('categories') }}" class="@if(Route::is('categories')) active @endif">CATEGORIES</a></li>
            <li><a href="04-Contact.html">CONTACT</a></li>  <!-- TODO -->
        </ul><!-- main-menu -->

    </div><!-- conatiner -->
</header>

