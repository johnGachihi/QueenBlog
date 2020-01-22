@extends('layouts.app')

@section('logo-text')
    Your Blogs
@endsection

@section('content')
    <!-- MUST be here to show the page -> `blogs-page` -->
    <div id="blogs-page"></div>
    <div class="top-bar row py-3 justify-content-between sticky-top">
        <div>
            <a href="#" id="draft-blogs-tab-header" class="mx-2 tab-header">Draft</a>
            <a href="#" id="published-blogs-tab-header" class="mx-2 tab-header">Published</a>
        </div>

        <a href="#" role="button" id="dropdownMenuLink" class="ml-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="material-icons" style="color: #2b2a2a">more_vert</i>
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item active" href="{{ url('/only/juli/blogs') }}">Your blogs</a>
            <a class="dropdown-item" href="{{ url('/only/juli/write') }}">New Blog</a>
        </div>
    </div>

    <div id="blogs-container" class="mt-3">
        {{--<div class="container-fluid blog-entry">
            <div class="row">
                <div class="col-2">
                    <img class="blog-entry-img" src="{{ asset("storage/logo.png") }}">
                </div>
                <div class="col d-flex flex-column">
                    <span class="h3">This is the story about a boy</span>
                    <span>This is the story about a boy who loved to make things.</span>
                </div>
            </div>
        </div>--}}
    </div>
@endsection

<script type="application/javascript">
    const draftBlogs = @json($draftBlogs);
    const publishedBlogs = @json($publishedBlogs);
    console.log('draftBlogs', draftBlogs);
    console.log('publishedBlogs', publishedBlogs);
</script>
