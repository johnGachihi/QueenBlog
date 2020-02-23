import FoldImage from "./FoldImage";
import {El} from "../../../utils/ElementUtils";
import EditableImageComponent from "../editables/EditableImageComponent";
import FoldImageService from "../../../network/FoldImageService";
import {RequestOptionsValues} from "../../../network/RequestOptions";

export default class FoldImageElement extends EditableImageComponent{
    private foldImage: FoldImage;
    private foldImageDom: Document;


    constructor(foldImage: FoldImage) {
        console.log(foldImage);
        super(new FoldImageService(RequestOptionsValues.get()));
        this.foldImage = foldImage;

        this.setContent(`${RequestOptionsValues.get().baseUrl}/storage/${foldImage.filename}`);
        this.addElementToDom();
    }

    private addElementToDom() {
        document.getElementById('fold-images')
            .appendChild(this.foldImageDom.getElementsByClassName('fold-image-elem')[0]);
    }

    protected initElements() {
        this.foldImageDom = new DOMParser()
            .parseFromString(getFoldImageHTMLString(), 'text/html');

        this.editButton = new El(this.foldImageDom.querySelector('.edit-btn'));
        this.contentElement = new El(this.foldImageDom.querySelector('.fold-image'));
        this.saveAndCancelContainer = new El(this.foldImageDom.querySelector('.save-and-cancel-container'));
        this.saveButton = new El(this.foldImageDom.querySelector('.save-btn'));
        this.cancelButton = new El(this.foldImageDom.querySelector('.cancel-btn'));

        this.loadIndicator = new El(this.foldImageDom.querySelector('.load-indicator'));
        this.hiddenImageInput = new El(this.foldImageDom.querySelector(
            '.hidden-file-input') as HTMLInputElement);
    }

    protected getContentToSave() {
        const formData = new FormData();
        formData.append('id', `${this.foldImage.id}`);
        formData.append('fold_image', this.content, this.content.name);
        return formData;
    }
}


function getFoldImageHTMLString() {
    return `
    <div class="fold-image-elem my-5 col-12 d-flex justify-content-center">
        <div class="w-75">
            <div class="fold-image-container">
                <img class="fold-image w-100 h-100" alt="Fold image"
                     src="https://images.pexels.com/photos/3626734/pexels-photo-3626734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            </div>
            <div class="mt-3 d-flex justify-content-end">
                <button class="edit-btn mdc-button mdc-button--raised d-none">
                    <span class="mdc-button__ripple"></span>
                    Edit
                </button>
                <span class="load-indicator mr-4">Saving...</span>
                <div class="save-and-cancel-container">
                    <button class="save-btn mdc-button mdc-button--raised ">
                        <span class="mdc-button__ripple"></span>
                        Save
                    </button>
                    <button class="cancel-btn mdc-button mdc-button--raised ">
                        <span class="mdc-button__ripple"></span>
                        Cancel
                    </button>
                </div>
            </div>
            <input class="hidden-file-input d-none" type="file" accept="image/*">
        </div>
    </div>
`;
}
