(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/js/ui/renee/edit-aboutme/editAboutMeSideName.js":
/*!*******************************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/editAboutMeSideName.js ***!
  \*******************************************************************/
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