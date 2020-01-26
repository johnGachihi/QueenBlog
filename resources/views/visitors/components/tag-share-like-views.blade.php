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
