(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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

/***/ "./resources/js/network/Service.js":
/*!*****************************************!*\
  !*** ./resources/js/network/Service.js ***!
  \*****************************************/
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

var Service =
/** @class */
function () {
  function Service(requestOptions, relativeUrl) {
    this.requestOptions = requestOptions;
    this.relativeUrl = relativeUrl;
  }

  Service.prototype.save = function (t) {
    return this._fetch(HttpMethod_1.HttpMethod.POST, t);
  };

  Service.prototype.update = function (t) {
    return this._fetch(HttpMethod_1.HttpMethod.POST, t, "/" + t.id);
  };

  Service.prototype._fetch = function (method, data, urlSuffix) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, csrfToken, baseUrl, fetchUrl, fetchBody, fetchHeaders, response;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.requestOptions, csrfToken = _a.csrfToken, baseUrl = _a.baseUrl;
            fetchUrl = Service.makeUrl(baseUrl, this.relativeUrl, urlSuffix);
            fetchHeaders = {
              'Accept': 'application/json',
              'X-CSRF-TOKEN': csrfToken
            };

            if (this.isFormData(data)) {
              fetchBody = data;
            } else {
              fetchBody = JSON.stringify(data);
              fetchHeaders['Content-Type'] = 'application/json';
            }

            return [4
            /*yield*/
            , fetch(fetchUrl, {
              method: method,
              headers: fetchHeaders,
              body: fetchBody
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

  Service.makeUrl = function (baseUrl, relativeUrl, urlSuffix) {
    if (urlSuffix != undefined) {
      return baseUrl + relativeUrl + urlSuffix;
    } else {
      return baseUrl + relativeUrl;
    }
  };

  Service.prototype.isFormData = function (data) {
    return data.append !== undefined;
  };

  return Service;
}();

exports["default"] = Service;

/***/ }),

/***/ "./resources/js/ui/renee/editables/EditableComponent.js":
/*!**************************************************************!*\
  !*** ./resources/js/ui/renee/editables/EditableComponent.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var CallIfPresent_1 = __webpack_require__(/*! ../../../utils/CallIfPresent */ "./resources/js/utils/CallIfPresent.js");

var EditableComponents =
/** @class */
function () {
  function EditableComponents() {
    this.initElements();
    this.enterInitialState();
    this.setupListeners();
  }

  EditableComponents.prototype.enterInitialState = function () {
    this.currentState = EditableComponentState.INITIAL;
    this.editButton.show();
    this.contentElement.makeNotEditable();
    this.saveAndCancelContainer.hide();
    this.loadIndicator.hide();
    this.contentBeforeEdit = this.getContent();
  };

  EditableComponents.prototype.enterEditingState = function () {
    this.currentState = EditableComponentState.EDITING;
    this.editButton.hide();
    this.contentElement.makeEditable();
    this.saveAndCancelContainer.show();
    this.loadIndicator.hide();
  };

  EditableComponents.prototype.enterSavingState = function () {
    this.currentState = EditableComponentState.SAVING;
    this.editButton.hide();
    this.saveAndCancelContainer.hide();
    this.loadIndicator.show();
    this.contentElement.makeNotEditable();
  };

  EditableComponents.prototype.setupListeners = function () {
    var _this = this;

    this.editButton.el.addEventListener('click', function (ev) {
      ev.preventDefault();

      _this.enterEditingState();

      CallIfPresent_1.callCallbackIfPresent(_this.onEditClicked);
    });
    this.saveButton.el.addEventListener('click', function (ev) {
      ev.preventDefault();

      _this.enterSavingState();

      _this.saveContent();

      CallIfPresent_1.callCallbackIfPresent(_this.onSaveClicked);
    });
    this.cancelButton.el.addEventListener('click', function (ev) {
      ev.preventDefault();

      _this.cancelEdit();

      _this.enterInitialState();
    });
    this.contentElement.el.addEventListener('click', function (ev) {
      if (_this.currentState === EditableComponentState.INITIAL) {
        ev.preventDefault();

        _this.editButton.el.click();
      }
    });
  };

  EditableComponents.prototype.cancelEdit = function () {
    this.setContent(this.contentBeforeEdit);
  };

  return EditableComponents;
}();

exports["default"] = EditableComponents;
var EditableComponentState;

(function (EditableComponentState) {
  EditableComponentState["INITIAL"] = "initial";
  EditableComponentState["EDITING"] = "editing";
  EditableComponentState["SAVING"] = "loading";
})(EditableComponentState || (EditableComponentState = {}));

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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var editor_1 = __webpack_require__(/*! ../write/editor */ "./resources/js/write/editor.js");

var El =
/** @class */
function () {
  function El(el, editableMaker) {
    if (editableMaker === void 0) {
      editableMaker = new HtmlContentEditableMaker();
    }

    this.el = el;
    this.editableMaker = editableMaker;
  }

  El.prototype.show = function () {
    this.el.classList.remove('d-none');
  };

  El.prototype.hide = function () {
    this.el.classList.add('d-none');
  };

  El.prototype.makeEditable = function () {
    this.editableMaker.makeEditable(this.el);
  };

  El.prototype.makeNotEditable = function () {
    this.editableMaker.makeNotEditable(this.el);
  };

  El.prototype.focusAndHighlightAllText = function () {
    this.el.focus();
    document.execCommand('selectAll', false, null);
  };

  El.prototype.on = function (event, handler) {
    this.el.addEventListener(event, handler);
  };

  return El;
}();

exports.El = El;

var HtmlContentEditableMaker =
/** @class */
function () {
  function HtmlContentEditableMaker() {}

  HtmlContentEditableMaker.prototype.makeEditable = function (element) {
    element.setAttribute('contenteditable', 'true');
    document.execCommand("defaultParagraphSeparator", false, "p"); //
  };

  HtmlContentEditableMaker.prototype.makeNotEditable = function (element) {
    element.setAttribute('contenteditable', 'false');
  };

  return HtmlContentEditableMaker;
}();

var WysiwigEditableMaker =
/** @class */
function () {
  function WysiwigEditableMaker() {}

  WysiwigEditableMaker.prototype.makeEditable = function (element) {
    var _this = this;

    var content = element.innerHTML;
    element.innerHTML = "";
    console.log("makeEditable - wysiwig");
    editor_1.initCkEditor(element).then(function (editor) {
      _this.editor = editor;
      editor.setData(content);
    })["catch"](console.log);
  };

  WysiwigEditableMaker.prototype.makeNotEditable = function (element) {
    var _this = this;

    if (this.editor !== undefined) {
      console.log('makeNotEditable', this.editor);
      this.editor.destroy().then(function (res) {
        _this.editor = undefined; // Fishy stuff.
      })["catch"](console.log);
    }
  };

  return WysiwigEditableMaker;
}();

exports.WysiwigEditableMaker = WysiwigEditableMaker;

/***/ }),

