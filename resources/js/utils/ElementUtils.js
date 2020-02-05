"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editor_1 = require("../write/editor");
var El = /** @class */ (function () {
    function El(el, editableMaker) {
        if (editableMaker === void 0) { editableMaker = new HtmlContentEditableMaker(); }
        this.el = el;
        this.editableMaker = editableMaker;
    }
    El.prototype.show = function () {
        this.el.classList.remove('d-none');
    };
    El.prototype.hide = function () {
        this.el.classList.add('d-none');
    };
    El.prototype.makeEditable = function () {
        this.editableMaker.makeEditable(this.el);
    };
    El.prototype.makeNotEditable = function () {
        this.editableMaker.makeNotEditable(this.el);
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
var HtmlContentEditableMaker = /** @class */ (function () {
    function HtmlContentEditableMaker() {
    }
    HtmlContentEditableMaker.prototype.makeEditable = function (element) {
        element.setAttribute('contenteditable', 'true');
        document.execCommand("defaultParagraphSeparator", false, "p"); //
    };
    HtmlContentEditableMaker.prototype.makeNotEditable = function (element) {
        element.setAttribute('contenteditable', 'false');
    };
    return HtmlContentEditableMaker;
}());
var WysiwigEditableMaker = /** @class */ (function () {
    function WysiwigEditableMaker() {
    }
    WysiwigEditableMaker.prototype.makeEditable = function (element) {
        var _this = this;
        var content = element.innerHTML;
        element.innerHTML = "";
        console.log("makeEditable - wysiwig");
        editor_1.initCkEditor(element)
            .then(function (editor) {
            _this.editor = editor;
            editor.setData(content);
        })
            .catch(console.log);
    };
    WysiwigEditableMaker.prototype.makeNotEditable = function (element) {
        var _this = this;
        if (this.editor !== undefined) {
            console.log('makeNotEditable', this.editor);
            this.editor.destroy()
                .then(function (res) {
                _this.editor = undefined; // Fishy stuff.
            })
                .catch(console.log);
        }
    };
    return WysiwigEditableMaker;
}());
exports.WysiwigEditableMaker = WysiwigEditableMaker;
//# sourceMappingURL=ElementUtils.js.map