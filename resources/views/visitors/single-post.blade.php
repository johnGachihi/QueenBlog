@extends('layouts.visitors.app')

@section('stylesheets')
    <link href="{{ asset('css/02-Single-post/css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/02-Single-post/css/responsive.css') }}" rel="stylesheet">
@endsection

@section('page-content')
    <div class="single-post">
        <div class="image-wrapper">
            <img src="{{ asset('storage/blog-main-images/'.$blog->main_image_filename) }}" alt="Blog Image">
        </div>

        @component('visitors.components.tag-share-like-views', ['blog' => $blog, 'withoutTag' => false])
        @endcomponent

        <p class="date"><em>{{ $blog->updated_at }}</em></p>

        <h3 class="title"><a href="#"><b class="light-color">This is post about travel, adventure and fun</b></a></h3>

        <!--Blog content-->
        {!! $blog->content !!}

        {{--<ul>
            <li><a class="btn" href="#">design</a></li>
            <li><a class="btn" href="#">fashion</a></li>
        </ul>--}}

    </div><!-- single-post -->


    {{--<div class="post-author">
        <div class="author-image"><img src="{{ asset('storage/images/author-1-200x200.jpg') }}" alt="Autohr Image"></div>

        <div class="author-info">
            <h4 class="name"><b class="light-color">Cristnne Smith</b></h4>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                dolore magnam aliquam quaerat voluptatem.</p>

            <ul class="social-icons">
                <li><a href="#"><i class="ion-social-facebook-outline"></i></a></li>
                <li><a href="#"><i class="ion-social-twitter-outline"></i></a></li>
                <li><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
                <li><a href="#"><i class="ion-social-vimeo-outline"></i></a></li>
                <li><a href="#"><i class="ion-social-pinterest-outline"></i></a></li>
            </ul><!-- right-area -->

        </div><!-- author-info -->
    </div>--}}<!-- post-author -->

    {{--<div class="comments-area">
        <h4 class="title"><b class="light-color">2 Comments</b></h4>
        <div class="comment">
            <div class="author-image"><img src="{{ asset('storage/images/author-2-150x150.jpg') }}" alt="Autohr Image"></div>
            <div class="comment-info">
                <h5><b class="light-color">William Smith</b></h5>
                <h6 class="date"><em>Monday, October 30, 2017</em></h6>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    dolore magnam aliquam quaerat voluptatem.</p>
            </div>
        </div><!-- comment -->

        <div class="comment">
            <div class="author-image"><img src="{{ asset('storage/images/author-3-150x150.jpg') }}" alt="Autohr Image"></div>
            <div class="comment-info">
                <h5><b class="light-color">William Smith</b></h5>
                <h6 class="date"><em>Monday, October 30, 2017</em></h6>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    dolore magnam aliquam quaerat voluptatem.</p>
            </div>
        </div><!-- comment -->

    </div>--}}<!-- comments-area -->

    {{--<div class="leave-comment-area">
        <h4 class="title"><b class="light-color">Leave a comment</b></h4>
        <div class="leave-comment">

            <form method="post">
                <div class="row">
                    <div class="col-sm-6">
                        <input class="name-input" type="text" placeholder="Name">
                    </div>
                    <div class="col-sm-6">
                        <input class="email-input" type="text" placeholder="Email">
                    </div>
                    <div class="col-sm-12">
                        <input class="subject-input" type="text" placeholder="Subject">
                    </div>
                    <div class="col-sm-12">
                        <textarea class="message-input" rows="6" placeholder="Message"></textarea>
                    </div>
                    <div class="col-sm-12">
                        <button class="btn btn-2"><b>COMMENT</b></button>
                    </div>

                </div><!-- row -->
            </form>

        </div>--}}<!-- leave-comment -->

    {{--</div>--}}<!-- comments-area -->

@endsection
