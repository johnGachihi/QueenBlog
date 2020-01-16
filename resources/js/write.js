import {initCkEditor} from './write/editor';
import BlogMainImageInput from "./write/blogMainImageInput/BlogMainImageInput";
const Uppy = require('@uppy/core');
const Dashboard = require('@uppy/dashboard');
const ThumbnailGenerator = require('@uppy/thumbnail-generator');
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import {MDCTextField} from '@material/textfield';

const blogTagInput = new MDCTextField(document.querySelector('#blog-tag-input-container'));

const blogContentTextArea = document.getElementById("blog-content-textarea");

// Init WYSIWIG editor
initCkEditor(blogContentTextArea)
    .then(editor => {enableNavbarPublishButtonOnInputToEditor(editor)});


const publishBtn = document.getElementById("publish-btn");
publishBtn.addEventListener('click', e => {
    $('#publish-modal').modal('toggle');
});

function enableNavbarPublishButtonOnInputToEditor(editor) {
    handlePublishButtonEnabledState(editor);
    editor.model.document.on('change:data', () => {
        handlePublishButtonEnabledState(editor)
    })
}

function handlePublishButtonEnabledState(editor) {
    if (editor.getData() === ''){
        publishBtn.setAttribute('disabled', 'true')
    } else {
        publishBtn.removeAttribute('disabled')
    }
}

new BlogMainImageInput({
    imagePreviewElement: document.getElementById('blog-preview-img-thumbnail'),
    imageInputButton: document.getElementById('preview-img-input-btn'),
    hiddenImageInputElement: document.getElementById('blog-image-hidden-input'),
    progressBar: document.getElementById('preview-img-progress-bar')
});

// /** Uppy */
// const uppy = Uppy({
//     allowMultipleUploads: false,
//     autoProceed: false,
//     restrictions: {
//         maxNumberOfFiles: 1
//     }
// })
//     .use(ThumbnailGenerator, {
//         id: 'ThumbnailGenerator',
//         thumbnailWidth: 200,
//         thumbnailHeight: 200,
//     });

// const previewImageProgressBar = document.getElementById('preview-img-progress-bar');
//
// uppy.on('file-added', (file) => { });
//
// uppy.on('thumbnail:generated', (file, preview) => {
//     const img = document.getElementById('blog-preview-img-thumbnail');
//     img.src = preview;
//     img.classList.remove('d-none');
//
//     if(uppy.getFiles().length > 0) {
//         previewImageInputBtn.innerText = "Change"
//     }
//     previewImageProgressBar.classList.add('d-none');
//     previewImageInputBtn.classList.add('mdc-button--outlined')
// });
//
// const previewImageInputBtn = document.getElementById('preview-img-input-btn');
// const blogImageHiddenInput = document.getElementById('blog-image-hidden-input');
//
// previewImageInputBtn.addEventListener('click', e => {
//     blogImageHiddenInput.click()
// });
//
// blogImageHiddenInput.addEventListener('change', e => {
//     const file = blogImageHiddenInput.files[0];
//     if (file) {
//         uppy.reset();
//         uppy.addFile({
//             name: file.name,
//             type: file.type,
//             data: file
//         });
//
//         previewImageProgressBar.classList.remove('d-none')
//     }
// });
