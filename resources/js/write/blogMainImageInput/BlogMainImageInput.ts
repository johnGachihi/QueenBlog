import BlogImageInputConfigOptions from "./BlogImageInputConfigOptions";
import Uppy from "@uppy/core";
import ThumbnailGenerator from "@uppy/thumbnail-generator";

export default class BlogMainImageInput {
    private uppy: any;
    private configOptions: BlogImageInputConfigOptions;

    private onImageInputtedHandler: (image: File) => void;

    constructor(configOptions: BlogImageInputConfigOptions) {
        this.configOptions = configOptions;
        this.initUppy();
        this.setupImageInputButton();
        this.listenForImageInput((file: File) => this.handleImageInputted(file));
        this.listenForThumbnailGenerated((file: File, preview) => this.handleThumbnailGenerated(file, preview))

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

    private setupImageInputButton() {
        this.configOptions.imageInputButton.addEventListener('click', () => this.openFileExplorer())
    }

    private openFileExplorer() {
        this.configOptions.hiddenImageInputElement.click()
    }

    private listenForImageInput(handleImageInputted: (file: File) => void) {
        this.configOptions.hiddenImageInputElement.addEventListener('change', () => {
            handleImageInputted(this.configOptions.hiddenImageInputElement.files[0])
        })
    }

    private handleImageInputted(file: File) {
        if (this.onImageInputtedHandler) this.onImageInputtedHandler(file);

        this.uppy.reset();
        this.uppy.addFile({
            name: file.name,
            type: file.type,
            data: file
        });

        this.showProgressBar()
    }

    private showProgressBar() {
        this.configOptions.progressBar.classList.remove('d-none')
    }

    private listenForThumbnailGenerated(handleThumbnailGenerated: (file: File, preview) => void) {
        this.uppy.on('thumbnail:generated', handleThumbnailGenerated)
    }

    private handleThumbnailGenerated(file: File, preview) {
        this.configOptions.imagePreviewElement.src = preview;
        this.configOptions.imagePreviewElement.classList.remove('d-none');

        if (this.uppy.getFiles().length > 0) {
            this.configOptions.imageInputButton.innerText = "Change"
        }

        this.hideProgressBar();
        this.changeButtonToOutlined()
    }

    private hideProgressBar() {
        this.configOptions.progressBar.classList.add('d-none');
    }

    private changeButtonToOutlined() {
        this.configOptions.imageInputButton.classList.add('mdc-button--outlined')
    }

    onImageInputted(onImageInputtedHandler: (image: File) => void) {
        this.onImageInputtedHandler = onImageInputtedHandler
    }
}
