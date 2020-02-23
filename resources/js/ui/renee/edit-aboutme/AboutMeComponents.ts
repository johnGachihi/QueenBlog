import {El} from "../../../utils/ElementUtils";
import AboutMeService from "../../../network/AboutMeService";
import {callCallbackIfPresent} from "../../../utils/CallIfPresent";
import handleFailure from "../../../utils/ErrorHandling";
import {RequestOptionsValues} from "../../../network/RequestOptions";
import EditableComponent from "../editables/EditableComponent";

/*export default abstract class AboutMeComponents {
    protected state: AboutMeComponentState;

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

    private aboutMeService = new AboutMeService(RequestOptionsValues.get());

    public constructor() {
        this.initElements();
        this.enterInitialState();
        this.setupListeners()
    }

    protected abstract initElements()

    enterInitialState() {
        this.state = AboutMeComponentState.INITIAL;

        this.editButton.show();
        this.contentElement.makeNotEditable();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.hide();

        this.contentBeforeEdit = this.getContent();     // Should this be here
    }

    enterEditingState() {
        this.state = AboutMeComponentState.EDITING;

        this.editButton.hide();
        this.contentElement.makeEditable();
        this.saveAndCancelContainer.show();
        this.loadIndicator.hide();
    }

    enterSavingState() {
        this.state = AboutMeComponentState.SAVING;

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
            if (this.state === AboutMeComponentState.INITIAL) {
                ev.preventDefault();
                this.editButton.el.click();
            }
        })
    }

    protected abstract getContent();

    protected abstract getContentToSave();

    protected abstract setContent(content: any);

    private saveContent() {
        this.aboutMeService.save(this.getContentToSave())
            .then(response => {
                if (response.status != 'ok') {
                    handleFailure(`Unable to save: Error ${response}`);
                    this.cancelEdit();
                }
                this.enterInitialState();
            })
            .catch(err => {
                handleFailure(err);
                this.cancelEdit();
                this.enterInitialState();
            })
    };

    protected cancelEdit() {
        this.setContent(this.contentBeforeEdit);
    }
}*/

export default abstract class AboutMeComponents extends EditableComponent{
    private aboutMeService = new AboutMeService(RequestOptionsValues.get());

    protected saveContent() {
        this.aboutMeService.save(this.getContentToSave())
            .then(response => {
                if (response.status != 'ok') {
                    handleFailure(`Unable to save: Error ${response}`);
                    this.cancelEdit();
                }
                this.enterInitialState();
            })
            .catch(err => {
                handleFailure(err);
                this.cancelEdit();
                this.enterInitialState();
            })
    }
}

export enum AboutMeComponentState {
    INITIAL = "initial",
    EDITING = "editing",
    SAVING = "loading"
}
