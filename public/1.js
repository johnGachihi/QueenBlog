(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/network/BlogsService.js":
/*!**********************************************!*\
  !*** ./resources/js/network/BlogsService.js ***!
  \**********************************************/
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Service_1 = __importDefault(__webpack_require__(/*! ./Service */ "./resources/js/network/Service.js"));

var HttpMethod_1 = __webpack_require__(/*! ./HttpMethod */ "./resources/js/network/HttpMethod.js");

var BlogsService =
/** @class */
function (_super) {
  __extends(BlogsService, _super);

  function BlogsService(requestOptions) {
    return _super.call(this, requestOptions, BlogsService.relativeURL) || this;
  } //TODO Refactor [Service] and remove below method


  BlogsService.prototype.updateWithImage = function (blog) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, csrfToken, baseUrl, fetchUrl, response;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.requestOptions, csrfToken = _a.csrfToken, baseUrl = _a.baseUrl;
            fetchUrl = Service_1["default"].makeUrl(baseUrl, this.relativeUrl, "/" + blog.get('id'));
            return [4
            /*yield*/
            , fetch(fetchUrl, {
              method: HttpMethod_1.HttpMethod.POST,
              headers: {
                'Accept': 'application/json',
                'X-CSRF-TOKEN': csrfToken
              },
              body: blog
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

  BlogsService.relativeURL = '/blog';
  return BlogsService;
}(Service_1["default"]);

exports["default"] = BlogsService;

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
  HttpMethod["POST"] = "POST";
  HttpMethod["PUT"] = "PUT";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));

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

  Service.prototype.update = function (t, urlSuffix) {
    return this._fetch(HttpMethod_1.HttpMethod.PUT, t, "/" + t.id);
  };

  Service.prototype._fetch = function (method, data, urlSuffix) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, csrfToken, baseUrl, fetchUrl, response;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = this.requestOptions, csrfToken = _a.csrfToken, baseUrl = _a.baseUrl;
            fetchUrl = Service.makeUrl(baseUrl, this.relativeUrl, urlSuffix);
            return [4
            /*yield*/
            , fetch(fetchUrl, {
              method: method,
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': csrfToken
              },
              body: JSON.stringify(data)
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

  return Service;
}();

exports["default"] = Service;

/***/ }),

/***/ "./resources/js/write.js":
/*!*******************************!*\
  !*** ./resources/js/write.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _write_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./write/editor */ "./resources/js/write/editor.js");
/* harmony import */ var _write_blogMainImageInput_BlogMainImageInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./write/blogMainImageInput/BlogMainImageInput */ "./resources/js/write/blogMainImageInput/BlogMainImageInput.js");
/* harmony import */ var _write_blogMainImageInput_BlogMainImageInput__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_write_blogMainImageInput_BlogMainImageInput__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uppy_core_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uppy/core/dist/style.css */ "./node_modules/@uppy/core/dist/style.css");
/* harmony import */ var _uppy_core_dist_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uppy_core_dist_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uppy_dashboard_dist_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uppy/dashboard/dist/style.css */ "./node_modules/@uppy/dashboard/dist/style.css");
/* harmony import */ var _uppy_dashboard_dist_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_uppy_dashboard_dist_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/textfield */ "./node_modules/@material/textfield/index.js");
/* harmony import */ var _write_PeriodicBlogContentSaver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./write/PeriodicBlogContentSaver */ "./resources/js/write/PeriodicBlogContentSaver.js");
/* harmony import */ var _write_PeriodicBlogContentSaver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_write_PeriodicBlogContentSaver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _write_savedStatusIndicator_SavedStatusIndicatorImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./write/savedStatusIndicator/SavedStatusIndicatorImpl */ "./resources/js/write/savedStatusIndicator/SavedStatusIndicatorImpl.js");
/* harmony import */ var _write_savedStatusIndicator_SavedStatusIndicatorImpl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_write_savedStatusIndicator_SavedStatusIndicatorImpl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _network_BlogsService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./network/BlogsService */ "./resources/js/network/BlogsService.js");
/* harmony import */ var _network_BlogsService__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_network_BlogsService__WEBPACK_IMPORTED_MODULE_7__);








var blogTagInput = new _material_textfield__WEBPACK_IMPORTED_MODULE_4__["MDCTextField"](document.querySelector('#blog-tag-input-container'));
var currentBlog;

if (blog !== undefined) {
  currentBlog = blog;
} //Blog title


if (currentBlog !== undefined && currentBlog.title !== undefined) {
  document.getElementById('blog-title-input').value = currentBlog.title;
} // Init WYSIWIG editor


