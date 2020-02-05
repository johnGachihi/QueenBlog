import AboutMeComponents, {AboutMeComponentState} from "./AboutMeComponents";
import {El, WysiwigEditableMaker} from "../../../utils/ElementUtils";
import AboutMe from "../../../models/AboutMe";


class AboutMeArticle extends AboutMeComponents {
    static INSTANCE;

    static getInstance() {
        if (this.INSTANCE == undefined)
            this.INSTANCE = new AboutMeArticle();

        return this.INSTANCE;
    }

    private constructor() {
        super();
    }

    protected initElements() {
        this.editButton = new El(document.getElementById('about-me-edit'));
        this.contentElement = new El(document.getElementById(
            'about-me') as HTMLDivElement, new WysiwigEditableMaker());
        this.saveAndCancelContainer = new El(document.getElementById(
            'save-and-cancel-about-me-buttons') as HTMLDivElement);
        this.saveButton = new El(document.getElementById('save-about-me'));
        this.cancelButton = new El(document.getElementById('cancel-about-me'));
        this.loadIndicator = new El(document.getElementById('loading-about-me'));
    }

    protected getContent() {
        return this.contentElement.el.innerHTML;
    }

    protected setContent(content: string) {
        this.contentElement.el.innerHTML = content;
    }

    protected getContentToSave(): AboutMe {
        return {about_me: this.getContent()};
    }
}

AboutMeArticle.getInstance();
