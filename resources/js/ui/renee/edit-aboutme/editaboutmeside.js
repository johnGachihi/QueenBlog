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
var AboutMeSideText_1 = require("./AboutMeSideText");
var ElementUtils_1 = require("../../../utils/ElementUtils");
var AboutMeService_1 = __importDefault(require("../../../network/AboutMeService"));
var RequestOptions_1 = require("../../../network/RequestOptions");
var AboutMeSideContent = /** @class */ (function (_super) {
    __extends(AboutMeSideContent, _super);
    function AboutMeSideContent() {
        return _super.call(this) || this;
    }
    AboutMeSideContent.prototype.initElements = function () {
        this.editButton = new ElementUtils_1.El(document.getElementById('edit-about-me-side'));
        this.contentElement = new ElementUtils_1.El(document.getElementById('about-me-side'));
        this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('about-me-side-save-cancel-container'));
        this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me-side'));
        this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me-side'));
        this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me-side'));
    };
    AboutMeSideContent.prototype.getContent = function () {
        return this.contentElement.el.innerHTML;
    };
    return AboutMeSideContent;
}(AboutMeSideText_1.AboutMeSideText));
var editAboutMeSide = new AboutMeSideContent();
editAboutMeSide.setOnSaveClicked(function () {
    var aboutMeService = new AboutMeService_1.default(RequestOptions_1.RequestOptionsValues.get());
    aboutMeService.save({ about_me_side: editAboutMeSide.getContent() })
        .then(function (res) {
        if (res.status == 'ok')
            editAboutMeSide.enterInitialState();
        else
            handleSaveFailure();
    })
        .catch(handleSaveFailure);
});
function handleSaveFailure(err) {
    console.log(err); // TODO: Add implementation
}
//# sourceMappingURL=editaboutmeside.js.map