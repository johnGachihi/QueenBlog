(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/js/network/RequestOptions.js":
/*!************************************************!*\
  !*** ./resources/js/network/RequestOptions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var RequestOptionsValues =
/** @class */
function () {
  function RequestOptionsValues() {}

  RequestOptionsValues.get = function () {
    return {
      csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
    };
  };

  return RequestOptionsValues;
}();

exports.RequestOptionsValues = RequestOptionsValues;

/***/ }),

/***/ "./resources/js/ui/renee/AccessBackend.js":
/*!************************************************!*\
  !*** ./resources/js/ui/renee/AccessBackend.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var MultiClickListener_1 = __webpack_require__(/*! ../../utils/MultiClickListener */ "./resources/js/utils/MultiClickListener.js");

var RequestOptions_1 = __webpack_require__(/*! ../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

MultiClickListener_1.onMultiClick(document.getElementById('div'), 4, redirectToBackend);

function redirectToBackend() {
  var requestOptions = RequestOptions_1.RequestOptionsValues.get();
  window.location.href = requestOptions.baseUrl + "/only/juli";
}

/***/ }),

/***/ "./resources/js/utils/MultiClickListener.js":
/*!**************************************************!*\
  !*** ./resources/js/utils/MultiClickListener.js ***!
  \**************************************************/
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

var Timeout_1 = __importDefault(__webpack_require__(/*! ../write/Timeout */ "./resources/js/write/Timeout.js"));

var clickCount = 0;
var timeout = new Timeout_1["default"]();

function onMultiClick(element, requiredClicks, callback) {
  element.addEventListener('click', function (ev) {
    onEveryClick(requiredClicks, callback);
  });
}

exports.onMultiClick = onMultiClick;

function onEveryClick(requiredClicks, callback) {
  clickCount++;

  if (clickCount >= requiredClicks) {
    callback();
    resetClickCount();
  }

  if (timeout.isSet()) timeout.resetTimeOut();else timeout.setTimeOut(500, resetClickCount);
}

function resetClickCount() {
  clickCount = 0;
}

/***/ }),

/***/ "./resources/js/write/Timeout.js":
/*!***************************************!*\
  !*** ./resources/js/write/Timeout.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Timeout =
/** @class */
function () {
  function Timeout() {}

  Timeout.prototype.setTimeOut = function (delay, action) {
    this.delay = delay;
    this.action = action;
    this.timeoutID = setTimeout(this.action, this.delay);
  };

  Timeout.prototype.resetTimeOut = function () {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(this.action, this.delay);
  };

  Timeout.prototype.isSet = function () {
    return this.timeoutID !== undefined;
  };

  return Timeout;
}();

exports["default"] = Timeout;

/***/ })

}]);