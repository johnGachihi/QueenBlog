"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CallIfPresent_1 = require("../../../utils/CallIfPresent");
var EditableComponents = /** @class */ (function () {
    function EditableComponents() {
        this.initElements();
        this.enterInitialState();
        this.setupListeners();
    }
    EditableComponents.prototype.enterInitialState = function () {
        this.currentState = EditableComponentState.INITIAL;
        this.editButton.show();
        this.contentElement.makeNotEditable();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.hide();
        this.contentBeforeEdit = this.getContent();
    };
    EditableComponents.prototype.enterEditingState = function () {
        this.currentState = EditableComponentState.EDITING;
        this.editButton.hide();
        this.contentElement.makeEditable();
        this.saveAndCancelContainer.show();
        this.loadIndicator.hide();
    };
    EditableComponents.prototype.enterSavingState = function () {
        this.currentState = EditableComponentState.SAVING;
        this.editButton.hide();
        this.saveAndCancelContainer.hide();
        this.loadIndicator.show();
        this.contentElement.makeNotEditable();
    };
    EditableComponents.prototype.setupListeners = function () {
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
            if (_this.currentState === EditableComponentState.INITIAL) {
                ev.preventDefault();
                _this.editButton.el.click();
            }
        });
    };
    EditableComponents.prototype.cancelEdit = function () {
        this.setContent(this.contentBeforeEdit);
    };
    return EditableComponents;
}());
exports.default = EditableComponents;
var EditableComponentState;
(function (EditableComponentState) {
    EditableComponentState["INITIAL"] = "initial";
    EditableComponentState["EDITING"] = "editing";
    EditableComponentState["SAVING"] = "loading";
})(EditableComponentState || (EditableComponentState = {}));
//# sourceMappingURL=EditableComponent.js.map