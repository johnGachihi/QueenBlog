<div class="single-post" data-responsive>
    <div class="image-wrapper blog-post-image">
        <div class="blog-post-image">
                <img class="" src="{{ asset("storage/blog-main-images/".$blog['main_image_filename']) }}"
                     alt="Blog Image" style="height: 100%;">
        </div>
    </div>

    @php
    $tagShareLikeViewOptions = ['blog' => $blog, 'withoutTag' => false];
    if(isset($withoutTag)){
        $tagShareLikeViewOptions['withoutTag'] = $withoutTag;
    }
    @endphp

    @component('visitors.components.tag-share-like-views', $tagShareLikeViewOptions)
    @endcomponent

    <h6 class="date"><em>{{ $blog->updated_at }}</em></h6>
    <h3 class="title">
        <a href="{{ url('/post/'.$blog->id) }}"><b class="title-text light-color">{{ $blog->title }}</b></a>
    </h3>
    <div style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden">
        <p>{!! $blog->content !!}</p>
    </div>
    <a class="btn read-more-btn" href="{{ url('/post/'.$blog->id) }}"><b>READ MORE</b></a>
</div>
