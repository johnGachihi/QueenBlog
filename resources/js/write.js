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
if (blog !== undefined) {
    currentBlog = blog;
}

//Blog title
if (currentBlog !== undefined && currentBlog.title !== undefined) {
    document.getElementById('blog-title-input').value = currentBlog.title;
}

// Init WYSIWIG editor
const blogContentTextArea = document.getElementById("blog-content-textarea");
initCkEditor(blogContentTextArea)
    .then(editor => {
        if (currentBlog !== undefined) {
            editor.setData(currentBlog.content);
        }
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

// Blog image
const blogPreviewImage = new BlogMainImageInput({
    imagePreviewElement: document.getElementById('blog-preview-img-thumbnail'),
    imageInputButton: document.getElementById('preview-img-input-btn'),
    hiddenImageInputElement: document.getElementById('blog-image-hidden-input'),
    progressBar: document.getElementById('preview-img-progress-bar')
});
if (currentBlog !== undefined && currentBlog.main_image_filename !== undefined) {
    const assetUrl = document.querySelector('meta[name="asset-url"]').getAttribute('content');
    blogPreviewImage.addImage(`${assetUrl}storage/blog-main-images/${currentBlog.main_image_filename}`, currentBlog.main_image_filename);
    console.log('Uppy', blogPreviewImage.uppy)
}
blogPreviewImage.onImageInputted((image, updated) => {
    if (updated) {
        currentBlog.main_image = image;
    }
    console.log(currentBlog);
});

//Blog tag
if (currentBlog !== undefined && currentBlog.tag !== undefined) {
    blogTagInput.value = currentBlog.tag
}

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
    // blogsService.update(currentBlog).then(blog => console.log('saved blog (whole)', blog))
    blogsService.updateWithImage(getFormFromBlog(currentBlog)).then(blog => console.log('saved blog (whole)', blog))
});

function getFormFromBlog(blog) {
    const form = new FormData();
    form.append('blog_content', blog.blog_content);
    form.append('blog_title', blog.blog_title);
    form.append('id', blog.id);
    if (blog.main_image !== undefined) {
        form.append('blog_main_image', blog.main_image, blog.main_image.name);
    }
    console.log(form.get('blog_main_image'));
    form.append('blog_tag', blog.tag);

    return form;
}


// TODO: Make Tags required
