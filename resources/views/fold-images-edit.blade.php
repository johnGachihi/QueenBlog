@extends('layouts.app')

@section('content')
    <div id="fold-images-edit-page" class="d-none"></div>
    @component('renee.components.header')
        @slot('left_side')
            <div class="h5 mb-0">Edit images on home page slider</div>
        @endslot

        @slot('right_side')
            @component('renee.components.dropdown-menu')
            @endcomponent
        @endslot
    @endcomponent

    <div id="fold-images"  class="row mt-4">
        {{--<div class="fold-image-elem col-12 d-flex justify-content-center">
            <div class="w-75">
                <div class="fold-image-container">
                    <img class="fold-image w-100 h-100" alt="Fold image"
                         src="https://images.pexels.com/photos/3626734/pexels-photo-3626734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                </div>
                <div class="mt-3 d-flex justify-content-end">
                    <button class="edit-btn mdc-button mdc-button--raised d-none">
                        <span class="mdc-button__ripple"></span>
                        Edit
                    </button>
                    <span class="load-indicator mr-4">Saving...</span>
                    <div class="save-and-cancel-container">
                        <button class="save-btn mdc-button mdc-button--raised ">
                            <span class="mdc-button__ripple"></span>
                            Save
                        </button>
                        <button class="cancel-btn mdc-button mdc-button--raised ">
                            <span class="mdc-button__ripple"></span>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>--}}
    </div>
@endsection

@section('scripts')
    <script type="text/javascript" src="{{ asset('js/lib/ResizeSensor.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/lib/ElementQueries.js') }}"></script>
    <script>
        const foldImages = @json($foldImages);
        console.log(foldImages);
    </script>
@endsection
