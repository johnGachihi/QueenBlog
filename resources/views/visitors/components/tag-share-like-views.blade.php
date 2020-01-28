<div class="icons @if(!$withoutTag) d-flex justify-content-between @endif">
    <div class="left-area @if($withoutTag) d-none @endif">
        <a class="btn category-btn" href="{{ url('categories/'.$blog->tag) }}"><b>{{ ucfirst($blog->tag) }}</b></a>
    </div>
    <ul class="right-area social-icons">
        <li>
            <a class="share-blog" href="#" data-blog-id="{{ $blog->id }}" data-blog-title="{{ $blog->title }}">
                <i class="ion-android-share-alt"></i>
                Share
            </a>
        </li>
        <li>
            <a href="#" class="like-blog" data-blog-id="{{ $blog->id }}">
                <i class="ion-android-favorite-outline"></i>
                <span>{{ $blog->likes }}</span>
            </a>
        </li>
        <li style="padding-left: 30px"><i class="ion-ios-eye"></i>{{ $blog->views }}</li>
    </ul>
</div>
