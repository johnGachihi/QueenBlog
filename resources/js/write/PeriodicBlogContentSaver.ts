import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'
import Timeout from "./Timeout";
import SavedStatusIndicator from "./savedStatusIndicator/SavedStatusIndicator";
import BlogsService from "../network/BlogsService";
import Blog from "../models/Blog";

export var curBlog: Blog;

export default class PeriodicBlogContentSaver {
    private editorChangeHandler: () => void;
    private savingHandler: () => void;
    private onSavedHandler: (b: Blog) => void;

    private blogTitleEl: HTMLInputElement;
    private editor: BalloonBlockEditor;
    private savedStatusIndicator: SavedStatusIndicator;
    private blogService: BlogsService;
    private blog: Blog;

    constructor(
        editor: BalloonBlockEditor,
        blogTitleEl: HTMLInputElement,
        savedStatusIndicator: SavedStatusIndicator,
        blogsService: BlogsService,
        blog?: Blog
    ) {
        this.editor = editor;
        this.blogTitleEl = blogTitleEl;
        this.savedStatusIndicator = savedStatusIndicator;
        this.blogService = blogsService;
        this.blog = blog;
    }

    activate() {
        this.saveDataOnBlogContentChange();
    }

    private saveDataOnBlogContentChange() {
        const timeout = new Timeout();

        this.editor.model.document.on('change:data', () => {
            if (!timeout.isSet()) {
                timeout.setTimeOut(3000, () => this.saveBlogContent());
            }
            this.savedStatusIndicator.clearSavedStatus();
            if (this.editorChangeHandler) this.editorChangeHandler();
            timeout.resetTimeOut();
        })
    }

    private saveBlogContent() {
        this.beforeSave();

        if (!this.blog) {
            this.saveNew().then(blog => this.blog = blog)
        } else {
            this.updateExisting()
        }
    }

    private beforeSave() {
        this.savedStatusIndicator.indicateSaving();
        PeriodicBlogContentSaver.callCallbackIfPresent(this.savingHandler);
    }

    private async saveNew() {
        let blog: Blog = {title: this.blogTitleEl.value, content: this.editor.getData()};
        const response = await this.blogService.save(blog);
        blog.id = response.blog_id;
        this.afterSave(blog);
        return blog;
    }

    private updateExisting() {
        this.blog.content = this.editor.getData();
        this.blog.title = this.blogTitleEl.value;
        this.blogService.update(this.blog).then(response => {
            this.afterSave(this.blog);
        });
    }

    private afterSave(blog: Blog) {
        this.savedStatusIndicator.indicateSaved();
        if (this.onSavedHandler) this.onSavedHandler(blog);
    }

    onEditorChange(changeHandler: () => void): PeriodicBlogContentSaver {
        this.editorChangeHandler = () => changeHandler();
        return this
    }

    onSaving(savingHandler: () => void): PeriodicBlogContentSaver {
        this.savingHandler = () => savingHandler();
        return this;
    }

    onSaved(onSavedHandler: (b: Blog) => void): PeriodicBlogContentSaver {
        this.onSavedHandler = onSavedHandler;
        return this
    }

    private static callCallbackIfPresent(callback: (...args: any) => void) {
        if (callback) callback();
    }
}
