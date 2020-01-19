"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Timeout_1 = __importDefault(require("./Timeout"));
var PeriodicBlogContentSaver = /** @class */ (function () {
    function PeriodicBlogContentSaver(editor, savedStatusIndicator, blogsService, blog) {
        this.editor = editor;
        this.savedStatusIndicator = savedStatusIndicator;
        this.blogService = blogsService;
        this.blog = blog;
    }
    PeriodicBlogContentSaver.prototype.activate = function () {
        this.saveDataOnBlogContentChange();
    };
    PeriodicBlogContentSaver.prototype.saveDataOnBlogContentChange = function () {
        var _this = this;
        var timeout = new Timeout_1.default();
        this.editor.model.document.on('change:data', function () {
            if (!timeout.isSet()) {
                timeout.setTimeOut(3000, function () { return _this.saveBlogContent(); });
            }
            _this.savedStatusIndicator.clearSavedStatus();
            if (_this.editorChangeHandler)
                _this.editorChangeHandler();
            timeout.resetTimeOut();
        });
    };
    PeriodicBlogContentSaver.prototype.saveBlogContent = function () {
        var _this = this;
        this.savedStatusIndicator.indicateSaving();
        this.callCallbackIfPresent(this.savingHandler);
        if (!this.blog) {
            this.blog = { blog_content: this.editor.getData() };
            this.blogService.save(this.blog).then(function (response) {
                _this.afterSave();
                _this.blog.id = response.blog_id;
                console.log(_this.blog);
            });
        }
        else {
            this.blog.blog_content = this.editor.getData();
            this.blogService.update(this.blog).then(function (response) {
                _this.afterSave();
            });
        }
        // setTimeout(() => {
        //     this.savedStatusIndicator.indicateSaved();
        //     this.callCallbackIfPresent(this.onSavedHandler);
        // }, 2000)
    };
    PeriodicBlogContentSaver.prototype.afterSave = function () {
        this.savedStatusIndicator.indicateSaved();
        this.callCallbackIfPresent(this.onSavedHandler);
    };
    PeriodicBlogContentSaver.prototype.onEditorChange = function (changeHandler) {
        this.editorChangeHandler = function () { return changeHandler(); };
        return this;
    };
    PeriodicBlogContentSaver.prototype.onSaving = function (savingHandler) {
        this.savingHandler = function () { return savingHandler(); };
        return this;
    };
    PeriodicBlogContentSaver.prototype.onSaved = function (onSavedHandler) {
        this.onSavedHandler = onSavedHandler;
        return this;
    };
    PeriodicBlogContentSaver.prototype.callCallbackIfPresent = function (callback) {
        if (callback)
            callback();
    };
    return PeriodicBlogContentSaver;
}());
exports.default = PeriodicBlogContentSaver;
//# sourceMappingURL=PeriodicBlogContentSaver.js.map