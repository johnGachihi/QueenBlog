"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AboutMeService_1 = __importDefault(require("../../../network/AboutMeService"));
var CallIfPresent_1 = require("../../../utils/CallIfPresent");
var ErrorHandling_1 = __importDefault(require("../../../utils/ErrorHandling"));
var RequestOptions_1 = require("../../../network/RequestOptions");
var AboutMeComponents = /** @class */ (function () {
    function AboutMeComponents() {
        this.aboutMeService = new AboutMeService_1.default(RequestOptions_1.RequestOptionsValues.get());
        this.initElements();
        this.enterInitialState();
        this.setupListeners();
    }
    AboutMeComponents.prototype.enterInitialState = function () {
        this.state = AboutMeComponentState.INITIAL;
        this.editButton.show();
        this.contentElement.makeNotEditable();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.hide();
        this.contentBeforeEdit = this.getContent(); // Should this be here
    };
    AboutMeComponents.prototype.enterEditingState = function () {
        this.state = AboutMeComponentState.EDITING;
        this.editButton.hide();
        this.contentElement.makeEditable();
        this.saveAndCancelContainer.show();
        this.loadIndicator.hide();
    };
    AboutMeComponents.prototype.enterSavingState = function () {
        this.state = AboutMeComponentState.SAVING;
        this.editButton.hide();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.show();
        this.contentElement.makeNotEditable();
    };
    AboutMeComponents.prototype.setupListeners = function () {
        var _this = this;
        this.editButton.el.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.enterEditingState();
            CallIfPresent_1.callCallbackIfPresent(_this.onEditClicked);
        });
        this.saveButton.el.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.enterSavingState();
            _this.saveContent();
            CallIfPresent_1.callCallbackIfPresent(_this.onSaveClicked);
        });
        this.cancelButton.el.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.cancelEdit();
            _this.enterInitialState();
        });
        this.contentElement.el.addEventListener('click', function (ev) {
            if (_this.state === AboutMeComponentState.INITIAL) {
                ev.preventDefault();
                _this.editButton.el.click();
            }
        });
    };
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
    ;
    AboutMeComponents.prototype.cancelEdit = function () {
        this.setContent(this.contentBeforeEdit);
    };
    return AboutMeComponents;
}());
exports.default = AboutMeComponents;
var AboutMeComponentState;
(function (AboutMeComponentState) {
    AboutMeComponentState["INITIAL"] = "initial";
    AboutMeComponentState["EDITING"] = "editing";
    AboutMeComponentState["SAVING"] = "loading";
})(AboutMeComponentState = exports.AboutMeComponentState || (exports.AboutMeComponentState = {}));
//# sourceMappingURL=AboutMeComponents.js.map