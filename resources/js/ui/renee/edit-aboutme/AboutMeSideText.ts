import {El} from "../../../utils/ElementUtils";
import {callCallbackIfPresent} from "../../../utils/CallIfPresent";
import AboutMeComponents from "./AboutMeComponents";


export abstract class AboutMeSideText {
    protected editButton: El<HTMLElement>;
    protected contentElement: El<HTMLElement>;
    protected saveAndCancelContainer: El<HTMLDivElement>;
    protected saveButton: El<HTMLElement>;
    protected cancelButton: El<HTMLElement>;
    protected loadIndicator: El<HTMLElement>;

    protected onEditClicked: () => void;
    protected onSaveClicked: () => void;

    protected constructor() {
        this.initElements();
        this.setupButtonListeners();
    }

    protected abstract initElements()

    enterInitialState() {
        this.editButton.show();
        this.contentElement.makeNotEditable();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.hide();
    }

    enterEditingState() {
        this.editButton.hide();
        this.contentElement.makeEditable();
        this.saveAndCancelContainer.show();
        this.contentElement.focusAndHighlightAllText();
        this.loadIndicator.hide();
    }

    enterSavingState() {
        this.editButton.hide();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.show();
        this.contentElement.makeNotEditable();
    }

    private setupButtonListeners() {
        this.editButton.el.addEventListener('click', ev => {
            ev.preventDefault();
            this.enterEditingState();

            callCallbackIfPresent(this.onEditClicked);
        });

        this.saveButton.el.addEventListener('click', ev => {
            ev.preventDefault();
            this.enterSavingState();

            callCallbackIfPresent(this.onSaveClicked);
        });

        $(this.contentElement.el).on('keydown', e => {
            if (e.keyCode === 13) {
                this.saveButton.el.click();
                return false;
            }
        });

        this.contentElement.el.addEventListener('click', ev => {
            ev.preventDefault();
            this.editButton.el.click();
        })
    }

    setOnEditClicked(onEditClicked: () => void) {
        this.onEditClicked = onEditClicked;
    }

    setOnSaveClicked(onSaveClicked: () => void) {
        this.onSaveClicked = onSaveClicked;
    }


}


export abstract class AboutMeTextComponent extends AboutMeComponents {
    protected constructor() {
        super();
    }

    protected abstract initElements();

    enterEditingState() {
        super.enterEditingState();
        this.contentElement.focusAndHighlightAllText();
    }

    protected getContent() {
        return this.contentElement.el.innerText;
    }

    protected setContent(content: string) {
        this.contentElement.el.innerText = content
    }

    protected abstract getContentToSave();
}
