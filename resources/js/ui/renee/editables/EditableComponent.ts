import {El} from "../../../utils/ElementUtils";
import {callCallbackIfPresent} from "../../../utils/CallIfPresent";

export default abstract class EditableComponents{
    protected currentState: EditableComponentState;

    protected editButton: El<HTMLElement>;
    protected contentElement: El<HTMLElement>;
    protected saveAndCancelContainer: El<HTMLDivElement>;
    protected saveButton: El<HTMLElement>;
    protected cancelButton: El<HTMLElement>;
    protected loadIndicator: El<HTMLElement>;

    private contentBeforeEdit: any;

    protected onEditClicked: () => void;
    protected onSaveClicked: () => void;
    protected onSaved: () => void;

    public constructor() {
        this.initElements();
        this.enterInitialState();
        this.setupListeners()
    }

    protected abstract initElements()

    enterInitialState() {
        this.currentState = EditableComponentState.INITIAL;

        this.editButton.show();
        this.contentElement.makeNotEditable();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.hide();

        this.contentBeforeEdit = this.getContent();
    }

    enterEditingState() {
        this.currentState = EditableComponentState.EDITING;

        this.editButton.hide();
        this.contentElement.makeEditable();
        this.saveAndCancelContainer.show();
        this.loadIndicator.hide();
    }

    enterSavingState() {
        this.currentState = EditableComponentState.SAVING;

        this.editButton.hide();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.show();
        this.contentElement.makeNotEditable();
    }

    protected setupListeners() {
        this.editButton.el.addEventListener('click', ev => {
            ev.preventDefault();
            this.enterEditingState();

            callCallbackIfPresent(this.onEditClicked);
        });

        this.saveButton.el.addEventListener('click', ev => {
            ev.preventDefault();
            this.enterSavingState();
            this.saveContent();

            callCallbackIfPresent(this.onSaveClicked);
        });

        this.cancelButton.el.addEventListener('click', ev => {
            ev.preventDefault();
            this.cancelEdit();
            this.enterInitialState();
        });

        this.contentElement.el.addEventListener('click', ev => {
            if (this.currentState === EditableComponentState.INITIAL) {
                ev.preventDefault();
                this.editButton.el.click();
            }
        })
    }

    protected abstract getContent();

    protected abstract getContentToSave();

    protected abstract setContent(content: any);

    protected abstract saveContent()

    protected cancelEdit() {
        this.setContent(this.contentBeforeEdit);
    }
}

enum EditableComponentState {
    INITIAL = "initial",
    EDITING = "editing",
    SAVING = "loading"
}
