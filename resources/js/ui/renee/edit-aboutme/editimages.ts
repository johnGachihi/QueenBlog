import Uppy from "@uppy/core";
import ThumbnailGenerator from "@uppy/thumbnail-generator";
import {RequestOptionsValues} from "../../../network/RequestOptions";
import {HttpMethod} from "../../../network/HttpMethod";
import {El} from "../../../utils/ElementUtils";

/*
export function setupEditSideImageButton() {
    document.getElementById('about-me-side-image-edit').addEventListener('click', e => {
        e.preventDefault();
        console.log('about-me-side-image-edit');
    })
}

const aboutMeSideName = document.getElementById('about-me-side-name');
const saveAndCancelAboutMeSideNameButtons =
    document.getElementById('save-and-cancel-about-me-side-name-buttons');
const loadingAboutMeSideName = document.getElementById('loading-about-me-side-name');


export function setupEditSideNameButton() {
    const editSideNameButton = document.getElementById('about-me-side-name-edit');
    editSideNameButton.addEventListener('click', ev => {
        ev.preventDefault();
        aboutMeSideName.setAttribute('contenteditable', 'true');
        aboutMeSideName.focus();

        document.execCommand('selectAll',false,null);

        hide(editSideNameButton);

        show(saveAndCancelAboutMeSideNameButtons)
    })
}


aboutMeSideName.addEventListener('input', ev => {
    // TODO: Enable save and cancel buttons here
    console.log('Editting................')
});

const saveAboutMeSideName = document.getElementById('save-about-me-side-name');
saveAboutMeSideName.addEventListener('click', ev => {
    ev.preventDefault();
    hide(saveAndCancelAboutMeSideNameButtons);
    show(loadingAboutMeSideName);
    aboutMeSideName.setAttribute('contenteditable', 'true');

    persistAboutMeSideName().then(res => {
        hide(loadingAboutMeSideName);
        if (res.status != 'ok') {
            // TODO: Revert and ask user to try again or try again later
        }
    }).catch(err => {
        // TODO: Revert and ask user to try again or try again later
    });
    aboutMeSideName.blur();
});

function hide(element: HTMLElement) {
    element.classList.add('d-none');
}

function show(element: HTMLElement) {
    element.classList.remove('d-none');
}
*/

class AboutMeSideName {
    private editButton: El<HTMLElement>;
    private contentElement: El<HTMLDivElement>;
    private saveAndCancelContainer: El<HTMLDivElement>;
    private saveButton: El<HTMLElement>;
    private cancelButton: El<HTMLElement>;
    private loadIndicator: El<HTMLElement>;

    constructor() {
        this.initElements();
        this.enterInitialState();
    }

    private initElements() {
        this.editButton = new El(document.getElementById('about-me-side-name-edit'));
        this.contentElement = new El(document.getElementById(
            'about-me-side-name') as HTMLDivElement);
        this.saveAndCancelContainer = new El(document.getElementById(
            'save-and-cancel-about-me-side-name-buttons') as HTMLDivElement);
        this.saveButton = new El(document.getElementById('save-about-me-side-name'));
        this.cancelButton = new El(document.getElementById('cancel-about-me-side-name'));
        this.loadIndicator = new El(document.getElementById('loading-about-me-side-name'));
    }

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

    getContent(): string {
        return this.contentElement.el.innerHTML;
    }
}

const aboutMeSideName = new AboutMeSideName();

document.getElementById('about-me-side-name-edit').addEventListener('click', ev => {
    ev.preventDefault();
    aboutMeSideName.enterEditingState();
});
document.getElementById('save-about-me-side-name').addEventListener('click', ev => {
    ev.preventDefault();
    aboutMeSideName.enterSavingState();
    persistAboutMeSideName()
        .then(res => {
            if (res.status == 'ok')
                aboutMeSideName.enterInitialState();
            else
                handleSaveFailure();
        })
        .catch(handleSaveFailure)
});

function handleSaveFailure(err?) {
    console.log(err);   // TODO: Add implementation
}

async function persistAboutMeSideName() {
    const {csrfToken, baseUrl} = RequestOptionsValues.get();
    const fetchUrl = `${baseUrl}/about_me`;
    const response = await fetch(fetchUrl, {
        method: HttpMethod.POST,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': csrfToken,
        },
        body: JSON.stringify({ "about_me_side_name": aboutMeSideName.getContent() })
    });
    return await response.json();
}

