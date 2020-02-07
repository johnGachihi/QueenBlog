"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Timeout_1 = __importDefault(require("../write/Timeout"));
var clickCount = 0;
var timeout = new Timeout_1.default();
function onMultiClick(element, requiredClicks, callback) {
    element.addEventListener('click', function (ev) {
        onEveryClick(requiredClicks, callback);
    });
}
exports.onMultiClick = onMultiClick;
function onEveryClick(requiredClicks, callback) {
    clickCount++;
    if (clickCount >= requiredClicks) {
        callback();
        resetClickCount();
    }
    if (timeout.isSet())
        timeout.resetTimeOut();
    else
        timeout.setTimeOut(500, resetClickCount);
}
function resetClickCount() {
    clickCount = 0;
}
//# sourceMappingURL=MultiClickListener.js.map