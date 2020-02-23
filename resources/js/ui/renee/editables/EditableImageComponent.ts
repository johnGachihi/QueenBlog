import {El} from "../../../utils/ElementUtils";
import EditableComponent from "./EditableComponent";
import AboutMeImageComponent from "../edit-aboutme/AboutMeImageComponent";
import Service from "../../../network/Service";
import handleFailure from "../../../utils/ErrorHandling";

export default abstract class EditableImageComponent extends EditableComponent {
    protected hiddenImageInput: El<HTMLInputElement>;
    protected content: File;
    protected service: Service<any>;

    protected constructor(service: Service<any>) {
        super();
        this.service = service;
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

    protected saveContent() {
        this.service.save(this.getContentToSave())
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

    protected setContent(content: string) {
        (this.contentElement.el as HTMLImageElement).src = content;
    }
}
