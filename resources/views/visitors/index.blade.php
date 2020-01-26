@extends('layouts.visitors.app')

@section('stylesheets')
    <link href="{{ asset('css/01-homepage/css/styles.css') }}" rel="stylesheet">
    <link href="{{ asset('css/01-homepage/css/responsive.css') }}" rel="stylesheet">
@endsection

@section('after-header')
    <div id="index-page" class="d-none"></div>
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
@endsection

@section('page-content')
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
@endsection
