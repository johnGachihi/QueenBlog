@extends('layouts.app')

@section('content')
    <div class="row my-3 justify-content-between">
        <div class="col-2">
            <span id="draft">Draft</span>
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
            <div class="mdc-text-field mdc-text-field--fullwidth">
                <input id="blog-title-textfield" class="mdc-text-field__input"
                       type="text"
                       placeholder="Title"
                       aria-label="Full-Width Text Field">
            </div>

            <!-- Blog content WYSIWIG editor -->
            <div class="mt-2">
                <div id="blog-content-textarea">
                    <p>Write</p>
                </div>
            </div>
        </div>

    </div>
@endsection
