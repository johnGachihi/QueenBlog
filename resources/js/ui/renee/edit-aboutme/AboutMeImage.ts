import Uppy from "@uppy/core";
import ThumbnailGenerator from "@uppy/thumbnail-generator";
import {AboutMeSideText} from "./AboutMeSideText";
import {El} from "../../../utils/ElementUtils";
import AboutMeService from "../../../network/AboutMeService";
import {RequestOptionsValues} from "../../../network/RequestOptions";
import {HttpMethod} from "../../../network/HttpMethod";

export default class AboutMeImage extends AboutMeSideText{
    private hiddenImageInput: El<HTMLInputElement>;
    private uppy;
    private content: File;

    constructor() {
        super();
        this.enterInitialState();
        this.initUppy();
        this.setupImageInputListener();
    }

    protected initElements() {
        this.editButton = new El(document.getElementById('about-me-side-image-edit'));
        this.contentElement = new El(document.getElementById(
            'about-me-side-image') as HTMLDivElement);
        this.saveAndCancelContainer = new El(document.getElementById(
            'save-and-cancel-about-me-side-image-buttons') as HTMLDivElement);
        this.saveButton = new El(document.getElementById('save-about-me-side-image'));
        this.cancelButton = new El(document.getElementById('cancel-about-me-side-image'));
        this.loadIndicator = new El(document.getElementById('loading-about-me-side-image'));
        this.hiddenImageInput = new El(document.getElementById(
            'about-me-side-image-hidden-input') as HTMLInputElement);
    }

    private initUppy() {
        this.uppy = Uppy({
            allowMultipleUploads: false,
            autoProceed: false,
            restrictions: {
                maxNumberOfFiles: 1
            }
        })
            .use(ThumbnailGenerator, {
                id: 'ThumbnailGenerator',
                thumbnailWidth: 200,
                thumbnailHeight: 200,
            });
    }

    enterEditingState() {
        this.editButton.hide();
        this.contentElement.makeEditable();
        this.saveAndCancelContainer.show();
        this.openFileExplorer();
    }

    openFileExplorer() {
        this.hiddenImageInput.el.click();
    }

    private setupImageInputListener() {
        this.hiddenImageInput.el.addEventListener('change', ev => {
            const image = this.hiddenImageInput.el.files[0];
            this.content = image;
            this.addImage(image);
        });

        this.uppy.on('thumbnail:generated', (file, preview) => {
            (<HTMLImageElement>this.contentElement.el).src = preview
        })
    }

    private addImage(image: File) {
        this.uppy.reset();
        this.uppy.addFile({
            name: image.name,
            type: image.type,
            data: image
        });
    }

    getContent() {
        return this.content;
    }
}


const aboutMeImage = new AboutMeImage();
aboutMeImage.setOnSaveClicked(() => {
    saveImage(aboutMeImage.getContent())
        .then(res => {
            if (res.status == 'ok') {
                aboutMeImage.enterInitialState();
            } else {
                saveFailedHandler();
            }
        })
        .catch(saveFailedHandler)
});

function saveFailedHandler(err?) {
    if (err == undefined)
        console.log('Error saving image');
    else
        console.log(err);
}

async function saveImage(image: File) {
    const formData = new FormData();
    formData.append('about_me_side_image_file', image, image.name);
    const {csrfToken, baseUrl} = RequestOptionsValues.get();
    const fetchUrl = `${baseUrl}/about_me`;

    const response = await fetch(fetchUrl, {
        method: HttpMethod.POST,
        headers: {
            'Accept': 'application/json',   //To tell Laravel this is an ajax call
            'X-CSRF-TOKEN': csrfToken
        },
        body: formData
    });

    return await response.json()
}
