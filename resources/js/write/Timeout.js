"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timeout = /** @class */ (function () {
    function Timeout() {
    }
    Timeout.prototype.setTimeOut = function (delay, action) {
        this.delay = delay;
        this.action = action;
        this.timeoutID = setTimeout(this.action, this.delay);
    };
    Timeout.prototype.resetTimeOut = function () {
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(this.action, this.delay);
    };
    Timeout.prototype.isSet = function () {
        return this.timeoutID !== undefined;
    };
    return Timeout;
}());
exports.default = Timeout;
//# sourceMappingURL=Timeout.js.map