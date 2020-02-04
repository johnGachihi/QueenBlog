"use strict";
/*export function show(element: HTMLElement) {
    element.classList.remove('d-none')
}

export function hide(element: HTMLElement) {
    element.classList.add('d-none');
}*/
Object.defineProperty(exports, "__esModule", { value: true });
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
        document.execCommand("defaultParagraphSeparator", false, "p"); //
        // document.execCommand("defaultParagraphSeparator", false, "br"); //
        // this.setupEditableContentEl();
        // document.execCommand('insertBrOnReturn');
    };
    El.prototype.makeNotEditable = function () {
        this.el.setAttribute('contenteditable', 'false');
    };
    El.prototype.focusAndHighlightAllText = function () {
        this.el.focus();
        document.execCommand('selectAll', false, null);
    };
    El.prototype.on = function (event, handler) {
        this.el.addEventListener(event, handler);
    };
    return El;
}());
exports.El = El;
//# sourceMappingURL=ElementUtils.js.map