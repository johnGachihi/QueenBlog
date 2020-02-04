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
var CallIfPresent_1 = require("../../../utils/CallIfPresent");
var AboutMeComponents_1 = __importDefault(require("./AboutMeComponents"));
var AboutMeSideText = /** @class */ (function () {
    function AboutMeSideText() {
        this.initElements();
        this.setupButtonListeners();
    }
    AboutMeSideText.prototype.enterInitialState = function () {
        this.editButton.show();
        this.contentElement.makeNotEditable();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.hide();
    };
    AboutMeSideText.prototype.enterEditingState = function () {
        this.editButton.hide();
        this.contentElement.makeEditable();
        this.saveAndCancelContainer.show();
        this.contentElement.focusAndHighlightAllText();
        this.loadIndicator.hide();
    };
    AboutMeSideText.prototype.enterSavingState = function () {
        this.editButton.hide();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.show();
        this.contentElement.makeNotEditable();
    };
    AboutMeSideText.prototype.setupButtonListeners = function () {
        var _this = this;
        this.editButton.el.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.enterEditingState();
            CallIfPresent_1.callCallbackIfPresent(_this.onEditClicked);
        });
        this.saveButton.el.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.enterSavingState();
            CallIfPresent_1.callCallbackIfPresent(_this.onSaveClicked);
        });
        $(this.contentElement.el).on('keydown', function (e) {
            if (e.keyCode === 13) {
                _this.saveButton.el.click();
                return false;
            }
        });
        this.contentElement.el.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.editButton.el.click();
        });
    };
    AboutMeSideText.prototype.setOnEditClicked = function (onEditClicked) {
        this.onEditClicked = onEditClicked;
    };
    AboutMeSideText.prototype.setOnSaveClicked = function (onSaveClicked) {
        this.onSaveClicked = onSaveClicked;
    };
    return AboutMeSideText;
}());
exports.AboutMeSideText = AboutMeSideText;
var AboutMeTextComponent = /** @class */ (function (_super) {
    __extends(AboutMeTextComponent, _super);
    function AboutMeTextComponent() {
        return _super.call(this) || this;
    }
    AboutMeTextComponent.prototype.enterEditingState = function () {
        _super.prototype.enterEditingState.call(this);
        this.contentElement.focusAndHighlightAllText();
    };
    AboutMeTextComponent.prototype.getContent = function () {
        return this.contentElement.el.innerText;
    };
    AboutMeTextComponent.prototype.setContent = function (content) {
        this.contentElement.el.innerText = content;
    };
    return AboutMeTextComponent;
}(AboutMeComponents_1.default));
exports.AboutMeTextComponent = AboutMeTextComponent;
//# sourceMappingURL=AboutMeSideText.js.map