import AboutMeComponents from "./AboutMeComponents";
import {El} from "../../../utils/ElementUtils";
import EditableImageComponent from "../editables/EditableImageComponent";
import handleFailure from "../../../utils/ErrorHandling";
import AboutMeService from "../../../network/AboutMeService";
import {RequestOptionsValues} from "../../../network/RequestOptions";

/*
export default abstract class AboutMeImageComponent extends AboutMeComponents {
    protected hiddenImageInput: El<HTMLInputElement>;
    protected content: File;

    constructor() {
        super();
    }

    protected abstract initElements()

    enterEditingState() {
        super.enterEditingState();
        this.openFileExplorer();
    }

    openFileExplorer() {
        this.hiddenImageInput.el.click();
    }

    protected setupListeners() {
        super.setupListeners();

        this.contentElement.on('keydown', e => {
            //@ts-ignore
            if (e.keyCode === 13) {
                this.saveButton.el.click();
                return false;
            }
            //@ts-ignore
            if (e.keyCode === 27) {
                this.cancelButton.el.click();
            }
        });

        this.hiddenImageInput.on('change', ev => {
            if (this.imageSelected()) {
                this.content = this.hiddenImageInput.el.files[0];
                this.previewImage();
            }
        });
    }

    private imageSelected(): boolean {
        return !!(this.hiddenImageInput.el.files && this.hiddenImageInput.el.files[0]);
    }

    private previewImage() {
        const reader = new FileReader();
        reader.onload = e => this.setContent(e.target.result as string);
        reader.readAsDataURL(this.hiddenImageInput.el.files[0]);
    }

    protected getContent() {
        return (this.contentElement.el as HTMLImageElement).src;
    }

    protected abstract getContentToSave();

    protected setContent(content: string) {
        (this.contentElement.el as HTMLImageElement).src = content;
    }
}
*/

export default abstract class AboutMeImageComponent extends EditableImageComponent {
    private aboutMeService = new AboutMeService(RequestOptionsValues.get());

    protected saveContent() {
        this.aboutMeService.save(this.getContentToSave())
            .then(response => {
                if (response.status != 'ok') {
                    handleFailure(`Unable to save: Error ${response}`);
                    this.cancelEdit();
                }
                this.enterInitialState();
            })
            .catch(err => {
                handleFailure(err);
                this.cancelEdit();
                this.enterInitialState();
            })
    }
}
