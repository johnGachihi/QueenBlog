@extends('layouts.app')

@section('content')
    <div id="top-bar" class="row py-3 justify-content-between sticky-top">
        <div class="col-2">
            <span id="draft">Draft</span>
            <span class="ml-3">Saved</span>
        </div>
        <div class="col-2">
            <button class="publish-btn mdc-button mdc-button--raised">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">Publish</span>
            </button>
        </div>
    </div>

    <!-- Writing Area -->
    <div class="row justify-content-center">
        <div class="col-8">
            <!-- Blog title text-field -->
            <div id="blog-title-textfield" class="mdc-text-field mdc-text-field--fullwidth">
                <input class="mdc-text-field__input"
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
@endsection
