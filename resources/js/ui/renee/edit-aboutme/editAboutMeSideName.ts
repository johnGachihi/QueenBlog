import {El} from "../../../utils/ElementUtils";
import {AboutMeTextComponent} from "./AboutMeSideText";
import AboutMe from "../../../models/AboutMe";


class AboutMeSideName extends AboutMeTextComponent{
    constructor() {
        super();
    }

    protected initElements() {
        this.editButton = new El(document.getElementById('about-me-side-name-edit'));
        this.contentElement = new El(document.getElementById(
            'about-me-side-name') as HTMLDivElement);
        this.saveAndCancelContainer = new El(document.getElementById(
            'save-and-cancel-about-me-side-name-buttons') as HTMLDivElement);
        this.saveButton = new El(document.getElementById('save-about-me-side-name'));
        this.cancelButton = new El(document.getElementById('cancel-about-me-side-name'));
        this.loadIndicator = new El(document.getElementById('loading-about-me-side-name'));
    }

    protected getContentToSave(): AboutMe {
        return {about_me_side_name: this.getContent()};
    }
}

const aboutMeSideName = new AboutMeSideName();
