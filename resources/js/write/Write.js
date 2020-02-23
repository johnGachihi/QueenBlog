"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("@material/textfield/component");
var editor_1 = require("./editor");
var BlogsService_1 = __importDefault(require("../network/BlogsService"));
var PeriodicBlogContentSaver_1 = __importDefault(require("./PeriodicBlogContentSaver"));
var SavedStatusIndicatorImpl_1 = __importDefault(require("./savedStatusIndicator/SavedStatusIndicatorImpl"));
var Blog_1 = require("../models/Blog");
var BlogMainImageInput_1 = __importDefault(require("./blogMainImageInput/BlogMainImageInput"));
require("bootstrap");
var constants_1 = require("../utils/constants");
var autoComplete_1 = __importDefault(require("@tarekraafat/autocomplete.js/dist/js/autoComplete"));
var Write = /** @class */ (function () {
    function Write(tags, blog) {
        this.tags = tags;
        this.blog = blog;
        this.init();
    }
    Write.prototype.init = function () {
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
    };
    Write.prototype.initializeElements = function () {
        this.blogTitleInput =
            document.getElementById('blog-title-input');
        this.blogTagInput =
            new component_1.MDCTextField(document.querySelector('#blog-tag-input-container'));
        this.initBlogTagInputAutoComplete();
        this.publishBtn =
            document.getElementById("publish-btn");
        this.blogContentTextArea =
            document.getElementById("blog-content-textarea");
        this.modalPublishBtn =
            document.getElementById("modal-publish-btn");
        this.modalSaveAsDraftBtn =
            document.getElementById("modal-save-draft-btn");
        this.publishModalProgessbar =
            document.getElementById('publish-modal-progressbar');
    };
    Write.prototype.initBlogTagInputAutoComplete = function () {
        var _this = this;
        new autoComplete_1.default({
            data: {
                src: this.tags
            },
            selector: '#blog-tag-input',
            resultsList: {
                render: true,
                container: function (source) {
                    source.setAttribute("id", "tag-list");
                    source.classList.add('list-group');
                },
                destination: document.getElementById('blog-tag-input-container')
            },
            resultItem: {
                content: function (data, source) {
                    source.innerHTML = data.match;
                    source.classList.add('list-group-item', 'list-group-item-action');
                }
            },
            onSelection: function (feedback) {
                _this.blogTagInput.value = feedback.selection.value;
            }
        });
    };
    Write.prototype.initializeRequestOptions = function () {
        this.requestOptions = {
            csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
        };
    };
    Write.prototype.initializeBlogsService = function () {
        this.blogsService = new BlogsService_1.default(this.requestOptions);
    };
    Write.prototype.setupBlogTitleEl = function () {
        console.log('setupBlogTitleEl');
        if (this.blog != undefined && this.blog.title != undefined) {
            this.blogTitleInput.value = this.blog.title;
        }
    };
    Write.prototype.setupEditor = function (blog) {
        var _this = this;
        console.log('setupEditor');
        editor_1.initCkEditor(this.blogContentTextArea)
            .then(function (editor) {
            if (blog != undefined) {
                editor.setData(blog.content);
            }
            _this.enableNavbarPublishButtonOnInputToEditor(editor);
            _this.setupPeriodicBlogContentSaver(editor);
            editor.editing.view.on('click', function (evt, data) {
                data.target; // -> engine.view.Element
            });
        });
    };
    Write.prototype.enableNavbarPublishButtonOnInputToEditor = function (editor) {
        var _this = this;
        this.handlePublishButtonEnabledState(editor);
        editor.model.document.on('change:data', function () {
            _this.handlePublishButtonEnabledState(editor);
        });
    };
    Write.prototype.handlePublishButtonEnabledState = function (editor) {
        if (editor.getData() === '') {
            this.publishBtn.setAttribute('disabled', 'true');
        }
        else {
            this.publishBtn.removeAttribute('disabled');
        }
    };
    Write.prototype.setupPeriodicBlogContentSaver = function (editor) {
        var _this = this;
        console.log(this.blogsService);
        var blogStatusIndicatorEl = document.getElementById('save-status');
        var savedStatusIndicator = new SavedStatusIndicatorImpl_1.default(blogStatusIndicatorEl);
        var periodicBlogContentSaver = new PeriodicBlogContentSaver_1.default(editor, this.blogTitleInput, savedStatusIndicator, this.blogsService, this.blog);
        periodicBlogContentSaver.onSaved(function (blog) { return _this.handleOnPeriodicSave(blog); });
        periodicBlogContentSaver.activate();
    };
    Write.prototype.handleOnPeriodicSave = function (blog) {
        console.log('saved blog', blog);
        if (this.blog == undefined) {
            this.blog = blog;
        }
        else {
            this.blog.title = blog.title;
            this.blog.content = blog.content;
        }
    };
    Write.prototype.setupBlogPreviewImageInput = function () {
        var _this = this;
        // TODO: Work on this
        var blogPreviewImage = new BlogMainImageInput_1.default({
            imagePreviewElement: document.getElementById('blog-preview-img-thumbnail'),
            imageInputButton: document.getElementById('preview-img-input-btn'),
            hiddenImageInputElement: document.getElementById('blog-image-hidden-input'),
            progressBar: document.getElementById('preview-img-progress-bar')
        });
        if (this.blog !== undefined && this.blog.main_image_filename !== undefined) {
            var assetUrl = document.querySelector('meta[name="asset-url"]').getAttribute('content');
            blogPreviewImage.addImage(assetUrl + "storage/blog-main-images/" + this.blog.main_image_filename, this.blog.main_image_filename);
            console.log('Uppy', blogPreviewImage.uppy);
        }
        blogPreviewImage.onImageInputted(function (image, updated) {
            if (updated && _this.blog != undefined) {
                _this.blog.main_image = image;
            }
            console.log(_this.blog);
        });
    };
    Write.prototype.setupPublishButton = function () {
        this.publishBtn.addEventListener('click', function (e) {
            $('#publish-modal').modal('toggle');
        });
    };
    Write.prototype.setupBlogTagInputEl = function () {
        if (this.blog != undefined && this.blog.tag != undefined) {
            this.blogTagInput.value = this.blog.tag;
        }
    };
    Write.prototype.setupModalPublishButton = function () {
        var _this = this;
        var modalPublishButton = document.getElementById("modal-publish-btn");
        modalPublishButton.addEventListener('click', function (e) {
            _this.saveBlog(Blog_1.BlogStatus.PUBLISHED);
        });
    };
    Write.prototype.setupSaveAsDraftButton = function () {
        var _this = this;
        var modalSaveAsDraftBtn = document.getElementById("modal-save-draft-btn");
        modalSaveAsDraftBtn.addEventListener('click', function (e) {
            _this.saveBlog(Blog_1.BlogStatus.DRAFT);
        });
    };
    Write.prototype.saveBlog = function (status) {
        var _this = this;
        this.showPublishModalProgressbar();
        this.blogsService.updateWithImage(this.getFormFromBlog(this.blog, status))
            .then(function (blog) {
            console.log('saved blog (whole)', blog);
            _this.hidePublishModalProgressbar();
            window.location.replace(_this.requestOptions.baseUrl + "/" + constants_1.blogsPageRelativeURL);
        });
    };
    Write.prototype.showPublishModalProgressbar = function () {
        this.publishModalProgessbar.classList.remove('d-none');
    };
    Write.prototype.hidePublishModalProgressbar = function () {
        this.publishModalProgessbar.classList.add('d-none');
    };
    // TODO Refactor code and remove this method
    Write.prototype.getFormFromBlog = function (blog, blogStatus) {
        var form = new FormData();
        form.append('id', blog.id);
        form.append('title', this.blogTitleInput.value);
        form.append('content', blog.content);
        if (blog.main_image !== undefined) {
            form.append('main_image', blog.main_image, blog.main_image.name);
        }
        form.append('tag', this.blogTagInput.value);
        form.append('status', blogStatus);
        return form;
    };
    return Write;
}());
exports.default = Write;
//# sourceMappingURL=Write.js.map