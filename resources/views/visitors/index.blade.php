<!DOCTYPE HTML>
<html lang="en">
<head>
    <title>Home</title>
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

    <link href="{{ asset('css/common-css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/common-css/ionicons.css') }}" rel="stylesheet">
    <link href="{{ asset('css/common-css/layerslider.css') }}" rel="stylesheet">
    <link href="{{ asset('css/01-homepage/css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/01-homepage/css/responsive.css') }}" rel="stylesheet">

</head>
<body>
<div id="index-page" class="d-none"></div>
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

    <div class="middle-menu center-text"><a href="#" class="logo"><img src="{{ asset('storage/images/logo.png') }}"
                                                                       alt="Logo Image"></a></div>

    <div class="bottom-area">

        <div class="menu-nav-icon" data-nav-menu="#main-menu"><i class="ion-navicon"></i></div>

        <ul class="main-menu visible-on-click" id="main-menu">
            <li class="drop-down"><a href="#!">HOME<i class="ion-ios-arrow-down"></i></a>

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

            </li>
            <li><a href="#">FEATURED</a></li>
            <li><a href="03-About-me.html">ABOUT</a></li>   <!-- TODO -->
            <li><a href="#">CATEGORIES</a></li>
            <li><a href="04-Contact.html">CONTACT</a></li>  <!-- TODO -->
        </ul><!-- main-menu -->

    </div><!-- conatiner -->
</header>


<div class="main-slider">
    <div id="slider">

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/slider-1-1600x800.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->


        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/a.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/b.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/c.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/d.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/e.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/f.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/g.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/h.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/i.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/j.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/k.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/l.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/m.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/n.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/o.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/p.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->

        <div class="ls-slide"
             data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
            <img src="{{ asset('storage/images/q.jpg') }}" class="ls-bg" alt=""/>

            <div class="slider-content ls-l" style="top:60%; left:30%;"
                 data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
                <a class="btn" href="#">TRAVEL</a>
                <h3 class="title"><b>Travel, Love, Live</b></h3>
                <h6>29 October, 2017</h6>
            </div>

        </div><!-- ls-slide -->


    </div><!-- slider -->
</div><!-- main-slider -->


