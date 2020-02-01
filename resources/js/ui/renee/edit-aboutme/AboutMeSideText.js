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
    };
    AboutMeSideText.prototype.enterEditingState = function () {
        this.editButton.hide();
        this.contentElement.makeEditable();
        this.saveAndCancelContainer.show();
        this.contentElement.focusAndHighlightAllText();
    };
    AboutMeSideText.prototype.enterSavingState = function () {
        this.editButton.hide();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.hide();
        this.contentElement.makeNotEditable();
    };
    AboutMeSideText.prototype.setupButtonListeners = function () {
        var _this = this;
        this.editButton.el.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.enterEditingState();
        });
        this.saveButton.el.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.enterSavingState();
            CallIfPresent_1.callCallbackIfPresent(_this.onSaveClicked);
        });
    };
    AboutMeSideText.prototype.setOnSaveClicked = function (onSaveClicked) {
        this.onSaveClicked = onSaveClicked;
    };
    return AboutMeSideText;
}());
exports.AboutMeSideText = AboutMeSideText;
//# sourceMappingURL=AboutMeSideText.js.map