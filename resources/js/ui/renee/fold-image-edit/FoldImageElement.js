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
var EditableImageComponent_1 = __importDefault(require("../editables/EditableImageComponent"));
var FoldImageService_1 = __importDefault(require("../../../network/FoldImageService"));
var RequestOptions_1 = require("../../../network/RequestOptions");
var FoldImageElement = /** @class */ (function (_super) {
    __extends(FoldImageElement, _super);
    function FoldImageElement(foldImage) {
        var _this = this;
        foldImage.id = 2;
        _this = _super.call(this, new FoldImageService_1.default(RequestOptions_1.RequestOptionsValues.get())) || this;
        _this.foldImage = foldImage;
        _this.setContent(RequestOptions_1.RequestOptionsValues.get().baseUrl + "/storage/" + foldImage.filename);
        _this.addElementToDom();
        return _this;
    }
    FoldImageElement.prototype.addElementToDom = function () {
        document.getElementById('fold-images')
            .appendChild(this.foldImageDom.getElementsByClassName('fold-image-elem')[0]);
    };
    FoldImageElement.prototype.initElements = function () {
        this.foldImageDom = new DOMParser()
            .parseFromString(getFoldImageHTMLString(), 'text/html');
        this.editButton = new ElementUtils_1.El(this.foldImageDom.querySelector('.edit-btn'));
        this.contentElement = new ElementUtils_1.El(this.foldImageDom.querySelector('.fold-image'));
        this.saveAndCancelContainer = new ElementUtils_1.El(this.foldImageDom.querySelector('.save-and-cancel-container'));
        this.saveButton = new ElementUtils_1.El(this.foldImageDom.querySelector('.save-btn'));
        this.cancelButton = new ElementUtils_1.El(this.foldImageDom.querySelector('.cancel-btn'));
        this.loadIndicator = new ElementUtils_1.El(this.foldImageDom.querySelector('.load-indicator'));
        this.hiddenImageInput = new ElementUtils_1.El(this.foldImageDom.querySelector('.hidden-file-input'));
    };
    FoldImageElement.prototype.getContentToSave = function () {
        var formData = new FormData();
        formData.append('id', "" + this.foldImage.id);
        formData.append('fold_image', this.content, this.content.name);
        return formData;
    };
    return FoldImageElement;
}(EditableImageComponent_1.default));
exports.default = FoldImageElement;
function getFoldImageHTMLString() {
    return "\n    <div class=\"fold-image-elem my-5 col-12 d-flex justify-content-center\">\n        <div class=\"w-75\">\n            <div class=\"fold-image-container\">\n                <img class=\"fold-image w-100 h-100\" alt=\"Fold image\"\n                     src=\"https://images.pexels.com/photos/3626734/pexels-photo-3626734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n            </div>\n            <div class=\"mt-3 d-flex justify-content-end\">\n                <button class=\"edit-btn mdc-button mdc-button--raised d-none\">\n                    <span class=\"mdc-button__ripple\"></span>\n                    Edit\n                </button>\n                <span class=\"load-indicator mr-4\">Saving...</span>\n                <div class=\"save-and-cancel-container\">\n                    <button class=\"save-btn mdc-button mdc-button--raised \">\n                        <span class=\"mdc-button__ripple\"></span>\n                        Save\n                    </button>\n                    <button class=\"cancel-btn mdc-button mdc-button--raised \">\n                        <span class=\"mdc-button__ripple\"></span>\n                        Cancel\n                    </button>\n                </div>\n            </div>\n            <input class=\"hidden-file-input d-none\" type=\"file\" accept=\"image/*\">\n        </div>\n    </div>\n";
}
//# sourceMappingURL=FoldImageElement.js.map