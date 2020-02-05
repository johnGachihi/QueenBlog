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
var AboutMeComponents_1 = __importDefault(require("./AboutMeComponents"));
var ElementUtils_1 = require("../../../utils/ElementUtils");
var AboutMeArticle = /** @class */ (function (_super) {
    __extends(AboutMeArticle, _super);
    function AboutMeArticle() {
        return _super.call(this) || this;
    }
    AboutMeArticle.getInstance = function () {
        if (this.INSTANCE == undefined)
            this.INSTANCE = new AboutMeArticle();
        return this.INSTANCE;
    };
    AboutMeArticle.prototype.initElements = function () {
        this.editButton = new ElementUtils_1.El(document.getElementById('about-me-edit'));
        this.contentElement = new ElementUtils_1.El(document.getElementById('about-me'), new ElementUtils_1.WysiwigEditableMaker());
        this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-buttons'));
        this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me'));
        this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me'));
        this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me'));
    };
    AboutMeArticle.prototype.getContent = function () {
        return this.contentElement.el.innerHTML;
    };
    AboutMeArticle.prototype.setContent = function (content) {
        this.contentElement.el.innerHTML = content;
    };
    AboutMeArticle.prototype.getContentToSave = function () {
        return { about_me: this.getContent() };
    };
    return AboutMeArticle;
}(AboutMeComponents_1.default));
AboutMeArticle.getInstance();
//# sourceMappingURL=AboutMeArticle.js.map