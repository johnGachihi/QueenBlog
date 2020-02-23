(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/ui/renee/edit-aboutme/AboutMeComponents.js":
/*!*****************************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/AboutMeComponents.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AboutMeService_1 = __importDefault(__webpack_require__(/*! ../../../network/AboutMeService */ "./resources/js/network/AboutMeService.js"));

var ErrorHandling_1 = __importDefault(__webpack_require__(/*! ../../../utils/ErrorHandling */ "./resources/js/utils/ErrorHandling.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

var EditableComponent_1 = __importDefault(__webpack_require__(/*! ../editables/EditableComponent */ "./resources/js/ui/renee/editables/EditableComponent.js"));
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


var AboutMeComponents =
/** @class */
function (_super) {
  __extends(AboutMeComponents, _super);

  function AboutMeComponents() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.aboutMeService = new AboutMeService_1["default"](RequestOptions_1.RequestOptionsValues.get());
    return _this;
  }

  AboutMeComponents.prototype.saveContent = function () {
    var _this = this;

    this.aboutMeService.save(this.getContentToSave()).then(function (response) {
      if (response.status != 'ok') {
        ErrorHandling_1["default"]("Unable to save: Error " + response);

        _this.cancelEdit();
      }

      _this.enterInitialState();
    })["catch"](function (err) {
      ErrorHandling_1["default"](err);

      _this.cancelEdit();

      _this.enterInitialState();
    });
  };

  return AboutMeComponents;
}(EditableComponent_1["default"]);

exports["default"] = AboutMeComponents;
var AboutMeComponentState;

(function (AboutMeComponentState) {
  AboutMeComponentState["INITIAL"] = "initial";
  AboutMeComponentState["EDITING"] = "editing";
  AboutMeComponentState["SAVING"] = "loading";
})(AboutMeComponentState = exports.AboutMeComponentState || (exports.AboutMeComponentState = {}));

/***/ }),

/***/ "./resources/js/ui/renee/edit-aboutme/AboutMeSideText.js":
/*!***************************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/AboutMeSideText.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CallIfPresent_1 = __webpack_require__(/*! ../../../utils/CallIfPresent */ "./resources/js/utils/CallIfPresent.js");

var AboutMeComponents_1 = __importDefault(__webpack_require__(/*! ./AboutMeComponents */ "./resources/js/ui/renee/edit-aboutme/AboutMeComponents.js"));

var AboutMeSideText =
/** @class */
function () {
  function AboutMeSideText() {
    this.initElements();
    this.setupButtonListeners();
  }

  AboutMeSideText.prototype.enterInitialState = function () {
    this.editButton.show();
    this.contentElement.makeNotEditable();
    this.saveAndCancelContainer.hide();
    this.loadIndicator.hide();
  };

  AboutMeSideText.prototype.enterEditingState = function () {
    this.editButton.hide();
    this.contentElement.makeEditable();
    this.saveAndCancelContainer.show();
    this.contentElement.focusAndHighlightAllText();
    this.loadIndicator.hide();
  };

  AboutMeSideText.prototype.enterSavingState = function () {
    this.editButton.hide();
    this.saveAndCancelContainer.hide();
    this.loadIndicator.show();
    this.contentElement.makeNotEditable();
  };

  AboutMeSideText.prototype.setupButtonListeners = function () {
    var _this = this;

    this.editButton.el.addEventListener('click', function (ev) {
      ev.preventDefault();

      _this.enterEditingState();

      CallIfPresent_1.callCallbackIfPresent(_this.onEditClicked);
    });
    this.saveButton.el.addEventListener('click', function (ev) {
      ev.preventDefault();

      _this.enterSavingState();

      CallIfPresent_1.callCallbackIfPresent(_this.onSaveClicked);
    });
    $(this.contentElement.el).on('keydown', function (e) {
      if (e.keyCode === 13) {
        _this.saveButton.el.click();

        return false;
      }
    });
    this.contentElement.el.addEventListener('click', function (ev) {
      ev.preventDefault();

      _this.editButton.el.click();
    });
  };

  AboutMeSideText.prototype.setOnEditClicked = function (onEditClicked) {
    this.onEditClicked = onEditClicked;
  };

  AboutMeSideText.prototype.setOnSaveClicked = function (onSaveClicked) {
    this.onSaveClicked = onSaveClicked;
  };

  return AboutMeSideText;
}();

exports.AboutMeSideText = AboutMeSideText;

var AboutMeTextComponent =
/** @class */
function (_super) {
  __extends(AboutMeTextComponent, _super);

  function AboutMeTextComponent() {
    return _super.call(this) || this;
  }

  AboutMeTextComponent.prototype.enterEditingState = function () {
    _super.prototype.enterEditingState.call(this);

    this.contentElement.focusAndHighlightAllText();
  };

  AboutMeTextComponent.prototype.setupListeners = function () {
    var _this = this;

    _super.prototype.setupListeners.call(this);

    this.contentElement.on('keydown', function (e) {
      //@ts-ignore
      if (e.keyCode === 13) {
        _this.saveButton.el.click();

        return false;
      } //@ts-ignore


      if (e.keyCode === 27) {
        _this.cancelButton.el.click();
      }
    });
  };

  AboutMeTextComponent.prototype.getContent = function () {
    return this.contentElement.el.innerText;
  };

  AboutMeTextComponent.prototype.setContent = function (content) {
    this.contentElement.el.innerText = content;
  };

  return AboutMeTextComponent;
}(AboutMeComponents_1["default"]);

exports.AboutMeTextComponent = AboutMeTextComponent;

/***/ }),

/***/ "./resources/js/ui/renee/edit-aboutme/editAboutMeTitle.js":
/*!****************************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/editAboutMeTitle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ElementUtils_1 = __webpack_require__(/*! ../../../utils/ElementUtils */ "./resources/js/utils/ElementUtils.js");

var AboutMeSideText_1 = __webpack_require__(/*! ./AboutMeSideText */ "./resources/js/ui/renee/edit-aboutme/AboutMeSideText.js");

var AboutMeTitle =
/** @class */
function (_super) {
  __extends(AboutMeTitle, _super);

  function AboutMeTitle() {
    return _super.call(this) || this;
  }

  AboutMeTitle.prototype.initElements = function () {
    this.editButton = new ElementUtils_1.El(document.getElementById('about-me-title-edit'));
    this.contentElement = new ElementUtils_1.El(document.getElementById('about-me-title'));
    this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-title-buttons'));
    this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me-title'));
    this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me-title'));
    this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me-title'));
  };

  AboutMeTitle.prototype.getContentToSave = function () {
    return {
      about_me_title: this.getContent()
    };
  };

  return AboutMeTitle;
}(AboutMeSideText_1.AboutMeTextComponent);

var aboutMeSideName = new AboutMeTitle();

/***/ })

}]);