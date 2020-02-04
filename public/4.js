(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/network/AboutMeService.js":
/*!************************************************!*\
  !*** ./resources/js/network/AboutMeService.js ***!
  \************************************************/
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

var Service_1 = __importDefault(__webpack_require__(/*! ./Service */ "./resources/js/network/Service.js"));

var AboutMeService =
/** @class */
function (_super) {
  __extends(AboutMeService, _super);

  function AboutMeService(requestOptions) {
    return _super.call(this, requestOptions, '/about_me') || this;
  }

  return AboutMeService;
}(Service_1["default"]);

exports["default"] = AboutMeService;

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

/***/ "./resources/js/ui/renee/edit-aboutme/AboutMeComponents.js":
/*!*****************************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/AboutMeComponents.js ***!
  \*****************************************************************/
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

var AboutMeService_1 = __importDefault(__webpack_require__(/*! ../../../network/AboutMeService */ "./resources/js/network/AboutMeService.js"));

var CallIfPresent_1 = __webpack_require__(/*! ../../../utils/CallIfPresent */ "./resources/js/utils/CallIfPresent.js");

var ErrorHandling_1 = __importDefault(__webpack_require__(/*! ../../../utils/ErrorHandling */ "./resources/js/utils/ErrorHandling.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

var AboutMeComponents =
/** @class */
function () {
  function AboutMeComponents() {
    this.aboutMeService = new AboutMeService_1["default"](RequestOptions_1.RequestOptionsValues.get());
    this.initElements();
    this.enterInitialState();
    this.setupListeners();
  }

  AboutMeComponents.prototype.enterInitialState = function () {
    this.editButton.show();
    this.contentElement.makeNotEditable();
    this.saveAndCancelContainer.hide();
    this.loadIndicator.hide();
    this.contentBeforeEdit = this.getContent(); // Should this be here
  };

  AboutMeComponents.prototype.enterEditingState = function () {
    this.editButton.hide();
    this.contentElement.makeEditable();
    this.saveAndCancelContainer.show();
    this.loadIndicator.hide();
    console.log(this.contentBeforeEdit);
  };

  AboutMeComponents.prototype.enterSavingState = function () {
    this.editButton.hide();
    this.saveAndCancelContainer.hide();
    this.loadIndicator.show();
    this.contentElement.makeNotEditable();
  };

  AboutMeComponents.prototype.setupListeners = function () {
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

  AboutMeComponents.prototype.saveContent = function () {
    var _this = this;

    this.aboutMeService.save(this.getContentToSave()).then(function (response) {
      if (response.status != 'ok') {
        ErrorHandling_1["default"]("Unable to save " + response);

        _this.cancelEdit();
      }

      _this.enterInitialState();
    })["catch"](function (err) {
      _this.enterInitialState();

      ErrorHandling_1["default"](err);
    });
  };

  ;

  AboutMeComponents.prototype.cancelEdit = function () {
    this.setContent(this.contentBeforeEdit);
  };

  return AboutMeComponents;
}();

exports["default"] = AboutMeComponents;

/***/ }),

/***/ "./resources/js/ui/renee/edit-aboutme/AboutMeImage.js":
/*!************************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/AboutMeImage.js ***!
  \************************************************************/
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

var core_1 = __importDefault(__webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"));

var thumbnail_generator_1 = __importDefault(__webpack_require__(/*! @uppy/thumbnail-generator */ "./node_modules/@uppy/thumbnail-generator/lib/index.js"));

var ElementUtils_1 = __webpack_require__(/*! ../../../utils/ElementUtils */ "./resources/js/utils/ElementUtils.js");

var AboutMeComponents_1 = __importDefault(__webpack_require__(/*! ./AboutMeComponents */ "./resources/js/ui/renee/edit-aboutme/AboutMeComponents.js"));

var AboutMeImageComponent =
/** @class */
function (_super) {
  __extends(AboutMeImageComponent, _super);

  function AboutMeImageComponent() {
    return _super.call(this) || this; // this.enterInitialState();
  }

  AboutMeImageComponent.prototype.initUppy = function () {
    this.uppy = core_1["default"]({
      allowMultipleUploads: false,
      autoProceed: false,
      restrictions: {
        maxNumberOfFiles: 1
      }
    }).use(thumbnail_generator_1["default"], {
      id: 'ThumbnailGenerator',
      thumbnailWidth: this.contentElement.el.offsetWidth
    });
  };

  AboutMeImageComponent.prototype.enterEditingState = function () {
    _super.prototype.enterEditingState.call(this);

    this.openFileExplorer();
  };

  AboutMeImageComponent.prototype.openFileExplorer = function () {
    this.hiddenImageInput.el.click();
  };

  AboutMeImageComponent.prototype.setupListeners = function () {
    var _this = this;

    _super.prototype.setupListeners.call(this);

    this.hiddenImageInput.el.addEventListener('change', function (ev) {
      if (_this.hiddenImageInput.el.files && _this.hiddenImageInput.el.files[0]) {
        var image = _this.hiddenImageInput.el.files[0];
        _this.content = image;

        _this.addImage(image);

        var reader = new FileReader();

        reader.onload = function (e) {
          _this.contentElement.el.setAttribute('src', e.target.result);
        };

        reader.readAsDataURL(_this.hiddenImageInput.el.files[0]);
      }
    });
  };

  AboutMeImageComponent.prototype.addImage = function (image) {
    this.uppy.reset();
    this.uppy.addFile({
      name: image.name,
      type: image.type,
      data: image
    });
  };

  AboutMeImageComponent.prototype.getContent = function () {
    return this.contentElement.el.src;
  };

  AboutMeImageComponent.prototype.setContent = function (content) {
    this.contentElement.el.src = content;
  };

  return AboutMeImageComponent;
}(AboutMeComponents_1["default"]);

exports["default"] = AboutMeImageComponent;

var AboutMeSideImage =
/** @class */
function (_super) {
  __extends(AboutMeSideImage, _super);

  function AboutMeSideImage() {
    return _super.call(this) || this;
  }

  AboutMeSideImage.getInstance = function () {
    if (this.INSTANCE == undefined) {
      this.INSTANCE = new AboutMeSideImage();
    }

    return this.INSTANCE;
  };

  AboutMeSideImage.prototype.initElements = function () {
    this.editButton = new ElementUtils_1.El(document.getElementById('about-me-side-image-edit'));
    this.contentElement = new ElementUtils_1.El(document.getElementById('about-me-side-image'));
    this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-side-image-buttons'));
    this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me-side-image'));
    this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me-side-image'));
    this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me-side-image'));
    this.hiddenImageInput = new ElementUtils_1.El(document.getElementById('about-me-side-image-hidden-input'));
    this.initUppy(); // This is not ok
  };

  AboutMeSideImage.prototype.getContentToSave = function () {
    var formData = new FormData();
    formData.append('about_me_side_image_file', this.content, this.content.name);
    return formData;
  };

  return AboutMeSideImage;
}(AboutMeImageComponent);

var aboutMeImage = AboutMeSideImage.getInstance();

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

/***/ })

}]);