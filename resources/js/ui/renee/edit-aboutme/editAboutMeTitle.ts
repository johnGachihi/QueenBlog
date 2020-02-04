import {El} from "../../../utils/ElementUtils";
import {AboutMeTextComponent} from "./AboutMeSideText";
import AboutMe from "../../../models/AboutMe";


class AboutMeTitle extends AboutMeTextComponent{
    constructor() {
        super();
    }

    protected initElements() {
        this.editButton = new El(document.getElementById('about-me-title-edit'));
        this.contentElement = new El(document.getElementById(
            'about-me-title') as HTMLDivElement);
        this.saveAndCancelContainer = new El(document.getElementById(
            'save-and-cancel-about-me-title-buttons') as HTMLDivElement);
        this.saveButton = new El(document.getElementById('save-about-me-title'));
        this.cancelButton = new El(document.getElementById('cancel-about-me-title'));
        this.loadIndicator = new El(document.getElementById('loading-about-me-title'));
    }

    protected getContentToSave(): AboutMe {
        return {about_me_title: this.getContent()};
    }
}

const aboutMeSideName = new AboutMeTitle();
