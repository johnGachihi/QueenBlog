"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __importDefault(require("@uppy/core"));
var thumbnail_generator_1 = __importDefault(require("@uppy/thumbnail-generator"));
var BlogMainImageInput = /** @class */ (function () {
    function BlogMainImageInput(configOptions) {
        var _this = this;
        this.configOptions = configOptions;
        console.log(this.configOptions);
        this.initUppy();
        this.setupImageInputButton();
        this.listenForImageInput(function (file) { return _this.handleImageInputted(file); });
        this.listenForThumbnailGenerated(function (file, preview) { return _this.handleThumbnailGenerated(file, preview); });
    }
    BlogMainImageInput.prototype.initUppy = function () {
        this.uppy = core_1.default({
            allowMultipleUploads: false,
            autoProceed: false,
            restrictions: {
                maxNumberOfFiles: 1
            }
        })
            .use(thumbnail_generator_1.default, {
            id: 'ThumbnailGenerator',
            thumbnailWidth: 200,
            thumbnailHeight: 200,
        });
    };
    BlogMainImageInput.prototype.setupImageInputButton = function () {
        var _this = this;
        console.log('setUpImageButton', this.configOptions);
        this.configOptions.imageInputButton.addEventListener('click', function () { return _this.openFileExplorer(); });
    };
    BlogMainImageInput.prototype.openFileExplorer = function () {
        this.configOptions.hiddenImageInputElement.click();
    };
    BlogMainImageInput.prototype.listenForImageInput = function (handleImageInputted) {
        var _this = this;
        this.configOptions.hiddenImageInputElement.addEventListener('change', function () {
            handleImageInputted(_this.configOptions.hiddenImageInputElement.files[0]);
        });
    };
    BlogMainImageInput.prototype.handleImageInputted = function (file) {
        this.uppy.reset();
        this.uppy.addFile({
            name: file.name,
            type: file.type,
            data: file
        });
        this.showProgressBar();
    };
    BlogMainImageInput.prototype.showProgressBar = function () {
        this.configOptions.progressBar.classList.remove('d-none');
    };
    BlogMainImageInput.prototype.listenForThumbnailGenerated = function (handleThumbnailGenerated) {
        this.uppy.on('thumbnail:generated', handleThumbnailGenerated);
    };
    BlogMainImageInput.prototype.handleThumbnailGenerated = function (file, preview) {
        this.configOptions.imagePreviewElement.src = preview;
        this.configOptions.imagePreviewElement.classList.remove('d-none');
        if (this.uppy.getFiles().length > 0) {
            this.configOptions.imageInputButton.innerText = "Change";
        }
        this.hideProgressBar();
        this.changeButtonToOutlined();
    };
    BlogMainImageInput.prototype.hideProgressBar = function () {
        this.configOptions.progressBar.classList.add('d-none');
    };
    BlogMainImageInput.prototype.changeButtonToOutlined = function () {
        this.configOptions.imageInputButton.classList.add('mdc-button--outlined');
    };
    return BlogMainImageInput;
}());
exports.default = BlogMainImageInput;
//# sourceMappingURL=BlogMainImageInput.js.map