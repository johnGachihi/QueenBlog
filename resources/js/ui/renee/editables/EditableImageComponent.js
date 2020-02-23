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
var EditableComponent_1 = __importDefault(require("./EditableComponent"));
var ErrorHandling_1 = __importDefault(require("../../../utils/ErrorHandling"));
var EditableImageComponent = /** @class */ (function (_super) {
    __extends(EditableImageComponent, _super);
    function EditableImageComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    EditableImageComponent.prototype.enterEditingState = function () {
        _super.prototype.enterEditingState.call(this);
        this.openFileExplorer();
    };
    EditableImageComponent.prototype.openFileExplorer = function () {
        this.hiddenImageInput.el.click();
    };
    EditableImageComponent.prototype.setupListeners = function () {
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
    EditableImageComponent.prototype.imageSelected = function () {
        return !!(this.hiddenImageInput.el.files && this.hiddenImageInput.el.files[0]);
    };
    EditableImageComponent.prototype.previewImage = function () {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) { return _this.setContent(e.target.result); };
        reader.readAsDataURL(this.hiddenImageInput.el.files[0]);
    };
    EditableImageComponent.prototype.getContent = function () {
        return this.contentElement.el.src;
    };
    EditableImageComponent.prototype.saveContent = function () {
        var _this = this;
        this.service.save(this.getContentToSave())
            .then(function (response) {
            if (response.status != 'ok') {
                ErrorHandling_1.default("Unable to save: Error " + response);
                _this.cancelEdit();
            }
            _this.enterInitialState();
        })
            .catch(function (err) {
            ErrorHandling_1.default(err);
            _this.cancelEdit();
            _this.enterInitialState();
        });
    };
    EditableImageComponent.prototype.setContent = function (content) {
        this.contentElement.el.src = content;
    };
    return EditableImageComponent;
}(EditableComponent_1.default));
exports.default = EditableImageComponent;
//# sourceMappingURL=EditableImageComponent.js.map