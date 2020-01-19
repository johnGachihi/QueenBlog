import {initCkEditor} from './write/editor';
import BlogMainImageInput from "./write/blogMainImageInput/BlogMainImageInput";
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import {MDCTextField} from '@material/textfield';
import PeriodicBlogContentSaver from "./write/PeriodicBlogContentSaver";
import SavedStatusIndicatorImpl from "./write/savedStatusIndicator/SavedStatusIndicatorImpl";
import BlogsService from "./network/BlogsService";

const blogTagInput = new MDCTextField(document.querySelector('#blog-tag-input-container'));
let currentBlog;

// Init WYSIWIG editor
const blogContentTextArea = document.getElementById("blog-content-textarea");
initCkEditor(blogContentTextArea)
    .then(editor => {
        enableNavbarPublishButtonOnInputToEditor(editor);
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
    const blogTitleEl = document.getElementById("blog-title-input");
    const blogsService = new BlogsService(requestOptions);
    const periodicBlogContentSaver = new PeriodicBlogContentSaver(
        editor, blogTitleEl, savedStatusIndicator, blogsService);
    periodicBlogContentSaver.onSaved(blog => {
        console.log('saved blog', blog);
        if (currentBlog === undefined) {
            currentBlog = blog;
        }
    });
    periodicBlogContentSaver.activate();
}

const publishBtn = document.getElementById("publish-btn");
publishBtn.addEventListener('click', e => {
    $('#publish-modal').modal('toggle');
});

const blogPreviewImage = new BlogMainImageInput({
    imagePreviewElement: document.getElementById('blog-preview-img-thumbnail'),
    imageInputButton: document.getElementById('preview-img-input-btn'),
    hiddenImageInputElement: document.getElementById('blog-image-hidden-input'),
    progressBar: document.getElementById('preview-img-progress-bar')
});
blogPreviewImage.onImageInputted(image => {
    currentBlog.main_image = image;
    console.log('main image', image);
    console.log(currentBlog);
});

const requestOptions = {
    csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
};

const modalPublishBtn = document.getElementById("modal-publish-btn");
modalPublishBtn.addEventListener('click', e => {
    currentBlog.tag = document.getElementById('blog-tag-input').value;

});

const modalSaveAsDraftBtn = document.getElementById("modal-save-draft-btn");
modalSaveAsDraftBtn.addEventListener('click', e => {
    currentBlog.tag = document.getElementById('blog-tag-input').value;
    const blogsService = new BlogsService(requestOptions);
    blogsService.update(currentBlog).then(blog => console.log('saved blog (whole)', blog))
});
