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

    <!-- Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Stylesheets -->

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/common-css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('css/common-css/ionicons.css') }}" rel="stylesheet">
    <link href="{{ asset('css/common-css/app.css') }}" rel="stylesheet">

    @yield('stylesheets')

</head>
<body>

@component('visitors.components.header')
@endcomponent

@yield('after-header')

@auth
    <div id="renee" class="d-none"></div>
@endauth
<section class="@if(Route::is('index'))section @endif blog-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="blog-posts">
                    {{-- Page Content goes here --}}
                    @yield('page-content')
                </div>
            </div>

            <div class="col-lg-4 col-md-12">
                <div class="sidebar-area">

                    <div class="sidebar-section about-author center-text">
                        <div class="author-image">
                            <img id="about-me-side-image" src="{{ asset('storage/about_me_images_folder/'.$about_me->about_me_side_image) }}"
                                 width=200 height=200 alt="Author Image"/>
                            @auth
                            <div>
                                <a id="about-me-side-image-edit" href="#">
                                    <i class="material-icons" style="font-size: 15px">edit</i>
                                </a>
                                <div id="save-and-cancel-about-me-side-image-buttons" class="d-none m-0">
                                    <a id="save-about-me-side-image" class="ml-1" href="#">
                                        <i class="material-icons" style="font-size: 15px">save</i>
                                    </a>
                                    <a id="cancel-about-me-side-image" href="#">
                                        <i class="material-icons" style="font-size: 15px">cancel</i>
                                    </a>
                                </div>
                                <i id="loading-about-me-side-image" class="material-icons d-none">hourglass_empty</i>

                                <input id="about-me-side-image-hidden-input" class="d-none" type="file" accept="image/*"/>
                            </div>
                            @endauth
                        </div>

                        <ul class="social-icons">
                            <li><a href="#"><i class="ion-social-facebook-outline"></i></a></li>
                            <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                        </ul><!-- right-area -->

                        <div style="margin-top: 20px">
                            <div class="d-flex justify-content-center">
                                {{--<h4 class="author-name" style="margin: 0;">
                                    <b id="about-me-side-name"
                                       class="light-color">{{ $about_me->about_me_side_name }}</b>
                                </h4>--}}
                                <h4 id="about-me-side-name" class="author-name w-75 mx-auto" style="margin: 0; font-weight: 500; color: #444">
                                    {!! $about_me->about_me_side_name !!}
                                </h4>
                                @auth
                                    <a id="about-me-side-name-edit" href="#">
                                        <i class="material-icons" style="font-size: 15px">edit</i>
                                    </a>
                                    <div id="save-and-cancel-about-me-side-name-buttons" class="d-none m-0">
                                        <a id="save-about-me-side-name" class="ml-1" href="#">
                                            <i class="material-icons" style="font-size: 15px">save</i>
                                        </a>
                                        <a id="cancel-about-me-side-name" href="#">
                                            <i class="material-icons" style="font-size: 15px">cancel</i>
                                        </a>
                                    </div>
                                    <i id="loading-about-me-side-name" class="material-icons d-none">hourglass_empty</i>
                                @endauth
                            </div>
                        </div>

                        <div class="d-flex">
{{--                            <div>--}}
                                <p id="about-me-side" class="w-75 mx-auto"> {!! $about_me->about_me_side !!}</p>
{{--                            </div>--}}
                            @auth
                            <div>
                                <a id="edit-about-me-side" href="#">
                                    <i class="material-icons" style="font-size: 15px">edit</i>
                                </a>
                                <div id="about-me-side-save-cancel-container" class="d-none">
                                    <a id="save-about-me-side" href="#">
                                        <i class="material-icons" style="font-size: 15px">save</i>
                                    </a>
                                    <a id="cancel-about-me-side" href="#">
                                        <i class="material-icons" style="font-size: 15px">cancel</i>
                                    </a>
                                </div>
                                <i id="loading-about-me-side" class="material-icons d-none" style="font-size: 15px">hourglass_empty</i>
                            </div>
                            @endauth
                        </div>


                        <div class="signature-image"><img src="{{ asset('storage/images/signature-image.png') }}"
                                                          alt="Signature Image"></div>
                        <a class="read-more-link" href="{{url('aboutme')}}"><b>READ MORE</b></a>

                    </div><!-- sidebar-section about-author -->

                    {{--<div class="sidebar-section src-area">

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
                    </div>--}}<!-- sidebar-section newsletter-area -->

                    <div class="sidebar-section category-area">
                        <h4 class="title"><b class="light-color">Categories</b></h4>
                        @foreach($categories as $category)
                            <a class="category" href="{{ url('categories/'.$category['tag']) }}">
                                <img src="{{ asset('storage/blog-main-images/'.$category['image']) }}"
                                     alt="Category Image">
                                <h6 class="name">{{ strtoupper($category['tag']) }}</h6>
                            </a>
                        @endforeach
                        {{--<a class="category" href="#">
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
                        </a>--}}
                    </div><!-- sidebar-section category-area -->

                    {{--TODO: Ask if this section is necessary--}}
                    <div class="sidebar-section latest-post-area">
                        <h4 class="title"><b class="light-color">Latest Posts</b></h4>

                        @foreach($blogs as $blog)
                            <div class="latest-post" href="#">
                                <div class="l-post-image">
                                    <img src="{{ asset('storage/blog-main-images/'.$blog['main_image_filename']) }}"
                                         alt="Category Image" style="max-height: 60px; object-fit: cover">
                                </div>
                                <div class="post-info">
                                    <a class="btn category-btn"
                                       href="{{ url('categories/'.$blog->tag) }}">{{ strtoupper($blog['tag']) }}</a>
                                    <h5><a href="{{ url('post/'.$blog->id) }}"><b
                                                class="light-color">{{ $blog['title'] }}</b></a></h5>
                                    <h6 class="date"><em>{{ $blog['updated_at'] }}</em></h6>
                                </div>
                            </div>

                            @if($loop->iteration == 5)
                                @break
                            @endif
                        @endforeach

                        {{--<div class="latest-post" href="#">
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
                        </div>--}}

                    </div><!-- sidebar-section latest-post-area -->

                    {{--<div class="sidebar-section advertisement-area">
                        <h4 class="title"><b class="light-color">Advertisement</b></h4>
                        <a class="advertisement-img" href="#">
                            <img src="images/advertise-1-400x500.jpg" alt="Advertisement Image">
                            <h6 class="btn btn-2 discover-btn">DISCOVER</h6>
                        </a>
                    </div>--}}<!-- sidebar-section advertisement-area -->

                    {{--TODO: Add instagram section--}}
                    {{--<div class="sidebar-section instagram-area">
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
                    </div>--}}<!-- sidebar-section instagram-area -->

                    <div class="sidebar-section tags-area">
                        <h4 class="title"><b class="light-color">Tags</b></h4>
                        <ul class="tags">
                            @foreach($categories as $category)
                                <li><a class="btn"
                                       href="{{ url('categories/'.$blog->tag) }}">{{ ucfirst(strtolower($category['tag'])) }}</a>
                                </li>
                            @endforeach
                            {{--<li><a class="btn" href="#">design</a></li>
                            <li><a class="btn" href="#">fasinon</a></li>
                            <li><a class="btn" href="#">travel</a></li>
                            <li><a class="btn" href="#">music</a></li>
                            <li><a class="btn" href="#">video</a></li>
                            <li><a class="btn" href="#">photography</a></li>
                            <li><a class="btn" href="#">adventure</a></li>--}}
                        </ul>
                    </div><!-- sidebar-section tags-area -->


                </div><!-- about-author -->
            </div><!-- col-lg-4 -->

        </div><!-- row -->
    </div><!-- container -->
</section><!-- section -->

<section class="footer-instagram-area">

    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h5 class="title"><b class="light-color">Follow me &copy; instagram</b></h5>
            </div><!-- col-lg-4 -->
        </div><!-- row -->
    </div><!-- container -->

    <ul class="instagram"></ul>
</section><!-- section -->

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
<script src="{{ asset('js/app.js') }}" defer></script>

<script type="text/javascript" src="{{ asset('js/lib/ResizeSensor.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/lib/ElementQueries.js') }}"></script>

@yield('scripts')

</body>
</html>
