import SavedStatusIndicator from "./SavedStatusIndicator";

export default class SavedStatusIndicatorImpl implements SavedStatusIndicator{
    private indicatorElement: HTMLSpanElement;

    constructor(indicatorElement: HTMLSpanElement) {
        this.indicatorElement = indicatorElement;
    }

    clearSavedStatus() {
        if(this.indicatorElement.innerText === "Saved") {
            this.indicatorElement.innerText = ""
        }
    }

    indicateSaved() {
        this.indicatorElement.innerText = "Saved";
        console.log('saved')
    }

    indicateSaving() {
        this.indicatorElement.innerText = "Saving...";
        console.log('saving');
    }

}
