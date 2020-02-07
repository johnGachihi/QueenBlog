(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/network/ContactMessageService.js":
/*!*******************************************************!*\
  !*** ./resources/js/network/ContactMessageService.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HttpMethod_1 = __webpack_require__(/*! ./HttpMethod */ "./resources/js/network/HttpMethod.js");

var ContactMessageService =
/** @class */
function () {
  function ContactMessageService(requestOptions) {
    this.requestOptions = requestOptions;
  } // TODO: Grand refactoring expected in the network section
  // wherein this method will be reduced to one line of implementation


  ContactMessageService.prototype.send = function (message) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, csrfToken, baseUrl, fetchUrl, response;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.requestOptions, csrfToken = _a.csrfToken, baseUrl = _a.baseUrl;
            fetchUrl = baseUrl + "/contact";
            return [4
            /*yield*/
            , fetch(fetchUrl, {
              method: HttpMethod_1.HttpMethod.POST,
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': csrfToken
              },
              body: JSON.stringify(message)
            })];

          case 1:
            response = _b.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            return [2
            /*return*/
            , _b.sent()];
        }
      });
    });
  };

  return ContactMessageService;
}();

exports["default"] = ContactMessageService;

/***/ }),

/***/ "./resources/js/network/HttpMethod.js":
/*!********************************************!*\
  !*** ./resources/js/network/HttpMethod.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HttpMethod;

(function (HttpMethod) {
  HttpMethod["GET"] = "GET";
  HttpMethod["POST"] = "POST";
  HttpMethod["PUT"] = "PUT";
  HttpMethod["DELETE"] = "DELETE";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));

/***/ }),

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

/***/ "./resources/js/ui/visitors/contactpage/contact.js":
/*!*********************************************************!*\
  !*** ./resources/js/ui/visitors/contactpage/contact.js ***!
  \*********************************************************/
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

var ContactMessageService_1 = __importDefault(__webpack_require__(/*! ../../../network/ContactMessageService */ "./resources/js/network/ContactMessageService.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

var PerformAsyncFuncWithCallbacks_1 = __webpack_require__(/*! ../../../utils/PerformAsyncFuncWithCallbacks */ "./resources/js/utils/PerformAsyncFuncWithCallbacks.js");

$('#contact-form').on('submit', function (e) {
  PerformAsyncFuncWithCallbacks_1.performAsyncTask(sendContactMessage).onBeforeStart(onBeforeStartFormSubmission).onSuccess(onSuccessfulSubmission).onFailure(onFailureInSubmitting);
  e.preventDefault();
});

function sendContactMessage() {
  return new ContactMessageService_1["default"](RequestOptions_1.RequestOptionsValues.get()).send(getContactMessage());
}

function getContactMessage() {
  var contactForm = document.getElementById('contact-form');
  var formData = new FormData(contactForm);
  return {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };
}

function onBeforeStartFormSubmission() {
  $('#contact-submit-status').text('Submitting...');
}

function onSuccessfulSubmission(res) {
  $('#contact-submit-status').text('Submitted');
}

function onFailureInSubmitting(err) {
  $('#contact-submit-status').text('Submission failed.');
}

/***/ }),

/***/ "./resources/js/utils/PerformAsyncFuncWithCallbacks.js":
/*!*************************************************************!*\
  !*** ./resources/js/utils/PerformAsyncFuncWithCallbacks.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function performAsyncTask(task) {
  return new OnBeforeStart(task);
}

exports.performAsyncTask = performAsyncTask;

var OnBeforeStart =
/** @class */
function () {
  function OnBeforeStart(task) {
    this.task = task;
  }

  OnBeforeStart.prototype.onBeforeStart = function (onBeforeStartCallback) {
    return new OnSuccess(this.task, onBeforeStartCallback);
  };

  return OnBeforeStart;
}();

var OnSuccess =
/** @class */
function () {
  function OnSuccess(task, onBeforeStartCallback) {
    this.task = task;
    this.onBeforeStartCallback = onBeforeStartCallback;
  }

  OnSuccess.prototype.onSuccess = function (onSuccessCallback) {
    return new OnFailure(this.task, this.onBeforeStartCallback, onSuccessCallback);
  };

  return OnSuccess;
}();

var OnFailure =
/** @class */
function () {
  function OnFailure(task, onBeforeStartCallback, onSuccessCallback) {
    this.task = task;
    this.onBeforeStartCallback = onBeforeStartCallback;
    this.onSuccessCallback = onSuccessCallback;
  }

  OnFailure.prototype.onFailure = function (onFailureCallback) {
    return new Executor(this.task, this.onBeforeStartCallback, this.onSuccessCallback, onFailureCallback);
  };

  return OnFailure;
}();

var Executor =
/** @class */
function () {
  function Executor(task, onBeforeStartCallback, onSuccessCallback, onFailureCallback) {
    onBeforeStartCallback();
    return task().then(onSuccessCallback)["catch"](onFailureCallback);
  }

  return Executor;
}();

/***/ })

}]);