/***/ "./resources/js/utils/ErrorHandling.js":
/*!*********************************************!*\
  !*** ./resources/js/utils/ErrorHandling.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // TODO: Add implementation e.g Show modal

function handleFailure(errMessage) {
  console.log(errMessage);
}

exports["default"] = handleFailure;

/***/ }),

/***/ "./resources/js/write/editor.js":
/*!**************************************!*\
  !*** ./resources/js/write/editor.js ***!
  \**************************************/
/*! exports provided: initCkEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCkEditor", function() { return initCkEditor; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_RequestOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/RequestOptions */ "./resources/js/network/RequestOptions.js");
/* harmony import */ var _network_RequestOptions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_network_RequestOptions__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var _RequestOptionsValues = _network_RequestOptions__WEBPACK_IMPORTED_MODULE_1__["RequestOptionsValues"].get(),
    csrfToken = _RequestOptionsValues.csrfToken,
    baseUrl = _RequestOptionsValues.baseUrl;

function initCkEditor(_x) {
  return _initCkEditor.apply(this, arguments);
}

function _initCkEditor() {
  _initCkEditor = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(targetEl) {
    var ckEditor;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return BalloonEditor.create(targetEl, {
              placeholder: 'Write the word...',
              toolbar: ['heading', '|', 'bold', 'italic', 'link', 'blockQuote'],
              ignoreEmptyParagraph: true,
              simpleUpload: {
                uploadUrl: "".concat(baseUrl, "/blog-image-upload"),
                headers: {
                  'X-CSRF-TOKEN': csrfToken
                }
              },
              image: {
                toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'],
                styles: ['full', 'alignLeft', 'alignRight']
              }
            }).then(function (editor) {
              ckEditor = editor;
            })["catch"](function (error) {
              throw error;
            });

          case 2:
            return _context.abrupt("return", ckEditor);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _initCkEditor.apply(this, arguments);
}

/***/ })

}]);