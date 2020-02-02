import {RequestOptionsValues} from "../../../network/RequestOptions";
import {HttpMethod} from "../../../network/HttpMethod";
import {El} from "../../../utils/ElementUtils";
import {AboutMeSideText} from "./AboutMeSideText";

class AboutMeSideName extends AboutMeSideText {
    constructor() {
        super();
        this.enterInitialState();
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

    getContent(): string {
        return this.contentElement.el.innerHTML;
    }
}

const aboutMeSideName = new AboutMeSideName();
aboutMeSideName.setOnSaveClicked(() => {
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

// TODO: move to appropriate module
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
        body: JSON.stringify({"about_me_side_name": aboutMeSideName.getContent()})
    });
    return await response.json();
}