var blogContentTextArea = document.getElementById("blog-content-textarea");
Object(_write_editor__WEBPACK_IMPORTED_MODULE_0__["initCkEditor"])(blogContentTextArea).then(function (editor) {
  if (currentBlog !== undefined) {
    editor.setData(currentBlog.content);
  }

  enableNavbarPublishButtonOnInputToEditor(editor);
  activatePeriodicBlogContentSaver(editor);
});

function enableNavbarPublishButtonOnInputToEditor(editor) {
  handlePublishButtonEnabledState(editor);
  editor.model.document.on('change:data', function () {
    handlePublishButtonEnabledState(editor);
  });
}

function handlePublishButtonEnabledState(editor) {
  if (editor.getData() === '') {
    publishBtn.setAttribute('disabled', 'true');
  } else {
    publishBtn.removeAttribute('disabled');
  }
}

var savedStatusIndicator = new _write_savedStatusIndicator_SavedStatusIndicatorImpl__WEBPACK_IMPORTED_MODULE_6___default.a(document.getElementById('save-status'));

function activatePeriodicBlogContentSaver(editor) {
  var blogTitleEl = document.getElementById("blog-title-input");
  var blogsService = new _network_BlogsService__WEBPACK_IMPORTED_MODULE_7___default.a(requestOptions);
  var periodicBlogContentSaver = new _write_PeriodicBlogContentSaver__WEBPACK_IMPORTED_MODULE_5___default.a(editor, blogTitleEl, savedStatusIndicator, blogsService);
  periodicBlogContentSaver.onSaved(function (blog) {
    console.log('saved blog', blog);

    if (currentBlog === undefined) {
      ///////// LOOK INTO THIS!!!!!!
      currentBlog = blog;
    }
  });
  periodicBlogContentSaver.activate();
}

var publishBtn = document.getElementById("publish-btn");
publishBtn.addEventListener('click', function (e) {
  $('#publish-modal').modal('toggle');
});
var blogPreviewImage = new _write_blogMainImageInput_BlogMainImageInput__WEBPACK_IMPORTED_MODULE_1___default.a({
  imagePreviewElement: document.getElementById('blog-preview-img-thumbnail'),
  imageInputButton: document.getElementById('preview-img-input-btn'),
  hiddenImageInputElement: document.getElementById('blog-image-hidden-input'),
  progressBar: document.getElementById('preview-img-progress-bar')
});

if (currentBlog !== undefined && currentBlog.main_image !== undefined) {
  var assetUrl = document.querySelector('meta[name="asset-url"]').getAttribute('content');
  blogPreviewImage.addImage("".concat(assetUrl, "storage/blog-main-images/").concat(currentBlog.main_image), currentBlog.main_image);
}

blogPreviewImage.onImageInputted(function (image, updated) {
  if (updated) {
    currentBlog.main_image = image;
  }

  console.log(currentBlog);
});
var requestOptions = {
  csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
  baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
};
var modalPublishBtn = document.getElementById("modal-publish-btn");
modalPublishBtn.addEventListener('click', function (e) {
  currentBlog.tag = document.getElementById('blog-tag-input').value;
});
var modalSaveAsDraftBtn = document.getElementById("modal-save-draft-btn");
modalSaveAsDraftBtn.addEventListener('click', function (e) {
  currentBlog.tag = document.getElementById('blog-tag-input').value;
  var blogsService = new _network_BlogsService__WEBPACK_IMPORTED_MODULE_7___default.a(requestOptions); // blogsService.update(currentBlog).then(blog => console.log('saved blog (whole)', blog))

  blogsService.updateWithImage(getFormFromBlog(currentBlog)).then(function (blog) {
    return console.log('saved blog (whole)', blog);
  });
});

function getFormFromBlog(blog) {
  var form = new FormData();
  form.append('blog_content', blog.blog_content);
  form.append('blog_title', blog.blog_title);
  form.append('id', blog.id);
  form.append('blog_main_image', blog.main_image, blog.main_image.name);
  console.log(form.get('blog_main_image'));
  form.append('blog_tag', blog.tag);
  return form;
}

/***/ }),

/***/ "./resources/js/write/PeriodicBlogContentSaver.js":
/*!********************************************************!*\
  !*** ./resources/js/write/PeriodicBlogContentSaver.js ***!
  \********************************************************/
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Timeout_1 = __importDefault(__webpack_require__(/*! ./Timeout */ "./resources/js/write/Timeout.js"));

