(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/js/ui/renee/instagram-auth-page/InstagramAuthPage.js":
/*!************************************************************************!*\
  !*** ./resources/js/ui/renee/instagram-auth-page/InstagramAuthPage.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var InstagramService_1 = __importDefault(__webpack_require__(/*! ../../../network/InstagramService */ "./resources/js/network/InstagramService.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

var profileIndicatorEl = document.getElementById('instagram-profile-indicator');
var instagramService = new InstagramService_1["default"](RequestOptions_1.RequestOptionsValues.get());
instagramService.getUserName().then(function (res) {
  console.log(res);

  if (res.error !== undefined) {
    profileIndicatorEl.innerText = 'No logged in account';
  } else if (res.username !== undefined) {
    profileIndicatorEl.innerText = 'Account: ' + res.username;
  }
})["catch"](function (err) {
  profileIndicatorEl.innerText = 'Error loading instagram account. Try refreshing page';
});

/***/ })

}]);