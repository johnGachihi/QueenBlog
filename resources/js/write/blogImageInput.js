import Uppy from "@uppy/core";
import ThumbnailGenerator from "@uppy/thumbnail-generator";

const previewImageProgressBar = document.getElementById('preview-img-progress-bar');
const previewImageInputBtn = document.getElementById('preview-img-input-btn');
const blogImageHiddenInput = document.getElementById('blog-image-hidden-input');

function setupBlogImageInput(config = {}) {
    const uppy = setupUppy();
    setUpImageInputBtn(config.imageInputButton);

    listenToImageInsertion()
    function listenToImageInsertion() {
        blogImageHiddenInput.addEventListener('change', e => {
            const file = blogImageHiddenInput.files[0];
            if (file) {
                inputImage(uppy, file);
                previewImageProgressBar.classList.remove('d-none')
            }
        });
    }
}

function setupUppy(handleThumbNailGenerated) {
    const uppy = initUppy();
    uppy.on('thumbnail:generated', handleThumbNailGenerated);
    return uppy
}

function initUppy() {
    return Uppy({
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
}

function setUpImageInputBtn(imageInputButton) {
    imageInputButton.addEventListener('click', openFileExplorer);
}

function openFileExplorer() {
    blogImageHiddenInput.click()
}

function inputImage(uppy, file) {
    uppy.reset();
    uppy.addFile({
        name: file.name,
        type: file.type,
        data: file
    });
}
