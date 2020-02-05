(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/ui/renee/edit-aboutme/AboutMe.js":
/*!*******************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/AboutMeArticle.js ***!
  \*******************************************************/
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

  AboutMeArticle.prototype.initElements = function () {
    this.editButton = new ElementUtils_1.El(document.getElementById('about-me-edit'));
    this.contentElement = new ElementUtils_1.El(document.getElementById('about-me'), new ElementUtils_1.WysiwigEditableMaker());
    this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-buttons'));
    this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me'));
    this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me'));
    this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me'));
  };

  AboutMeArticle.prototype.getContent = function () {// if (this.state == )
  };

  AboutMeArticle.prototype.setContent = function (content) {};

  AboutMeArticle.prototype.getContentToSave = function () {};

  return AboutMeArticle;
}(AboutMeComponents_1["default"]);

new AboutMeArticle();

/***/ })

}]);
