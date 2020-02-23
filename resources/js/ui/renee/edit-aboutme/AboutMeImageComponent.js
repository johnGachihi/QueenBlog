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
var EditableImageComponent_1 = __importDefault(require("../editables/EditableImageComponent"));
var ErrorHandling_1 = __importDefault(require("../../../utils/ErrorHandling"));
var AboutMeService_1 = __importDefault(require("../../../network/AboutMeService"));
var RequestOptions_1 = require("../../../network/RequestOptions");
/*
export default abstract class AboutMeImageComponent extends AboutMeComponents {
    protected hiddenImageInput: El<HTMLInputElement>;
    protected content: File;

    constructor() {
        super();
    }

    protected abstract initElements()

    enterEditingState() {
        super.enterEditingState();
        this.openFileExplorer();
    }

    openFileExplorer() {
        this.hiddenImageInput.el.click();
    }

    protected setupListeners() {
        super.setupListeners();

        this.contentElement.on('keydown', e => {
            //@ts-ignore
            if (e.keyCode === 13) {
                this.saveButton.el.click();
                return false;
            }
            //@ts-ignore
            if (e.keyCode === 27) {
                this.cancelButton.el.click();
            }
        });

        this.hiddenImageInput.on('change', ev => {
            if (this.imageSelected()) {
                this.content = this.hiddenImageInput.el.files[0];
                this.previewImage();
            }
        });
    }

    private imageSelected(): boolean {
        return !!(this.hiddenImageInput.el.files && this.hiddenImageInput.el.files[0]);
    }

    private previewImage() {
        const reader = new FileReader();
        reader.onload = e => this.setContent(e.target.result as string);
        reader.readAsDataURL(this.hiddenImageInput.el.files[0]);
    }

    protected getContent() {
        return (this.contentElement.el as HTMLImageElement).src;
    }

    protected abstract getContentToSave();

    protected setContent(content: string) {
        (this.contentElement.el as HTMLImageElement).src = content;
    }
}
*/
var AboutMeImageComponent = /** @class */ (function (_super) {
    __extends(AboutMeImageComponent, _super);
    function AboutMeImageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.aboutMeService = new AboutMeService_1.default(RequestOptions_1.RequestOptionsValues.get());
        return _this;
    }
    AboutMeImageComponent.prototype.saveContent = function () {
        var _this = this;
        this.aboutMeService.save(this.getContentToSave())
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
    return AboutMeImageComponent;
}(EditableImageComponent_1.default));
exports.default = AboutMeImageComponent;
//# sourceMappingURL=AboutMeImageComponent.js.map