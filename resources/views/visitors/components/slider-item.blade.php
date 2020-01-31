<div class="ls-slide"
     data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
    <img src="{{ asset('storage/blog-main-images/'.$blog->main_image_filename) }}" class="ls-bg" alt=""/>

    <div class="slider-content ls-l" style="top:60%; left:30%;"
         data-ls="offsetyin:100%; offsetxout:-50%; durationin:800; delayin:100; durationout:400; parallaxlevel:0;">
        {{--TODO: setup anchor--}}
        <a class="btn" href="{{ url('categories/'.$blog->tag) }}">{{ ucfirst(strtolower($blog->tag)) }}</a>
        <h3>
            <a class="title" style="max-width: 500px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap" href="{{ url('post/'.$blog->id) }}"><b>{{ $blog->title }}</b></a>
        </h3>
        <h6>{{ $blog->updated_at }}</h6>
    </div>

</div><!-- ls-slide -->
