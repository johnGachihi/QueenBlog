@extends('layouts.visitors.app')

@section('stylesheets')
    <link href="{{ asset('css/02-Single-post/css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/02-Single-post/css/responsive.css') }}" rel="stylesheet">
@endsection

@section('page-content')
    <div class="single-post">
        <div class="image-wrapper"><img src="images/blog-2-1000x600.jpg" alt="Blog Image"></div>

        <div class="icons">
            <div class="left-area">
                <a class="btn caegory-btn" href="#"><b>TRAVEL</b></a>
            </div>
            <ul class="right-area social-icons">
                <li><a href="#"><i class="ion-android-share-alt"></i>Share</a></li>
                <li><a href="#"><i class="ion-android-favorite-outline"></i>03</a></li>
                <li><a href="#"><i class="ion-android-textsms"></i>06</a></li>
            </ul>
        </div>
        <p class="date"><em>Monday, October 13, 2017</em></p>
        <h3 class="title"><a href="#"><b class="light-color">This is post about travel, adventure and fun</b></a></h3>
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
