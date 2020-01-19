import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'
import Timeout from "./Timeout";
import SavedStatusIndicator from "./savedStatusIndicator/SavedStatusIndicator";
import BlogsService from "../network/BlogsService";
import Blog from "../models/Blog";

export default class PeriodicBlogContentSaver {
    private editorChangeHandler: () => void;
    private savingHandler: () => void;
    private onSavedHandler: () => void;

    private editor: BalloonBlockEditor;
    private savedStatusIndicator: SavedStatusIndicator;
    private blogService: BlogsService;
    private blog: Blog;

    constructor(editor: BalloonBlockEditor, savedStatusIndicator: SavedStatusIndicator, blogsService: BlogsService, blog?: Blog) {
        this.editor = editor;
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
            if(!timeout.isSet()) {
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
            this.blog = {blog_content: this.editor.getData()};
            this.blogService.save(this.blog).then(response => {
                this.afterSave();
                this.blog.id = response.blog_id;
                console.log(this.blog);
            })
        } else {
            this.blog.blog_content = this.editor.getData();
            this.blogService.update(this.blog).then(response => {
                this.afterSave();
            });
        }
    }

    private beforeSave() {
        this.savedStatusIndicator.indicateSaving();
        PeriodicBlogContentSaver.callCallbackIfPresent(this.savingHandler);
    }

    private afterSave() {
        this.savedStatusIndicator.indicateSaved();
        PeriodicBlogContentSaver.callCallbackIfPresent(this.onSavedHandler);
    }

    onEditorChange(changeHandler: () => void): PeriodicBlogContentSaver {
        this.editorChangeHandler = () => changeHandler();
        return this
    }

    onSaving(savingHandler: () => void): PeriodicBlogContentSaver {
        this.savingHandler = () => savingHandler();
        return this;
    }

    onSaved(onSavedHandler: () => void): PeriodicBlogContentSaver {
        this.onSavedHandler = onSavedHandler;
        return this
    }

    private static callCallbackIfPresent(callback: (...args: any) => void) {
        if (callback) callback();
    }
}
