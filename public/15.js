(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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

/***/ "./resources/js/ui/renee/edit-aboutme/editimages.js":
/*!**********************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/editAboutMeSideName.js ***!
  \**********************************************************/
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


var AboutMeSideName =
/** @class */
function (_super) {
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
    return {
      about_me_side_name: this.getContent()
    };
  };

  return AboutMeSideName;
}(AboutMeSideText_1.AboutMeTextComponent);

var aboutMeSideName = new AboutMeSideName();

/***/ })

}]);