<section class="section blog-area">
    <div class="container">
        <div class="row">

            <div class="col-lg-8 col-md-12">
                <div class="blog-posts">
                    @forelse($blogs as $blog)
                        @component('visitors.blog-post', ['blog' => $blog])
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
                                @component('visitors.blog-post', ['blog' => $blog])
                                @endcomponent
                            </div>
                        @endforeach
                    </div>

                    {{--TODO: Check condition--}}
                    @if($blogs->count() > 1)
                        <a id="load-more-btn" class="btn load-more-btn" href="#">LOAD OLDER POSTS</a>
                    @endif

                </div><!-- blog-posts -->
            </div><!-- col-lg-4 -->


            <div class="col-lg-4 col-md-12">
                <div class="sidebar-area">

                    <div class="sidebar-section about-author center-text">
                        <div class="author-image"><img src="{{ asset('storage/images/slider-2-1600x800.jpg') }}"
                                                       width=200 height=200
                                                       alt="Author Image"></div>

                        <ul class="social-icons">
                            <li><a href="#"><i class="ion-social-facebook-outline"></i></a></li>
                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                        </ul><!-- right-area -->

                        <h4 class="author-name"><b class="light-color">Renee Tikolo</b></h4>
                        <p id="about-renee"></p>


                        <div class="signature-image"><img src="{{ asset('storage/images/signature-image.png') }}"
                                                          alt="Signature Image"></div>
                        <a class="read-more-link" href="03-About-me.html"><b>READ MORE</b></a>

                    </div><!-- sidebar-section about-author -->

                    <div class="sidebar-section src-area">

                        <form action="post">
                            <input class="src-input" type="text" placeholder="Search">
                            <button class="src-btn" type="submit"><i class="ion-ios-search-strong"></i></button>
                        </form>

                    </div><!-- sidebar-section src-area -->

                    <div class="sidebar-section newsletter-area">
                        <h5 class="title"><b>Subscribe to our newsletter</b></h5>
                        <form action="post">
                            <input class="email-input" type="text" placeholder="Your email here">
                            <button class="btn btn-2" type="submit">SUBSCRIBE</button>
                        </form>
                    </div><!-- sidebar-section newsletter-area -->

                    <div class="sidebar-section category-area">
                        <h4 class="title"><b class="light-color">Categories</b></h4>
                        <a class="category" href="#">
                            <img src="{{ asset('storage/images/category-1-400x150.jpg') }}" alt="Category Image">
                            <h6 class="name">TRAVEL</h6>
                        </a>

                        <a class="category" href="#">
                            <img src="{{ asset('storage/images/category-2-400x150.jpg') }}" alt="Category Image">
                            <h6 class="name">FASHION</h6>
                        </a>

                        <a class="category" href="#">
                            <img src="{{ asset('storage/images/category-3-400x150.jpg') }}" alt="Category Image">
                            <h6 class="name">LIFESTYLE</h6>
                        </a>
                        <a class="category" href="#">
                            <img src="{{ asset('storage/images/category-4-400x150.jpg') }}" alt="Category Image">
                            <h6 class="name">DESIGN</h6>
                        </a>
                    </div><!-- sidebar-section category-area -->

                    <div class="sidebar-section latest-post-area">
                        <h4 class="title"><b class="light-color">Latest Posts</b></h4>

                        <div class="latest-post" href="#">
                            <div class="l-post-image"><img src="{{ asset('storage/images/recent-post-1-150x200.jpg') }}"
                                                           alt="Category Image">
                            </div>
                            <div class="post-info">
                                <a class="btn category-btn" href="#">TRAVEL</a>
                                <h5><a href="#"><b class="light-color">One more night in the clubs</b></a></h5>
                                <h6 class="date"><em>Monday, October 13, 2017</em></h6>
                            </div>
                        </div>

                        <div class="latest-post" href="#">
                            <div class="l-post-image"><img src="{{ asset('storage/images/recent-post-2-150x200.jpg') }}"
                                                           alt="Category Image">
                            </div>
                            <div class="post-info">
                                <a class="btn category-btn" href="#">TRAVEL</a>
                                <h5><a href="#"><b class="light-color">Travel lights in winter</b></a></h5>
                                <h6 class="date"><em>Monday, October 13, 2017</em></h6>
                            </div>
                        </div>
                        <div class="latest-post" href="#">
                            <div class="l-post-image"><img src="{{ asset('storage/images/recent-post-3-150x200.jpg') }}"
                                                           alt="Category Image">
                            </div>
                            <div class="post-info">
                                <a class="btn category-btn" href="#">TRAVEL</a>
                                <h5><a href="#"><b class="light-color">How to travel with no money</b></a></h5>
                                <h6 class="date"><em>Monday, October 13, 2017</em></h6>
                            </div>
                        </div>

                        <div class="latest-post" href="#">
                            <div class="l-post-image"><img src="{{ asset('storage/images/recent-post-4-150x200.jpg') }}"
                                                           alt="Category Image">
                            </div>
                            <div class="post-info">
                                <a class="btn category-btn" href="#">TRAVEL</a>
                                <h5><a href="#"><b class="light-color">Smile 10 times a day</b></a></h5>
                                <h6 class="date"><em>Monday, October 13, 2017</em></h6>
                            </div>
                        </div>

                    </div><!-- sidebar-section latest-post-area -->

                    <div class="sidebar-section advertisement-area">
                        <h4 class="title"><b class="light-color">Advertisement</b></h4>
                        <a class="advertisement-img" href="#">
                            <img src="images/advertise-1-400x500.jpg" alt="Advertisement Image">
                            <h6 class="btn btn-2 discover-btn">DISCOVER</h6>
                        </a>
                    </div><!-- sidebar-section advertisement-area -->

                    <div class="sidebar-section instagram-area">
                        <h4 class="title"><b class="light-color">Instagram</b></h4>
                        <ul class="instagram-img">
                            <li><a href="#"><img src="images/instragram-side-1-150x150.jpg" alt="Instagram Image"></a>
                            </li>
                            <li><a href="#"><img src="images/instragram-side-2-150x150.jpg" alt="Instagram Image"></a>
                            </li>
                            <li><a href="#"><img src="images/instragram-side-3-150x150.jpg" alt="Instagram Image"></a>
                            </li>
                            <div class="clearfix"></div>
                            <li><a href="#"><img src="images/instragram-side-4-150x150.jpg" alt="Instagram Image"></a>
                            </li>
                            <li><a href="#"><img src="images/instragram-side-5-150x150.jpg" alt="Instagram Image"></a>
                            </li>
                            <li><a href="#"><img src="images/instragram-side-6-150x150.jpg" alt="Instagram Image"></a>
                            </li>
                        </ul>
                    </div><!-- sidebar-section instagram-area -->

                    <div class="sidebar-section tags-area">
                        <h4 class="title"><b class="light-color">Tags</b></h4>
                        <ul class="tags">
                            <li><a class="btn" href="#">design</a></li>
                            <li><a class="btn" href="#">fasinon</a></li>
                            <li><a class="btn" href="#">travel</a></li>
                            <li><a class="btn" href="#">music</a></li>
                            <li><a class="btn" href="#">video</a></li>
                            <li><a class="btn" href="#">photography</a></li>
                            <li><a class="btn" href="#">adventure</a></li>
                        </ul>
                    </div><!-- sidebar-section tags-area -->


                </div><!-- about-author -->
            </div><!-- col-lg-4 -->

        </div><!-- row -->
    </div><!-- container -->
