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
Object.defineProperty(exports, "__esModule", { value: true });
var ElementUtils_1 = require("../../../utils/ElementUtils");
var AboutMeSideText_1 = require("./AboutMeSideText");
var AboutMeTitle = /** @class */ (function (_super) {
    __extends(AboutMeTitle, _super);
    function AboutMeTitle() {
        return _super.call(this) || this;
    }
    AboutMeTitle.prototype.initElements = function () {
        this.editButton = new ElementUtils_1.El(document.getElementById('about-me-title-edit'));
        this.contentElement = new ElementUtils_1.El(document.getElementById('about-me-title'));
        this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-title-buttons'));
        this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me-title'));
        this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me-title'));
        this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me-title'));
    };
    AboutMeTitle.prototype.getContentToSave = function () {
        return { about_me_title: this.getContent() };
    };
    return AboutMeTitle;
}(AboutMeSideText_1.AboutMeTextComponent));
var aboutMeSideName = new AboutMeTitle();
//# sourceMappingURL=editAboutMeTitle.js.map