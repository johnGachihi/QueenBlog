import {AboutMeSideText} from "./AboutMeSideText";
import {El} from "../../../utils/ElementUtils";

class AboutMeSideContent extends AboutMeSideText{
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
}

const editAboutMeSide = new AboutMeSideContent();
editAboutMeSide.setOnSaveClicked(() => {
    // const aboutReneeService = new AboutReneeService()
});
