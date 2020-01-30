import Uppy from "@uppy/core";
import ThumbnailGenerator from "@uppy/thumbnail-generator";
import {RequestOptionsValues} from "../../../network/RequestOptions";
import {HttpMethod} from "../../../network/HttpMethod";


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
        body: JSON.stringify({ "about_me_side_name": aboutMeSideName.innerHTML })
    });
    return await response.json();
}