var PeriodicBlogContentSaver =
/** @class */
function () {
  function PeriodicBlogContentSaver(editor, blogTitleEl, savedStatusIndicator, blogsService, blog) {
    this.editor = editor;
    this.blogTitleEl = blogTitleEl;
    this.savedStatusIndicator = savedStatusIndicator;
    this.blogService = blogsService;
    this.blog = blog;
  }

  PeriodicBlogContentSaver.prototype.activate = function () {
    this.saveDataOnBlogContentChange();
  };

  PeriodicBlogContentSaver.prototype.saveDataOnBlogContentChange = function () {
    var _this = this;

    var timeout = new Timeout_1["default"]();
    this.editor.model.document.on('change:data', function () {
      if (!timeout.isSet()) {
        timeout.setTimeOut(3000, function () {
          return _this.saveBlogContent();
        });
      }

      _this.savedStatusIndicator.clearSavedStatus();

      if (_this.editorChangeHandler) _this.editorChangeHandler();
      timeout.resetTimeOut();
    });
  };

  PeriodicBlogContentSaver.prototype.saveBlogContent = function () {
    var _this = this;

    this.beforeSave();

    if (!this.blog) {
      this.saveNew().then(function (blog) {
        return _this.blog = blog;
      });
    } else {
      this.updateExisting();
    }
  };

  PeriodicBlogContentSaver.prototype.beforeSave = function () {
    this.savedStatusIndicator.indicateSaving();
    PeriodicBlogContentSaver.callCallbackIfPresent(this.savingHandler);
  };

  PeriodicBlogContentSaver.prototype.saveNew = function () {
    return __awaiter(this, void 0, void 0, function () {
      var blog, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            blog = {
              blog_title: this.blogTitleEl.value,
              blog_content: this.editor.getData()
            };
            return [4
            /*yield*/
            , this.blogService.save(blog)];

          case 1:
            response = _a.sent();
            blog.id = response.blog_id;
            this.afterSave(blog);
            return [2
            /*return*/
            , blog];
        }
      });
    });
  };

  PeriodicBlogContentSaver.prototype.updateExisting = function () {
    var _this = this;

    this.blog.blog_content = this.editor.getData();
    this.blog.blog_title = this.blogTitleEl.value;
    this.blogService.update(this.blog).then(function (response) {
      _this.afterSave(_this.blog);
    });
  };

  PeriodicBlogContentSaver.prototype.afterSave = function (blog) {
    this.savedStatusIndicator.indicateSaved();
    if (this.onSavedHandler) this.onSavedHandler(blog);
  };

  PeriodicBlogContentSaver.prototype.onEditorChange = function (changeHandler) {
    this.editorChangeHandler = function () {
      return changeHandler();
    };

    return this;
  };

  PeriodicBlogContentSaver.prototype.onSaving = function (savingHandler) {
    this.savingHandler = function () {
      return savingHandler();
    };

    return this;
  };

  PeriodicBlogContentSaver.prototype.onSaved = function (onSavedHandler) {
    this.onSavedHandler = onSavedHandler;
    return this;
  };

  PeriodicBlogContentSaver.callCallbackIfPresent = function (callback) {
    if (callback) callback();
  };

  return PeriodicBlogContentSaver;
}();

exports["default"] = PeriodicBlogContentSaver;

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

/***/ }),

/***/ "./resources/js/write/blogMainImageInput/BlogMainImageInput.js":
/*!*********************************************************************!*\
  !*** ./resources/js/write/blogMainImageInput/BlogMainImageInput.js ***!
  \*********************************************************************/
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

var core_1 = __importDefault(__webpack_require__(/*! @uppy/core */ "./node_modules/@uppy/core/lib/index.js"));

var thumbnail_generator_1 = __importDefault(__webpack_require__(/*! @uppy/thumbnail-generator */ "./node_modules/@uppy/thumbnail-generator/lib/index.js"));

