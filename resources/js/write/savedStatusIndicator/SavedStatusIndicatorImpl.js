"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SavedStatusIndicatorImpl = /** @class */ (function () {
    function SavedStatusIndicatorImpl(indicatorElement) {
        this.indicatorElement = indicatorElement;
    }
    SavedStatusIndicatorImpl.prototype.clearSavedStatus = function () {
        if (this.indicatorElement.innerText === "Saved") {
            this.indicatorElement.innerText = "";
        }
    };
    SavedStatusIndicatorImpl.prototype.indicateSaved = function () {
        this.indicatorElement.innerText = "Saved";
        console.log('saved');
    };
    SavedStatusIndicatorImpl.prototype.indicateSaving = function () {
        this.indicatorElement.innerText = "Saving...";
        console.log('saving');
    };
    return SavedStatusIndicatorImpl;
}());
exports.default = SavedStatusIndicatorImpl;
//# sourceMappingURL=SavedStatusIndicatorImpl.js.map