</section><!-- section -->


{{--
<section class="footer-instagram-area">

    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h5 class="title"><b class="light-color">Follow me &copy; instagram</b></h5>
            </div><!-- col-lg-4 -->
        </div><!-- row -->
    </div><!-- container -->

    <ul class="instagram">
        <li><a href="#"><img src="images/instragram-1-300x400.jpg" alt="Instagram Image"></a></li>
        <li><a href="#"><img src="images/instragram-2-300x400.jpg" alt="Instagram Image"></a></li>
        <li><a href="#"><img src="images/instragram-3-300x400.jpg" alt="Instagram Image"></a></li>
        <li><a href="#"><img src="images/instragram-4-300x400.jpg" alt="Instagram Image"></a></li>
        <li><a href="#"><img src="images/instragram-5-300x400.jpg" alt="Instagram Image"></a></li>
        <li><a href="#"><img src="images/instragram-6-300x400.jpg" alt="Instagram Image"></a></li>
        <li><a href="#"><img src="images/instragram-7-300x400.jpg" alt="Instagram Image"></a></li>
    </ul>
</section><!-- section -->
--}}


<footer>
    <div class="container">
        <div class="row">

            <div class="col-sm-6">
                <div class="footer-section">
                    <p class="copyright">Juli &copy; 2018. All rights reserved | Made with <i class="ion-heart"
                                                                                              aria-hidden="true"></i> by
                        <a href="https://colorlib.com" target="_blank">Colorlib</a> &amp; distributed by <a
                            href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
                </div><!-- footer-section -->
            </div><!-- col-lg-4 col-md-6 -->

            <div class="col-sm-6">
                <div class="footer-section">
                    <ul class="social-icons">
                        <li><a href="#"><i class="ion-social-facebook-outline"></i></a></li>
                        <li><a href="#"><i class="ion-social-twitter-outline"></i></a></li>
                        <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                        <li><a href="#"><i class="ion-social-vimeo-outline"></i></a></li>
                        <li><a href="#"><i class="ion-social-pinterest-outline"></i></a></li>
                    </ul>
                </div><!-- footer-section -->
            </div><!-- col-lg-4 col-md-6 -->

        </div><!-- row -->
    </div><!-- container -->
</footer>


<!-- SCIPTS -->

<script src="{{ asset('js/common-js/jquery-3.1.1.min.js') }}"></script>
<script src="{{ asset('js/common-js/tether.min.js') }}"></script>
<script src="{{ asset('js/common-js/bootstrap.js') }}"></script>
<script src="{{ asset('js/common-js/layerslider.js') }}"></script>
<script src="{{ asset('js/common-js/scripts.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
<script>
    const blogs = @json($blogs);
    console.log(blogs);
    console.log({{ $blogs->count() }});
</script>
</body>
</html>
