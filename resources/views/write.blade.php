@extends('layouts.app')

@section('stylesheet')
    <link rel="stylesheet" href="node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.css"/>
@endsection

@section('logo-text')
    Spread the word
@endsection

@section('content')
    <!-- MUST be here to indicate page -> (`write-page`) -->
    <div id="write-page" class="d-none"></div>
    @component('renee.components.header')
    <div class="top-bar row py-3 justify-content-between sticky-top">
        @slot('left_side')
        <div class="ml-3">
            <span id="draft">
                @isset($blog)
                    {{ ucfirst($blog->status) }}
                @endisset
                @empty($blog)
                    Draft
                @endempty
            </span>
            <span id="save-status" class="ml-3"></span>
        </div>
        @endslot

        @slot('right_side')
        <div class="d-flex">
            <button id="publish-btn" class="publish-btn mdc-button mdc-button--raised" disabled>
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">Publish</span>
            </button>

            @component('renee.components.dropdown-menu')
            @endcomponent
        </div>
        @endslot
    </div>
    @endcomponent
    <!-- Writing Area -->
    <div class="row justify-content-center mt-lg-0 mt-4">
        <div class="col-lg-8 col-11">
            <!-- Blog title text-field -->
            <div id="blog-title-textfield" class="mdc-text-field mdc-text-field--fullwidth">
                <input class="mdc-text-field__input"
                       id="blog-title-input"
                       type="text"
                       placeholder="Title"
                       aria-label="Full-Width Text Field"
                       style="font-size: 31px">
            </div>

            <!-- Blog content WYSIWIG editor -->
            <div class="mt-2">
                <div id="blog-content-textarea"></div>
            </div>
        </div>
    </div>

    <div id="publish-modal" class="modal fade" tabindex="-1" role="dialog"
         aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="container-fluid">
                    <div class="row justify-content-end mx-1 my-2">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="row justify-content-center modal-input-labels">
                        <div>Add blog image</div>
                    </div>
                    <div class="row justify-content-center">
                        <div id="blog-image-input"
                             class="mb-4 d-flex justify-content-center align-content-center position-relative"
                             style="width: 200px; height: 200px">
                            <img id="blog-preview-img-thumbnail" class="d-none elements-atop" height="300" width="300"
                                 alt="" style="object-fit: contain">
                            <div role="progressbar" id="preview-img-progress-bar"
                                 class="mdc-linear-progress mdc-linear-progress--indeterminate elements-atop d-none">
                                <div class="mdc-linear-progress__buffering-dots"></div>
                                <div class="mdc-linear-progress__buffer"></div>
                                <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                                    <span class="mdc-linear-progress__bar-inner"></span>
                                </div>
                                <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                                    <span class="mdc-linear-progress__bar-inner"></span>
                                </div>
                            </div>
                            <button id="preview-img-input-btn" class="mdc-button my-auto">
                                <span class="mdc-button__ripple"></span>
                                Add Image Preview
                            </button>
                        </div>
                    </div>
                    <div class="row justify-content-center mt-3 modal-input-labels">Add blog tag</div>
                    <div class="row justify-content-center mb-3">
                        <div class="position-relative">
                            <div id="blog-tag-input-container" class="mdc-text-field">
                                <input type="text" class="mdc-text-field__input" id="blog-tag-input">
                                <div class="mdc-line-ripple"></div>
                                <label for="blog-tag-input" class="mdc-floating-label">Blog tag</label>
                            </div>
                        </div>
                    </div>
                    <div id="autoComplete-results"></div>
                    <div class="row justify-content-center my-5">
                        <button id="modal-save-draft-btn" class="publish-btn mdc-button mdc-button--outlined mx-2">
                            <div class="mdc-button__ripple"></div>
                            <span class="mdc-button__label">Save as draft</span>
                        </button>
                        <button id="modal-publish-btn" class="publish-btn mdc-button mdc-button--raised mx-2">
                            <div class="mdc-button__ripple"></div>
                            <span class="mdc-button__label">Publish</span>
                        </button>
                    </div>
                </div>
                <div role="progressbar" id="publish-modal-progressbar"
                     class="mdc-linear-progress mdc-linear-progress--indeterminate d-none">
                    <div class="mdc-linear-progress__buffering-dots"></div>
                    <div class="mdc-linear-progress__buffer"></div>
                    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                        <span class="mdc-linear-progress__bar-inner"></span>
                    </div>
                    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                        <span class="mdc-linear-progress__bar-inner"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <input style="display: none" type="file" id="blog-image-hidden-input"/>

@endsection

@section('scripts')
    <script src="{{ asset('js/lib/ckeditor.js') }}" defer></script>
@endsection

<script type="application/javascript">
    let blog;
    @isset($blog)
        blog = @json($blog);
    // console.log(blog);
    @endisset
    let tags = @json($tags);
</script>
