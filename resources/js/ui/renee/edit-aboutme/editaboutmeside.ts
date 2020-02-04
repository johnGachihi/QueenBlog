import {AboutMeTextComponent} from "./AboutMeSideText";
import {El} from "../../../utils/ElementUtils";
import AboutMe from "../../../models/AboutMe";

class AboutMeSideContent extends AboutMeTextComponent{
    constructor() {
        super();
    }

    protected initElements() {
        this.editButton = new El(document.getElementById('edit-about-me-side'));
        this.contentElement = new El(document.getElementById('about-me-side') as HTMLDivElement);
        this.saveAndCancelContainer = new El(document.getElementById(
            'about-me-side-save-cancel-container') as HTMLDivElement);
        this.saveButton = new El(document.getElementById('save-about-me-side'));
        this.cancelButton = new El(document.getElementById('cancel-about-me-side'));
        this.loadIndicator = new El(document.getElementById('loading-about-me-side'));
    }

    protected getContentToSave(): AboutMe {
        return {about_me_side: this.getContent()};
    }
}

const editAboutMeSide = new AboutMeSideContent();
