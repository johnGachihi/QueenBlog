import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'

const Uppy = require('@uppy/core');
const Dashboard = require('@uppy/dashboard');
const ThumbnailGenerator = require('@uppy/thumbnail-generator');
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const blogContentTextArea = document.getElementById("blog-content-textarea");

// Init WYSIWIG editor
BalloonBlockEditor.create(blogContentTextArea, {
    placeholder: 'Write the word...',
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'blockQuote']
})
    .then(editor => {
        // console.log(editor);
        // console.log(Array.from( ckEditor.ui.componentFactory.names() ));
    })
    .catch(error => {
        console.error(error);
    });


const publishBtn = document.getElementById("publish-btn");

publishBtn.addEventListener('click', e => {
    $('#publish-modal').modal('toggle');
});

/** Uppy */
const uppy = Uppy({
    allowMultipleUploads: false,
    autoProceed: false,
    restrictions: {
        maxNumberOfFiles: 1
    }
})
    .use(ThumbnailGenerator, {
        id: 'ThumbnailGenerator',
        thumbnailWidth: 200,
        thumbnailHeight: 200,
    });

const previewImageProgressBar = document.getElementById('preview-img-progress-bar');

uppy.on('file-added', (file) => { });

uppy.on('thumbnail:generated', (file, preview) => {
    const img = document.getElementById('blog-preview-img-thumbnail');
    img.src = preview;
    img.classList.remove('d-none');
    if(uppy.getFiles().length > 0) {
        previewImageInputBtn.innerText = "Change"
    }

    previewImageProgressBar.classList.add('d-none');
    previewImageInputBtn.classList.add('mdc-button--outlined')
});

const previewImageInputBtn = document.getElementById('preview-img-input-btn');
const blogImageHiddenInput = document.getElementById('blog-image-hidden-input');

previewImageInputBtn.addEventListener('click', e => {
    blogImageHiddenInput.click()
});

blogImageHiddenInput.addEventListener('change', e => {
    const file = blogImageHiddenInput.files[0];
    if (file) {
        uppy.reset();
        uppy.addFile({
            name: file.name,
            type: file.type,
            data: file
        });

        previewImageProgressBar.classList.remove('d-none')
    }
});
