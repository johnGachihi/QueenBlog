"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show(element) {
    element.classList.remove('d-none');
}
exports.show = show;
function hide(element) {
    element.classList.add('d-none');
}
exports.hide = hide;
var El = /** @class */ (function () {
    function El(el) {
        this.el = el;
    }
    El.prototype.show = function () {
        this.el.classList.remove('d-none');
    };
    El.prototype.hide = function () { this.el.classList.add('d-none'); };
    El.prototype.makeEditable = function () {
        this.el.setAttribute('contenteditable', 'true');
    };
    El.prototype.makeNotEditable = function () {
        this.el.setAttribute('contenteditable', 'false');
    };
    El.prototype.focusAndHighlightAllText = function () {
        this.el.focus();
        document.execCommand('selectAll', false, null);
    };
    return El;
}());
exports.El = El;
//# sourceMappingURL=ElementUtils.js.map