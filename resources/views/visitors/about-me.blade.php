@extends('layouts.visitors.app')

@section('stylesheets')
    <link href="{{ asset('css/02-Single-post/css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/02-Single-post/css/responsive.css') }}" rel="stylesheet">
@endsection

@section('page-content')
    <div id="about-me-page" class="d-none"></div>
    <div class="single-post">
        <div class="image-wrapper">
            <img id="about-me-image" src="{{ asset('storage/about_me_images_folder/'.$about_me->about_me_image) }}" alt="Blog Image">
        </div>
        @auth
            <div class="d-flex justify-content-center mt-2">
                <a id="about-me-image-edit" href="#">
                    <i class="material-icons" style="font-size: 15px">edit</i>
                </a>
                <div id="save-and-cancel-about-me-image-buttons" class="d-none m-0">
                    <a id="save-about-me-image" class="ml-1" href="#">
                        <i class="material-icons" style="font-size: 15px">save</i>
                    </a>
                    <a id="cancel-about-me-image" href="#">
                        <i class="material-icons" style="font-size: 15px">cancel</i>
                    </a>
                </div>
                <i id="loading-about-me-image" class="material-icons d-none">hourglass_empty</i>

                <input id="about-me-image-hidden-input" class="d-none" type="file" accept="image/*"/>
            </div>
        @endauth

        <div class="d-flex justify-content-between mt-5">
            <h3 class="title flex-grow-1">
                <span id="about-me-title" href="#" style="font-weight: 500; color: #444; width: 100%">
                    {{ $about_me->about_me_title }}
                </span>
            </h3>
            @auth
                <div class="title">
                    <a id="about-me-title-edit" href="#">
                        <i class="material-icons" style="font-size: 15px">edit</i>
                    </a>
                    <div id="save-and-cancel-about-me-title-buttons" class="d-none m-0">
                        <a id="save-about-me-title" class="ml-1" href="#">
                            <i class="material-icons" style="font-size: 15px">save</i>
                        </a>
                        <a id="cancel-about-me-title" href="#">
                            <i class="material-icons" style="font-size: 15px">cancel</i>
                        </a>
                    </div>
                    <i id="loading-about-me-title" class="material-icons d-none">hourglass_empty</i>
                </div>
            @endauth
        </div>

        <div class="d-flex">
            <div id="about-me" class="flex-grow-1">{!! $about_me->about_me !!}</div>
            @auth
                <div>
                    <a id="about-me-edit" href="#">
                        <i class="material-icons" style="font-size: 15px">edit</i>
                    </a>
                    <div id="save-and-cancel-about-me-buttons" class="d-none m-0">
                        <a id="save-about-me" class="ml-1" href="#">
                            <i class="material-icons" style="font-size: 15px">save</i>
                        </a>
                        <a id="cancel-about-me" href="#">
                            <i class="material-icons" style="font-size: 15px">cancel</i>
                        </a>
                    </div>
                    <i id="loading-about-me" class="material-icons d-none">hourglass_empty</i>
                </div>
            @endauth
        </div>
    </div><!-- single-post -->

    {{--<div class="circular-pregress center-text">
        <div class="row">

            <div class="col-sm-4">
                <div class="circliful" data-animation="1" data-animationStep="5" data-percent="75" data-foregroundBorderWidth="3"
                     data-backgroundBorderWidth="3" data-foregroundColor="#FFAD4D" data-backgroundColor="#ddd"
                     data-fontColor="#222"></div>
                <h4><b class="light-color">Awsome</b></h4>
                <h6 class="pre-writing">Etium nec odio</h6>
            </div><!-- col-sm-4 -->

            <div class="col-sm-4">
                <div class="circliful" data-animation="1" data-animationStep="5" data-percent="83" data-foregroundBorderWidth="3"
                     data-backgroundBorderWidth="3" data-foregroundColor="#FFAD4D" data-backgroundColor="#ddd"
                     data-fontColor="#222"></div>
                <h4><b class="light-color">Creative</b></h4>
                <h6 class="pre-writing">Odio vestibum</h6>
            </div><!-- col-sm-4 -->

            <div class="col-sm-4">
                <div class="circliful" data-animation="1" data-animationStep="5" data-percent="97" data-foregroundBorderWidth="3"
                     data-backgroundBorderWidth="3" data-foregroundColor="#FFAD4D" data-backgroundColor="#ddd"
                     data-fontColor="#222"></div>
                <h4><b class="light-color">Oustsanding</b></h4>
                <h6 class="pre-writing">Etium nec odio</h6>
            </div><!-- col-sm-4 -->

        </div><!-- row -->
    </div>--}}<!-- circular-pregress -->

    <div class="recomend-area">
        <h4 class="title"><b class="light-color">My recommendation</b></h4>
        <div class="row">
            <div class="col-md-6">

                <div class="recomend">
                    <div class="post-image"><img src="images/recomended-1-200x200.jpg" alt="Post Image"></div>

                    <div class="post-info">
                        <a class="btn category-btn" href="#">TRAVEL</a>
                        <h5 class="title"><a href="#"><b class="light-color">One more night in</b></a></h5>
                        <h6 class="date"><em>Monday, October 13, 2017</em></h6>
                        <p>Sed ut unde omnis iste natus error sit.</p>
                    </div><!-- post-info -->
                </div><!-- recomend -->

            </div><!-- col-md-6 -->

            <div class="col-md-6">

                <div class="recomend">
                    <div class="post-image"><img src="images/recomended-2-200x200.jpg" alt="Post Image"></div>

                    <div class="post-info">
                        <a class="btn category-btn" href="#">TRAVEL</a>
                        <h5 class="title"><a href="#"><b class="light-color">One more night in</b></a></h5>
                        <h6 class="date"><em>Monday, October 13, 2017</em></h6>
                        <p>Sed ut unde omnis iste natus error sit.</p>
                    </div><!-- post-info -->
                </div><!-- recomend -->

            </div><!-- col-md-6 -->

        </div><!-- row -->
    </div><!-- recomend-area -->
@endsection
