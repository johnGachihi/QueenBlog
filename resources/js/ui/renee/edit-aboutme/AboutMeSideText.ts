import {El} from "../../../utils/ElementUtils";
import {callCallbackIfPresent} from "../../../utils/CallIfPresent";

export abstract class AboutMeSideText {
    protected editButton: El<HTMLElement>;
    protected contentElement: El<HTMLDivElement>;
    protected saveAndCancelContainer: El<HTMLDivElement>;
    protected saveButton: El<HTMLElement>;
    protected cancelButton: El<HTMLElement>;
    protected loadIndicator: El<HTMLElement>;

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
    }

    enterEditingState() {
        this.editButton.hide();
        this.contentElement.makeEditable();
        this.saveAndCancelContainer.show();
        this.contentElement.focusAndHighlightAllText();
    }

    enterSavingState() {
        this.editButton.hide();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.hide();
        this.contentElement.makeNotEditable();
    }

    private setupButtonListeners() {
        this.editButton.el.addEventListener('click', ev => {
            ev.preventDefault();
            this.enterEditingState();
        });

        this.saveButton.el.addEventListener('click', ev => {
            ev.preventDefault();
            this.enterSavingState();

            callCallbackIfPresent(this.onSaveClicked);
        });

        $(this.contentElement.el).on('keydown', e => {
            if (e.keyCode === 13) {
                console.log('Enter/Return')
                this.saveButton.el.click();
                return false;
            }
        })
    }

    setOnSaveClicked(onSaveClicked: () => void) {
        this.onSaveClicked = onSaveClicked;
    }


}
