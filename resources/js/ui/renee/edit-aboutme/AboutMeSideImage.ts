// TODO: Move this to separate file
import {El} from "../../../utils/ElementUtils";
import AboutMeImageComponent from "./AboutMeImageComponent";
import AboutMeService from "../../../network/AboutMeService";
import {RequestOptionsValues} from "../../../network/RequestOptions";

class AboutMeSideImage extends AboutMeImageComponent {
    private static INSTANCE;

    static getInstance() {
        if (this.INSTANCE == undefined) {
            this.INSTANCE = new AboutMeSideImage();
        }
        return this.INSTANCE;
    }

    private constructor() {
        super(new AboutMeService(RequestOptionsValues.get()));
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
