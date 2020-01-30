(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "./resources/js/ui/renee/edit-aboutme/editimages.js":
/*!**********************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/editimages.js ***!
  \**********************************************************/
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

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

var HttpMethod_1 = __webpack_require__(/*! ../../../network/HttpMethod */ "./resources/js/network/HttpMethod.js");

function setupEditSideImageButton() {
  document.getElementById('about-me-side-image-edit').addEventListener('click', function (e) {
    e.preventDefault();
    console.log('about-me-side-image-edit');
  });
}

exports.setupEditSideImageButton = setupEditSideImageButton;
var aboutMeSideName = document.getElementById('about-me-side-name');
var saveAndCancelAboutMeSideNameButtons = document.getElementById('save-and-cancel-about-me-side-name-buttons');
var loadingAboutMeSideName = document.getElementById('loading-about-me-side-name');

function setupEditSideNameButton() {
  var editSideNameButton = document.getElementById('about-me-side-name-edit');
  editSideNameButton.addEventListener('click', function (ev) {
    ev.preventDefault();
    aboutMeSideName.setAttribute('contenteditable', 'true');
    aboutMeSideName.focus();
    document.execCommand('selectAll', false, null);
    hide(editSideNameButton);
    show(saveAndCancelAboutMeSideNameButtons);
  });
}

exports.setupEditSideNameButton = setupEditSideNameButton;
aboutMeSideName.addEventListener('input', function (ev) {
  // TODO: Enable save and cancel buttons here
  console.log('Editting................');
});
var saveAboutMeSideName = document.getElementById('save-about-me-side-name');
saveAboutMeSideName.addEventListener('click', function (ev) {
  ev.preventDefault();
  hide(saveAndCancelAboutMeSideNameButtons);
  show(loadingAboutMeSideName);
  persistAboutMeSideName().then(function (res) {
    hide(loadingAboutMeSideName);

    if (res.status != 'ok') {// TODO: Revert and ask user to try again or try again later
    }
  })["catch"](function (err) {// TODO: Revert and ask user to try again or try again later
  });
  aboutMeSideName.blur();
});

function hide(element) {
  element.classList.add('d-none');
}

function show(element) {
  element.classList.remove('d-none');
}

function persistAboutMeSideName() {
  return __awaiter(this, void 0, void 0, function () {
    var _a, csrfToken, baseUrl, fetchUrl, response;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _a = RequestOptions_1.RequestOptionsValues.get(), csrfToken = _a.csrfToken, baseUrl = _a.baseUrl;
          fetchUrl = baseUrl + "/about_me";
          return [4
          /*yield*/
          , fetch(fetchUrl, {
            method: HttpMethod_1.HttpMethod.POST,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({
              "about_me_side_name": aboutMeSideName.innerHTML
            })
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
}

/***/ })

}]);