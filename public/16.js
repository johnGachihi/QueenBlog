(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "./resources/js/ui/renee/edit-aboutme/editaboutmeside.js":
/*!***************************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/editaboutmeside.js ***!
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AboutMeSideText_1 = __webpack_require__(/*! ./AboutMeSideText */ "./resources/js/ui/renee/edit-aboutme/AboutMeSideText.js");

var ElementUtils_1 = __webpack_require__(/*! ../../../utils/ElementUtils */ "./resources/js/utils/ElementUtils.js");

var AboutMeSideContent =
/** @class */
function (_super) {
  __extends(AboutMeSideContent, _super);

  function AboutMeSideContent() {
    return _super.call(this) || this;
  }

  AboutMeSideContent.prototype.initElements = function () {
    this.editButton = new ElementUtils_1.El(document.getElementById('edit-about-me-side'));
    this.contentElement = new ElementUtils_1.El(document.getElementById('about-me-side'));
    this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('about-me-side-save-cancel-container'));
    this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me-side'));
    this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me-side'));
    this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me-side'));
  };

  AboutMeSideContent.prototype.getContentToSave = function () {
    return {
      about_me_side: this.getContent()
    };
  };

  return AboutMeSideContent;
}(AboutMeSideText_1.AboutMeTextComponent);

var editAboutMeSide = new AboutMeSideContent();

/***/ })

}]);