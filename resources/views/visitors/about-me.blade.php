@extends('layouts.visitors.app')

@section('stylesheets')
    <link href="{{ asset('css/02-Single-post/css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/02-Single-post/css/responsive.css') }}" rel="stylesheet">
@endsection

@section('page-content')
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

        <p class="desc">Hello Everyone! My name is Renèe Tikolo and I am so glad that you decided to stop by and take a peek! 🙂 While you’re here, why not subscribe and join the UnScripted Sisterhood.</p>

        <p class="desc">My favorite color is yellow, And my favorite food is Pilau and Chicken😁. I love to read books and engage in quite deep and proactive conversations that make me think and challenge me to see life in a different light. As much as I am intellectual person I am quite an extrovert and love to be out there, have fun and spend quality time with people😄</p>
        <p class="desc">Now that you know a little bit about me, and as time goes we will get to know each other better, let me shed light as to what I am doing here and why I am here.The reason why I started this blog is because there is a narrative going on within our society, especially among young girls and ladies who are just trying to figure out who they are, do the right thing but just can’t seem to find a way that allows them and empowers them to be who they really are.</p>
        <p class="desc">Wanna find out what that narrative is and dismantle it? Look out for my next blog post! [New Posts every Wednesday]</p>
        <h5 class="quoto"><em><i class="ion-quote"></i>[Romans 10:13] For Everyone Who calls on the name of the LORD will be saved

            </em></h5>

        <div class="row">
            <div class="col-sm-6">
                <div class="image-wrapper"><img src="images/blog-9-600x600.jpg" alt="Blog Image"></div>
            </div><!-- col-sm-6 -->
            <div class="col-sm-6">
                <div class="image-wrapper"><img src="images/blog-10-600x600.jpg" alt="Blog Image"></div>
            </div><!-- col-sm-6 -->
        </div><!-- row -->


        <p class="desc">Eerror sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            dolore magnam aliquam quaerat voluptatem.</p>

        <div class="circular-pregress center-text">
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
        </div><!-- circular-pregress -->


        <p class="desc">Eerror sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            dolore magnam aliquam quaerat voluptatem.</p>


        <div class="embed-video" data-source="youtube"
             data-video-url="https://www.youtube.com/watch?v=C-Q7GeQG6iE"></div>

    </div><!-- single-post -->

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
