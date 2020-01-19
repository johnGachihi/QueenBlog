import {initCkEditor} from './write/editor';
import BlogMainImageInput from "./write/blogMainImageInput/BlogMainImageInput";
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import {MDCTextField} from '@material/textfield';
import PeriodicBlogContentSaver from "./write/PeriodicBlogContentSaver";
import SavedStatusIndicatorImpl from "./write/savedStatusIndicator/SavedStatusIndicatorImpl";
import BlogsService from "./network/BlogsService";

const blogTagInput = new MDCTextField(document.querySelector('#blog-tag-input-container'));

// Init WYSIWIG editor
const blogContentTextArea = document.getElementById("blog-content-textarea");
initCkEditor(blogContentTextArea)
    .then(editor => {
        enableNavbarPublishButtonOnInputToEditor(editor);
        // saveDataOnBlogContentChange(editor);
        activatePeriodicBlogContentSaver(editor);
    });

function enableNavbarPublishButtonOnInputToEditor(editor) {
    handlePublishButtonEnabledState(editor);
    editor.model.document.on('change:data', () => {
        handlePublishButtonEnabledState(editor);
    })
}

function handlePublishButtonEnabledState(editor) {
    if (editor.getData() === '') {
        publishBtn.setAttribute('disabled', 'true')
    } else {
        publishBtn.removeAttribute('disabled')
    }
}

const savedStatusIndicator = new SavedStatusIndicatorImpl(document.getElementById('save-status'));

function activatePeriodicBlogContentSaver(editor) {
    const blogsService = new BlogsService(requestOptions);
    const periodicBlogContentSaver = new PeriodicBlogContentSaver(editor, savedStatusIndicator, blogsService);
    periodicBlogContentSaver.activate();
}

/*
const savedStatusIndicator = document.getElementById('save-status');
function showSaving() {
    savedStatusIndicator.innerText = "Saving..."
}

function showSaved() {
    savedStatusIndicator.innerText = "Saved"
}

function clearSavedStatus() {
    if (savedStatusIndicator.innerText === "Saved")
        savedStatusIndicator.innerText = ""
}
*/

const publishBtn = document.getElementById("publish-btn");
publishBtn.addEventListener('click', e => {
    $('#publish-modal').modal('toggle');
});

new BlogMainImageInput({
    imagePreviewElement: document.getElementById('blog-preview-img-thumbnail'),
    imageInputButton: document.getElementById('preview-img-input-btn'),
    hiddenImageInputElement: document.getElementById('blog-image-hidden-input'),
    progressBar: document.getElementById('preview-img-progress-bar')
});

const requestOptions = {
    csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
};
