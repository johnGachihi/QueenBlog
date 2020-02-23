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
// TODO: Move this to separate file
var ElementUtils_1 = require("../../../utils/ElementUtils");
var AboutMeImageComponent_1 = __importDefault(require("./AboutMeImageComponent"));
var AboutMeService_1 = __importDefault(require("../../../network/AboutMeService"));
var RequestOptions_1 = require("../../../network/RequestOptions");
var AboutMeSideImage = /** @class */ (function (_super) {
    __extends(AboutMeSideImage, _super);
    function AboutMeSideImage() {
        return _super.call(this, new AboutMeService_1.default(RequestOptions_1.RequestOptionsValues.get())) || this;
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
}(AboutMeImageComponent_1.default));
var aboutMeSideImage = AboutMeSideImage.getInstance();
//# sourceMappingURL=AboutMeSideImage.js.map