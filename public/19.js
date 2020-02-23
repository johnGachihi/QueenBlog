(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/js/network/AboutMeService.js":
/*!************************************************!*\
  !*** ./resources/js/network/AboutMeService.js ***!
  \************************************************/
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

var Service_1 = __importDefault(__webpack_require__(/*! ./Service */ "./resources/js/network/Service.js"));

var AboutMeService =
/** @class */
function (_super) {
  __extends(AboutMeService, _super);

  function AboutMeService(requestOptions) {
    return _super.call(this, requestOptions, '/about_me') || this;
  }

  return AboutMeService;
}(Service_1["default"]);

exports["default"] = AboutMeService;

/***/ }),

/***/ "./resources/js/ui/renee/edit-aboutme/AboutMeArticle.js":
/*!**************************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/AboutMeArticle.js ***!
  \**************************************************************/
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

var AboutMeComponents_1 = __importDefault(__webpack_require__(/*! ./AboutMeComponents */ "./resources/js/ui/renee/edit-aboutme/AboutMeComponents.js"));

var ElementUtils_1 = __webpack_require__(/*! ../../../utils/ElementUtils */ "./resources/js/utils/ElementUtils.js");

var AboutMeArticle =
/** @class */
function (_super) {
  __extends(AboutMeArticle, _super);

  function AboutMeArticle() {
    return _super.call(this) || this;
  }

  AboutMeArticle.getInstance = function () {
    if (this.INSTANCE == undefined) this.INSTANCE = new AboutMeArticle();
    return this.INSTANCE;
  };

  AboutMeArticle.prototype.initElements = function () {
    this.editButton = new ElementUtils_1.El(document.getElementById('about-me-edit'));
    this.contentElement = new ElementUtils_1.El(document.getElementById('about-me'), new ElementUtils_1.WysiwigEditableMaker());
    this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-buttons'));
    this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me'));
    this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me'));
    this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me'));
  };

  AboutMeArticle.prototype.enterEditingState = function () {
    _super.prototype.enterEditingState.call(this);

    this.contentElement.el.focus();
  };

  AboutMeArticle.prototype.getContent = function () {
    return this.contentElement.el.innerHTML;
  };

  AboutMeArticle.prototype.setContent = function (content) {
    this.contentElement.el.innerHTML = content;
  };

  AboutMeArticle.prototype.getContentToSave = function () {
    return {
      about_me: this.getContent()
    };
  };

  return AboutMeArticle;
}(AboutMeComponents_1["default"]);

AboutMeArticle.getInstance();

/***/ }),

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

/***/ })

}]);