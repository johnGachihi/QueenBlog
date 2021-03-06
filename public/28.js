(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

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