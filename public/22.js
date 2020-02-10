(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./resources/js/ui/visitors/instagram/InstagramMedia.js":
/*!**************************************************************!*\
  !*** ./resources/js/ui/visitors/instagram/InstagramMedia.js ***!
  \**************************************************************/
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

var instagramMediaContainerEl = document.getElementById('instagram');
var instagramService = new InstagramService_1["default"](RequestOptions_1.RequestOptionsValues.get());
instagramService.getMedia().then(function (res) {
  if (res.data !== undefined) {
    console.log(res.data);

    for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
      var media = _a[_i];
      var image = document.createElement('img');
      image.src = media.media_url;
      image.alt = 'Instagram image';
      instagramMediaContainerEl.appendChild(image);
    }
  } else if (res.error !== undefined) {
    instagramMediaContainerEl.classList.add('d-none');
    console.log(res.error);
  }
})["catch"](function (err) {
  instagramMediaContainerEl.classList.add('d-none');
  console.log(err);
});

/***/ })

}]);