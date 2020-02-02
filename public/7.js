(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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

/***/ "./resources/js/ui/renee/edit-aboutme/AboutMeSideText.js":
/*!***************************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/AboutMeSideText.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var CallIfPresent_1 = __webpack_require__(/*! ../../../utils/CallIfPresent */ "./resources/js/utils/CallIfPresent.js");

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

/***/ }),

/***/ "./resources/js/ui/renee/edit-aboutme/editimages.js":
/*!**********************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/editimages.js ***!
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

var ElementUtils_1 = __webpack_require__(/*! ../../../utils/ElementUtils */ "./resources/js/utils/ElementUtils.js");

var AboutMeSideText_1 = __webpack_require__(/*! ./AboutMeSideText */ "./resources/js/ui/renee/edit-aboutme/AboutMeSideText.js");

var AboutMeSideName =
/** @class */
function (_super) {
  __extends(AboutMeSideName, _super);

  function AboutMeSideName() {
    var _this = _super.call(this) || this;

    _this.enterInitialState();

    return _this;
  }

  AboutMeSideName.prototype.initElements = function () {
    this.editButton = new ElementUtils_1.El(document.getElementById('about-me-side-name-edit'));
    this.contentElement = new ElementUtils_1.El(document.getElementById('about-me-side-name'));
    this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-side-name-buttons'));
    this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me-side-name'));
    this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me-side-name'));
    this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me-side-name'));
  };

  AboutMeSideName.prototype.getContent = function () {
    return this.contentElement.el.innerHTML;
  };

  return AboutMeSideName;
}(AboutMeSideText_1.AboutMeSideText);

var aboutMeSideName = new AboutMeSideName();
aboutMeSideName.setOnSaveClicked(function () {
  persistAboutMeSideName().then(function (res) {
    if (res.status == 'ok') aboutMeSideName.enterInitialState();else handleSaveFailure();
  })["catch"](handleSaveFailure);
});

function handleSaveFailure(err) {
  console.log(err); // TODO: Add implementation
} // TODO: move to appropriate module


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
              "about_me_side_name": aboutMeSideName.getContent()
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

/***/ }),

/***/ "./resources/js/utils/CallIfPresent.js":
/*!*********************************************!*\
  !*** ./resources/js/utils/CallIfPresent.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function callCallbackIfPresent(callback) {
  if (callback !== undefined) {
    callback();
  }
}

exports.callCallbackIfPresent = callCallbackIfPresent;

/***/ }),

/***/ "./resources/js/utils/ElementUtils.js":
/*!********************************************!*\
  !*** ./resources/js/utils/ElementUtils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*export function show(element: HTMLElement) {
    element.classList.remove('d-none')
}

export function hide(element: HTMLElement) {
    element.classList.add('d-none');
}*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var El =
/** @class */
function () {
  function El(el) {
    this.el = el;
  }

  El.prototype.show = function () {
    this.el.classList.remove('d-none');
  };

  El.prototype.hide = function () {
    this.el.classList.add('d-none');
  };

  El.prototype.makeEditable = function () {
    this.el.setAttribute('contenteditable', 'true');
    document.execCommand("defaultParagraphSeparator", false, "p"); //
    // document.execCommand("defaultParagraphSeparator", false, "br"); //
    // this.setupEditableContentEl();
    // document.execCommand('insertBrOnReturn');
  };

  El.prototype.makeNotEditable = function () {
    this.el.setAttribute('contenteditable', 'false');
  };

  El.prototype.focusAndHighlightAllText = function () {
    this.el.focus();
    document.execCommand('selectAll', false, null);
  };

  return El;
}();

exports.El = El;

/***/ })

}]);