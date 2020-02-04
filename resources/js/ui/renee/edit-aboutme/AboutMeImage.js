"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementUtils_1 = require("../../../utils/ElementUtils");
var AboutMeComponents_1 = __importDefault(require("./AboutMeComponents"));
var AboutMeImageComponent = /** @class */ (function (_super) {
    __extends(AboutMeImageComponent, _super);
    function AboutMeImageComponent() {
        return _super.call(this) || this;
        // this.enterInitialState();
    }
    /*protected initUppy() {
        this.uppy = Uppy({
            allowMultipleUploads: false,
            autoProceed: false,
            restrictions: {
                maxNumberOfFiles: 1
            }
        })
            .use(ThumbnailGenerator, {
                id: 'ThumbnailGenerator',
                thumbnailWidth: this.contentElement.el.offsetWidth,
                // thumbnailHeight: 200,
            });
    }*/
    AboutMeImageComponent.prototype.enterEditingState = function () {
        _super.prototype.enterEditingState.call(this);
        this.openFileExplorer();
    };
    AboutMeImageComponent.prototype.openFileExplorer = function () {
        this.hiddenImageInput.el.click();
    };
    AboutMeImageComponent.prototype.setupListeners = function () {
        var _this = this;
        _super.prototype.setupListeners.call(this);
        this.hiddenImageInput.el.addEventListener('change', function (ev) {
            if (_this.hiddenImageInput.el.files && _this.hiddenImageInput.el.files[0]) {
                var image = _this.hiddenImageInput.el.files[0];
                _this.content = image;
                // this.addImage(image);
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.contentElement.el.setAttribute('src', e.target.result);
                };
                reader.readAsDataURL(_this.hiddenImageInput.el.files[0]);
            }
        });
    };
    /*private addImage(image: File) {
        this.uppy.reset();
        this.uppy.addFile({
            name: image.name,
            type: image.type,
            data: image
        });
    }*/
    AboutMeImageComponent.prototype.getContent = function () {
        return this.contentElement.el.src;
    };
    AboutMeImageComponent.prototype.setContent = function (content) {
        this.contentElement.el.src = content;
    };
    return AboutMeImageComponent;
}(AboutMeComponents_1.default));
exports.default = AboutMeImageComponent;
var AboutMeSideImage = /** @class */ (function (_super) {
    __extends(AboutMeSideImage, _super);
    function AboutMeSideImage() {
        return _super.call(this) || this;
    }
    AboutMeSideImage.getInstance = function () {
        if (this.INSTANCE == undefined) {
            this.INSTANCE = new AboutMeSideImage();
        }
        return this.INSTANCE;
    };
    AboutMeSideImage.prototype.initElements = function () {
        this.editButton = new ElementUtils_1.El(document.getElementById('about-me-side-image-edit'));
        this.contentElement = new ElementUtils_1.El(document.getElementById('about-me-side-image'));
        this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-side-image-buttons'));
        this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me-side-image'));
        this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me-side-image'));
        this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me-side-image'));
        this.hiddenImageInput = new ElementUtils_1.El(document.getElementById('about-me-side-image-hidden-input'));
    };
    AboutMeSideImage.prototype.getContentToSave = function () {
        var formData = new FormData();
        formData.append('about_me_side_image_file', this.content, this.content.name);
        return formData;
    };
    return AboutMeSideImage;
}(AboutMeImageComponent));
var aboutMeImage = AboutMeSideImage.getInstance();
//# sourceMappingURL=AboutMeImage.js.map