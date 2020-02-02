"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CallIfPresent_1 = require("../../../utils/CallIfPresent");
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
//# sourceMappingURL=AboutMeSideText.js.map