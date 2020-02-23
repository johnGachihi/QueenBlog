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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AboutMeService_1 = __importDefault(require("../../../network/AboutMeService"));
var ErrorHandling_1 = __importDefault(require("../../../utils/ErrorHandling"));
var RequestOptions_1 = require("../../../network/RequestOptions");
var EditableComponent_1 = __importDefault(require("../editables/EditableComponent"));
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
var AboutMeComponents = /** @class */ (function (_super) {
    __extends(AboutMeComponents, _super);
    function AboutMeComponents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.aboutMeService = new AboutMeService_1.default(RequestOptions_1.RequestOptionsValues.get());
        return _this;
    }
    AboutMeComponents.prototype.saveContent = function () {
        var _this = this;
        this.aboutMeService.save(this.getContentToSave())
            .then(function (response) {
            if (response.status != 'ok') {
                ErrorHandling_1.default("Unable to save: Error " + response);
                _this.cancelEdit();
            }
            _this.enterInitialState();
        })
            .catch(function (err) {
            ErrorHandling_1.default(err);
            _this.cancelEdit();
            _this.enterInitialState();
        });
    };
    return AboutMeComponents;
}(EditableComponent_1.default));
exports.default = AboutMeComponents;
var AboutMeComponentState;
(function (AboutMeComponentState) {
    AboutMeComponentState["INITIAL"] = "initial";
    AboutMeComponentState["EDITING"] = "editing";
    AboutMeComponentState["SAVING"] = "loading";
})(AboutMeComponentState = exports.AboutMeComponentState || (exports.AboutMeComponentState = {}));
//# sourceMappingURL=AboutMeComponents.js.map