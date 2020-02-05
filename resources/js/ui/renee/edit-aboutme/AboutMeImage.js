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
    }
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
        this.contentElement.on('keydown', function (e) {
            //@ts-ignore
            if (e.keyCode === 13) {
                _this.saveButton.el.click();
                return false;
            }
            //@ts-ignore
            if (e.keyCode === 27) {
                _this.cancelButton.el.click();
            }
        });
        this.hiddenImageInput.on('change', function (ev) {
            if (_this.imageSelected()) {
                _this.content = _this.hiddenImageInput.el.files[0];
                _this.previewImage();
            }
        });
    };
    AboutMeImageComponent.prototype.imageSelected = function () {
        return !!(this.hiddenImageInput.el.files && this.hiddenImageInput.el.files[0]);
    };
    AboutMeImageComponent.prototype.previewImage = function () {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) { return _this.setContent(e.target.result); };
        reader.readAsDataURL(this.hiddenImageInput.el.files[0]);
    };
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
var aboutMeSideImage = AboutMeSideImage.getInstance();
var AboutMeImage = /** @class */ (function (_super) {
    __extends(AboutMeImage, _super);
    function AboutMeImage() {
        return _super.call(this) || this;
    }
    AboutMeImage.getInstance = function () {
        if (this.INSTANCE == undefined) {
            this.INSTANCE = new AboutMeImage();
        }
        return this.INSTANCE;
    };
    AboutMeImage.prototype.initElements = function () {
        this.editButton = new ElementUtils_1.El(document.getElementById('about-me-image-edit'));
        this.contentElement = new ElementUtils_1.El(document.getElementById('about-me-image'));
        this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-image-buttons'));
        this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me-image'));
        this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me-image'));
        this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me-image'));
        this.hiddenImageInput = new ElementUtils_1.El(document.getElementById('about-me-image-hidden-input'));
    };
    AboutMeImage.prototype.getContentToSave = function () {
        var formData = new FormData();
        formData.append('about_me_image_file', this.content, this.content.name);
        return formData;
    };
    return AboutMeImage;
}(AboutMeImageComponent));
var aboutMeImage = AboutMeImage.getInstance();
//# sourceMappingURL=AboutMeImage.js.map