var BlogMainImageInput =
/** @class */
function () {
  function BlogMainImageInput(configOptions) {
    var _this = this;

    this.updated = false;
    this.configOptions = configOptions;
    this.initUppy();
    this.setupImageInputButton();
    this.listenForImageInput(function (file) {
      return _this.handleImageInputted(file);
    });
    this.listenForThumbnailGenerated(function (file, preview) {
      return _this.handleThumbnailGenerated(file, preview);
    });
  }

  BlogMainImageInput.prototype.initUppy = function () {
    this.uppy = core_1["default"]({
      allowMultipleUploads: false,
      autoProceed: false,
      restrictions: {
        maxNumberOfFiles: 1
      }
    }).use(thumbnail_generator_1["default"], {
      id: 'ThumbnailGenerator',
      thumbnailWidth: 200,
      thumbnailHeight: 200
    });
  };

  BlogMainImageInput.prototype.setupImageInputButton = function () {
    var _this = this;

    this.configOptions.imageInputButton.addEventListener('click', function () {
      return _this.openFileExplorer();
    });
  };

  BlogMainImageInput.prototype.openFileExplorer = function () {
    this.configOptions.hiddenImageInputElement.click();
  };

  BlogMainImageInput.prototype.listenForImageInput = function (handleImageInputted) {
    var _this = this;

    this.configOptions.hiddenImageInputElement.addEventListener('change', function () {
      handleImageInputted(_this.configOptions.hiddenImageInputElement.files[0]);
    });
  };

  BlogMainImageInput.prototype.handleImageInputted = function (file) {
    this.updated = true;
    if (this.onImageInputtedHandler) this.onImageInputtedHandler(file, this.updated);
    this.addImageToUppy(file);
    this.showProgressBar();
  };

  BlogMainImageInput.prototype.addImageToUppy = function (file) {
    this.uppy.reset();
    this.uppy.addFile({
      name: file.name,
      type: file.type,
      data: file
    });
  };

  BlogMainImageInput.prototype.showProgressBar = function () {
    this.configOptions.progressBar.classList.remove('d-none');
  };

  BlogMainImageInput.prototype.listenForThumbnailGenerated = function (handleThumbnailGenerated) {
    this.uppy.on('thumbnail:generated', handleThumbnailGenerated);
  };

  BlogMainImageInput.prototype.handleThumbnailGenerated = function (file, preview) {
    console.log('handleThumbnailGenerated');
    this.configOptions.imagePreviewElement.src = preview;
    this.configOptions.imagePreviewElement.classList.remove('d-none');

    if (this.uppy.getFiles().length > 0) {
      this.configOptions.imageInputButton.innerText = "Change";
    }

    this.hideProgressBar();
    this.changeButtonToOutlined();
  };

  BlogMainImageInput.prototype.hideProgressBar = function () {
    this.configOptions.progressBar.classList.add('d-none');
  };

  BlogMainImageInput.prototype.changeButtonToOutlined = function () {
    this.configOptions.imageInputButton.classList.add('mdc-button--outlined');
  };

  BlogMainImageInput.prototype.onImageInputted = function (onImageInputtedHandler) {
    this.onImageInputtedHandler = onImageInputtedHandler;
  };

  BlogMainImageInput.prototype.addImage = function (url, filename) {
    var _this = this;

    this.showProgressBar();
    fetch(url + "/" + filename).then(function (response) {
      return response.blob();
    }) // returns a Blob
    .then(function (blob) {
      _this.uppy.addFile({
        name: filename,
        type: blob.type,
        data: blob
      });

      _this.hideProgressBar();
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  return BlogMainImageInput;
}();

exports["default"] = BlogMainImageInput;

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
/* harmony import */ var _ckeditor_ckeditor5_build_balloon_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-balloon-block */ "./node_modules/@ckeditor/ckeditor5-build-balloon-block/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_balloon_block__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_balloon_block__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // import BalloonBlockEditor from './ckeditor';

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
            return _ckeditor_ckeditor5_build_balloon_block__WEBPACK_IMPORTED_MODULE_1___default.a.create(targetEl, {
              placeholder: 'Write the word...',
              toolbar: ['heading', '|', 'bold', 'italic', 'link', 'blockQuote'],
              ignoreEmptyParagraph: true
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

/***/ }),

/***/ "./resources/js/write/savedStatusIndicator/SavedStatusIndicatorImpl.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/write/savedStatusIndicator/SavedStatusIndicatorImpl.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var SavedStatusIndicatorImpl =
/** @class */
function () {
  function SavedStatusIndicatorImpl(indicatorElement) {
    this.indicatorElement = indicatorElement;
  }

  SavedStatusIndicatorImpl.prototype.clearSavedStatus = function () {
    if (this.indicatorElement.innerText === "Saved") {
      this.indicatorElement.innerText = "";
    }
  };

  SavedStatusIndicatorImpl.prototype.indicateSaved = function () {
    this.indicatorElement.innerText = "Saved";
    console.log('saved');
  };

  SavedStatusIndicatorImpl.prototype.indicateSaving = function () {
    this.indicatorElement.innerText = "Saving...";
    console.log('saving');
  };

  return SavedStatusIndicatorImpl;
}();

exports["default"] = SavedStatusIndicatorImpl;

/***/ })

}]);