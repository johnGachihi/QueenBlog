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
        this.editButton.show();
        this.contentElement.makeNotEditable();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.hide();
        this.contentBeforeEdit = this.getContent(); // Should this be here
    };
    AboutMeComponents.prototype.enterEditingState = function () {
        this.editButton.hide();
        this.contentElement.makeEditable();
        this.saveAndCancelContainer.show();
        this.loadIndicator.hide();
    };
    AboutMeComponents.prototype.enterSavingState = function () {
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
        this.contentElement.on('keydown', function (e) {
            //@ts-ignore
            if (e.keyCode === 13) {
                _this.saveButton.el.click();
                return false;
            }
            //@ts-ignore
            if (e.keyCode === 27) {
                _this.cancelButton.el.click();
            }
        });
        this.contentElement.el.addEventListener('click', function (ev) {
            ev.preventDefault();
            _this.editButton.el.click();
        });
    };
    AboutMeComponents.prototype.saveContent = function () {
        var _this = this;
        this.aboutMeService.save(this.getContentToSave())
            .then(function (response) {
            if (response.status != 'ok') {
                ErrorHandling_1.default("Unable to save " + response);
                _this.cancelEdit();
            }
            _this.enterInitialState();
        })
            .catch(function (err) {
            _this.enterInitialState();
            ErrorHandling_1.default(err);
        });
    };
    ;
    AboutMeComponents.prototype.cancelEdit = function () {
        this.setContent(this.contentBeforeEdit);
    };
    return AboutMeComponents;
}());
exports.default = AboutMeComponents;
//# sourceMappingURL=AboutMeComponents.js.map