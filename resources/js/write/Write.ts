import {MDCTextField} from "@material/textfield/component";
import RequestOptions from "../network/RequestOptions";
import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'
import {initCkEditor} from "./editor"
import BlogsService from "../network/BlogsService";
import PeriodicBlogContentSaver from "./PeriodicBlogContentSaver";
import SavedStatusIndicatorImpl from "./savedStatusIndicator/SavedStatusIndicatorImpl";
import Blog, {BlogStatus} from "../models/Blog";
import BlogMainImageInput from "./blogMainImageInput/BlogMainImageInput";
import 'bootstrap'
import {blogsPageRelativeURL} from "../utils/constants";

export default class Write {
    private blog: Blog | undefined;

    private blogTitleInput: HTMLInputElement;
    private blogTagInput: MDCTextField;
    private publishBtn: HTMLButtonElement;
    private blogContentTextArea: HTMLTextAreaElement;
    private modalPublishBtn: HTMLButtonElement;
    private modalSaveAsDraftBtn: HTMLButtonElement;
    private requestOptions: RequestOptions;
    private blogsService: BlogsService;
    private publishModalProgessbar: HTMLDivElement;

    constructor(blog?: Blog) {
        this.blog = blog;
        this.init()
    }

    init() {
        this.initializeElements();
        this.initializeRequestOptions();
        this.initializeBlogsService();
        this.setupEditor(this.blog);
        this.setupBlogTitleEl();
        this.setupBlogPreviewImageInput();
        this.setupPublishButton();
        this.setupBlogTagInputEl();
        this.setupModalPublishButton();
        this.setupSaveAsDraftButton();
    }

    private initializeElements() {
        this.blogTitleInput =
            (document.getElementById('blog-title-input') as HTMLInputElement);
        this.blogTagInput =
            new MDCTextField(document.querySelector('#blog-tag-input-container'));
        this.publishBtn =
            document.getElementById("publish-btn") as HTMLButtonElement;
        this.blogContentTextArea =
            (document.getElementById("blog-content-textarea") as HTMLTextAreaElement);
        this.modalPublishBtn =
            (document.getElementById("modal-publish-btn") as HTMLButtonElement);
        this.modalSaveAsDraftBtn =
            (document.getElementById("modal-save-draft-btn") as HTMLButtonElement);
        this.publishModalProgessbar =
            document.getElementById('publish-modal-progressbar') as HTMLDivElement;
    }

    private initializeRequestOptions() {
        this.requestOptions = {
            csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
        };
    }

    private initializeBlogsService() {
        this.blogsService = new BlogsService(this.requestOptions);
    }

    private setupBlogTitleEl() {
        console.log('setupBlogTitleEl');
        if (this.blog != undefined && this.blog.title != undefined) {
            this.blogTitleInput.value = this.blog.title;
        }
    }

    private setupEditor(blog?: Blog) {
        console.log('setupEditor');
        initCkEditor(this.blogContentTextArea)
            .then(editor => {
                if (blog != undefined) {
                    editor.setData(blog.content);
                }
                this.enableNavbarPublishButtonOnInputToEditor(editor);
                this.setupPeriodicBlogContentSaver(editor);
            });
    }

    private enableNavbarPublishButtonOnInputToEditor(editor: BalloonBlockEditor) {
        this.handlePublishButtonEnabledState(editor);
        editor.model.document.on('change:data', () => {
            this.handlePublishButtonEnabledState(editor);
        })
    }

    private handlePublishButtonEnabledState(editor: BalloonBlockEditor) {
        if (editor.getData() === '') {
            this.publishBtn.setAttribute('disabled', 'true')
        } else {
            this.publishBtn.removeAttribute('disabled')
        }
    }

    private setupPeriodicBlogContentSaver(editor: BalloonBlockEditor) {
        console.log(this.blogsService);
        const blogStatusIndicatorEl = document.getElementById('save-status');
        const savedStatusIndicator = new SavedStatusIndicatorImpl(blogStatusIndicatorEl);
        const periodicBlogContentSaver = new PeriodicBlogContentSaver(
            editor, this.blogTitleInput, savedStatusIndicator, this.blogsService, this.blog);

        periodicBlogContentSaver.onSaved(blog => this.handleOnPeriodicSave(blog));
        periodicBlogContentSaver.activate();
    }

    private handleOnPeriodicSave(blog: Blog) {
        console.log('saved blog', blog);
        if (this.blog == undefined) {
            this.blog = blog;
        } else {
            this.blog.title = blog.title;
            this.blog.content = blog.content;
        }
    }

    private setupBlogPreviewImageInput() {
        const blogPreviewImage = new BlogMainImageInput({
            imagePreviewElement: document.getElementById('blog-preview-img-thumbnail') as HTMLImageElement,
            imageInputButton: document.getElementById('preview-img-input-btn') as HTMLButtonElement,
            hiddenImageInputElement: document.getElementById('blog-image-hidden-input') as HTMLInputElement,
            progressBar: document.getElementById('preview-img-progress-bar') as HTMLDivElement
        });
        if (this.blog !== undefined && this.blog.main_image_filename !== undefined) {
            const assetUrl = document.querySelector('meta[name="asset-url"]').getAttribute('content');
            blogPreviewImage.addImage(`${assetUrl}storage/blog-main-images/${this.blog.main_image_filename}`, this.blog.main_image_filename);
            console.log('Uppy', blogPreviewImage.uppy)
        }
        blogPreviewImage.onImageInputted((image, updated) => {
            if (updated && this.blog != undefined) {
                this.blog.main_image = image;
            }
            console.log(this.blog);
        });
    }

    private setupPublishButton() {
        this.publishBtn.addEventListener('click', e => {
            $('#publish-modal').modal('toggle');
        });
    }

    private setupBlogTagInputEl() {
        if (this.blog != undefined && this.blog.tag != undefined) {
            this.blogTagInput.value = this.blog.tag;
        }
    }

    private setupModalPublishButton() {
        const modalPublishButton = document.getElementById("modal-publish-btn");
        modalPublishButton.addEventListener('click', e => {
            this.saveBlog(BlogStatus.PUBLISHED);
        });
    }

    private setupSaveAsDraftButton() {
        const modalSaveAsDraftBtn = document.getElementById("modal-save-draft-btn");
        modalSaveAsDraftBtn.addEventListener('click', e => {
            this.saveBlog(BlogStatus.DRAFT);
        });
    }

    private saveBlog(status: BlogStatus) {
        this.showPublishModalProgressbar();
        this.blogsService.updateWithImage(this.getFormFromBlog(this.blog, status))
            .then(blog => {
                console.log('saved blog (whole)', blog);
                this.hidePublishModalProgressbar();
                window.location.replace(`${this.requestOptions.baseUrl}/${blogsPageRelativeURL}`);
            })
    }

    private showPublishModalProgressbar() {
        this.publishModalProgessbar.classList.remove('d-none');
    }

    private hidePublishModalProgressbar() {
        this.publishModalProgessbar.classList.add('d-none');
    }

    // TODO Refactor code and remove this method
    private getFormFromBlog(blog, blogStatus: BlogStatus) {
        const form = new FormData();
        form.append('id', blog.id);
        form.append('title', this.blogTitleInput.value);
        form.append('content', blog.content);
        if (blog.main_image !== undefined) {
            form.append('main_image', blog.main_image, blog.main_image.name);
        }
        form.append('tag', this.blogTagInput.value);
        form.append('status', blogStatus);

        return form;
    }

}
