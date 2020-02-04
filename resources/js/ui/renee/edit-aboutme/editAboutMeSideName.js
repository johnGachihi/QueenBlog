"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ElementUtils_1 = require("../../../utils/ElementUtils");
var AboutMeSideText_1 = require("./AboutMeSideText");
/*
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

*/
var AboutMeSideName = /** @class */ (function (_super) {
    __extends(AboutMeSideName, _super);
    function AboutMeSideName() {
        return _super.call(this) || this;
    }
    AboutMeSideName.prototype.initElements = function () {
        this.editButton = new ElementUtils_1.El(document.getElementById('about-me-side-name-edit'));
        this.contentElement = new ElementUtils_1.El(document.getElementById('about-me-side-name'));
        this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-side-name-buttons'));
        this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me-side-name'));
        this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me-side-name'));
        this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me-side-name'));
    };
    AboutMeSideName.prototype.getContentToSave = function () {
        return { about_me_side_name: this.getContent() };
    };
    return AboutMeSideName;
}(AboutMeSideText_1.AboutMeTextComponent));
var aboutMeSideName = new AboutMeSideName();
//# sourceMappingURL=editimages.js.map