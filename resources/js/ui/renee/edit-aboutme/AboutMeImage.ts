import {El} from "../../../utils/ElementUtils";
import AboutMeImageComponent from "./AboutMeImageComponent";
import AboutMeService from "../../../network/AboutMeService";
import {RequestOptionsValues} from "../../../network/RequestOptions";

class AboutMeImage extends AboutMeImageComponent {
    private static INSTANCE;

    static getInstance() {
        if (this.INSTANCE == undefined) {
            this.INSTANCE = new AboutMeImage();
        }
        return this.INSTANCE;
    }

    private constructor() {
        super(new AboutMeService(RequestOptionsValues.get()));
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
