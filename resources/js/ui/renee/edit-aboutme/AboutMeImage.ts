import {El} from "../../../utils/ElementUtils";
import AboutMeComponents from "./AboutMeComponents";

export default abstract class AboutMeImageComponent extends AboutMeComponents {
    protected hiddenImageInput: El<HTMLInputElement>;
    protected content: File;

    protected constructor() {
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

class AboutMeSideImage extends AboutMeImageComponent {
    private static INSTANCE;

    static getInstance() {
        if (this.INSTANCE == undefined) {
            this.INSTANCE = new AboutMeSideImage();
        }
        return this.INSTANCE;
    }

    private constructor() {
        super();
    }

    protected initElements() {
        this.editButton = new El(document.getElementById('about-me-side-image-edit'));
        this.contentElement = new El(document.getElementById(
            'about-me-side-image') as HTMLDivElement);
        this.saveAndCancelContainer = new El(document.getElementById(
            'save-and-cancel-about-me-side-image-buttons') as HTMLDivElement);
        this.saveButton = new El(document.getElementById('save-about-me-side-image'));
        this.cancelButton = new El(document.getElementById('cancel-about-me-side-image'));
        this.loadIndicator = new El(document.getElementById('loading-about-me-side-image'));
        this.hiddenImageInput = new El(document.getElementById(
            'about-me-side-image-hidden-input') as HTMLInputElement);
    }

    protected getContentToSave(): FormData {
        const formData = new FormData();
        formData.append('about_me_side_image_file', this.content, this.content.name);
        return formData;
    }

}

const aboutMeSideImage = AboutMeSideImage.getInstance();

class AboutMeImage extends AboutMeImageComponent {
    private static INSTANCE;

    static getInstance() {
        if (this.INSTANCE == undefined) {
            this.INSTANCE = new AboutMeImage();
        }
        return this.INSTANCE;
    }

    private constructor() {
        super();
    }

    protected initElements() {
        this.editButton = new El(document.getElementById('about-me-image-edit'));
        this.contentElement = new El(document.getElementById(
            'about-me-image') as HTMLDivElement);
        this.saveAndCancelContainer = new El(document.getElementById(
            'save-and-cancel-about-me-image-buttons') as HTMLDivElement);
        this.saveButton = new El(document.getElementById('save-about-me-image'));
        this.cancelButton = new El(document.getElementById('cancel-about-me-image'));
        this.loadIndicator = new El(document.getElementById('loading-about-me-image'));
        this.hiddenImageInput = new El(document.getElementById(
            'about-me-image-hidden-input') as HTMLInputElement);
    }

    protected getContentToSave() {
        const formData = new FormData();
        formData.append('about_me_image_file', this.content, this.content.name);
        return formData;
    }
}

const aboutMeImage = AboutMeImage.getInstance();
