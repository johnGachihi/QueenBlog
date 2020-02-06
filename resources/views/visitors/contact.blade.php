@extends('layouts.visitors.app')

@section('stylesheets')
    <link href="{{ asset('css/04-Contact/css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/04-Contact/css/responsive.css') }}" rel="stylesheet">
    <link href="{{ asset('css/01-homepage/css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/01-homepage/css/responsive.css') }}" rel="stylesheet">
@endsection

@section('page-content')
    <div id="contact-page" class="d-none"></div>
    <div class="single-post">
        <div class="image-wrapper"><img src="{{ asset('storage/images/mathyas-unsplash.jpg') }}" alt="Blog Image"></div>

        <h3 class="title"><b class="light-color">Contact me</b></h3>
        {{--TODO: Add newsletter functionality--}}
        <p class="desc">
            Wanna know more about my work, please feel free to drop me a
            comment and let me know what you think.{{-- While you’re here, why
            not subscribe and join the UnScripted Sisterhood? Subscribe to
            my newsletter so you're notified of all my posts!--}}
        </p>

    </div><!-- single-post -->

    <div class="leave-comment-area">
        <h4 class="title"><b class="light-color">Drop me a line</b></h4>
        <div class="leave-comment">

            <form method="post" id="contact-form">
                <div class="row">
                    <div class="col-sm-6">
                        <input class="name-input" name="name" type="text" placeholder="Name">
                    </div>
                    <div class="col-sm-6">
                        <input class="email-input" name="email" type="text" placeholder="Email">
                    </div>
                    <div class="col-sm-12">
                        <input class="subject-input" name="subject" type="text" placeholder="Subject">
                    </div>
                    <div class="col-sm-12">
                        <textarea class="message-input" name="message" rows="6" placeholder="Message"></textarea>
                    </div>
                    <div class="col-sm-12">
                        <button class="btn btn-2" type="submit"><b>SEND</b></button>
                    </div>

                </div><!-- row -->
            </form>

        </div><!-- leave-comment -->

    </div><!-- comments-area -->
@endsection
