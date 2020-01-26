<div class="single-post">
    <div class="image-wrapper">
        <img src="{{ asset("storage/blog-main-images/".$blog['main_image_filename']) }}"
             alt="Blog Image">
    </div>

    <div class="icons d-flex justify-content-between">
        <div class="left-area">
            <a class="btn category-btn" href="#"><b>{{ ucfirst($blog->tag) }}</b></a>
        </div>
        <ul class="right-area social-icons">
            <li><a href="#"><i class="ion-android-share-alt"></i>Share</a></li>
            <li>
                <a href="#" class="like-blog" data-blog-id="{{ $blog->id }}">
                    <i class="ion-android-favorite-outline"></i>
                    <span>{{ $blog->likes }}</span>
                </a>
            </li>
            <li style="padding-left: 30px"><i class="ion-ios-eye"></i>{{ $blog->views }}</li>
        </ul>
    </div>
    <h6 class="date"><em>{{ $blog->updated_at }}</em></h6>
    <h3 class="title">
        <a href="{{ url('/post/'.$blog->id) }}"><b class="title-text light-color">{{ $blog->title }}</b></a>
    </h3>
    <div style="height: 6.8em; overflow: hidden">
        <p>{!! $blog->content !!}</p>
    </div>
    <a class="btn read-more-btn" href="#"><b>READ MORE</b></a>
</div>
