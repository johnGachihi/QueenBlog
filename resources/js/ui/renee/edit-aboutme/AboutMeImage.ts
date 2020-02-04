import Uppy from "@uppy/core";
import ThumbnailGenerator from "@uppy/thumbnail-generator";
import {El} from "../../../utils/ElementUtils";
import AboutMeComponents from "./AboutMeComponents";

export default abstract class AboutMeImageComponent extends AboutMeComponents{
    protected hiddenImageInput: El<HTMLInputElement>;
    protected content: File;
    private uppy;     /* When like this:
                           private uppy = Uppy();
                         Even after [initUppy] is called, the ThumbnailGenerator
                         plugin does not seem to be set. Why?
                      */

    protected constructor() {
        super();

        // this.enterInitialState();
    }

    protected abstract initElements()

    /*protected initUppy() {
        this.uppy = Uppy({
            allowMultipleUploads: false,
            autoProceed: false,
            restrictions: {
                maxNumberOfFiles: 1
            }
        })
            .use(ThumbnailGenerator, {
                id: 'ThumbnailGenerator',
                thumbnailWidth: this.contentElement.el.offsetWidth,
                // thumbnailHeight: 200,
            });
    }*/

    enterEditingState() {
        super.enterEditingState();
        this.openFileExplorer();
    }

    openFileExplorer() {
        this.hiddenImageInput.el.click();
    }

    protected setupListeners() {
        super.setupListeners();

        this.hiddenImageInput.el.addEventListener('change', ev => {
            if (this.hiddenImageInput.el.files && this.hiddenImageInput.el.files[0]) {
                const image = this.hiddenImageInput.el.files[0];
                this.content = image;
                // this.addImage(image);

                const reader = new FileReader();
                reader.onload = e => {
                    this.contentElement.el.setAttribute('src', e.target.result as string)
                };

                reader.readAsDataURL(this.hiddenImageInput.el.files[0]);
            }
        });

    }

    /*private addImage(image: File) {
        this.uppy.reset();
        this.uppy.addFile({
            name: image.name,
            type: image.type,
            data: image
        });
    }*/

    protected getContent() {
        return (this.contentElement.el as HTMLImageElement).src;
    }

    protected abstract getContentToSave();

    protected setContent(content: any) {
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

const aboutMeImage = AboutMeSideImage.getInstance();
