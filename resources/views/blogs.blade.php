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

        <a href="#" role="button" id="dropdownMenuLink" class="ml-3" data-toggle="dropdown" aria-haspopup="true"
           aria-expanded="false">
            <i class="material-icons" style="color: #2b2a2a">more_vert</i>
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item active" href="{{ url('/only/juli/blogs') }}">Your blogs</a>
            <a class="dropdown-item" href="{{ url('/only/juli/write') }}">New Blog</a>
            <a class="dropdown-item" href="#" id="logout">Logout</a>
        </div>
    </div>

    <div id="blogs-container" class="mt-3 row"></div>

    <div id="delete-confirmation-dialog" class="mdc-dialog" role="alertdialog" aria-modal="true"
         aria-labelledby="my-dialog-title" aria-describedby="my-dialog-content" style="z-index: 2000">
        <div class="mdc-dialog__container">
            <div class="mdc-dialog__surface">
                <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
                <h2 class="mdc-dialog__title" id="my-dialog-title">
                    Delete blog
                </h2>
                <div class="mdc-dialog__content" id="my-dialog-content">
                    Are you sure you want to delete this blog?
                </div>
                <footer class="mdc-dialog__actions">
                    <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close">
                        <span class="mdc-button__label">Cancel</span>
                    </button>
                    <button id="delete-confirmation-dialog-delete-btn" type="button"
                            class="mdc-button mdc-dialog__button" data-mdc-dialog-action="accept">
                        <span class="mdc-button__label">Delete</span>
                    </button>
                </footer>
            </div>
        </div>
        <div class="mdc-dialog__scrim"></div>
    </div>
@endsection

<script type="application/javascript">
    const draftBlogs = @json($draftBlogs);
    const publishedBlogs = @json($publishedBlogs);
    console.log('draftBlogs', draftBlogs);
    console.log('publishedBlogs', publishedBlogs);
</script>
