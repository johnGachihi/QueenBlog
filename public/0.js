(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/models/Blog.js":
/*!*************************************!*\
  !*** ./resources/js/models/Blog.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var BlogStatus;

(function (BlogStatus) {
  BlogStatus["DRAFT"] = "draft";
  BlogStatus["PUBLISHED"] = "published";
})(BlogStatus = exports.BlogStatus || (exports.BlogStatus = {}));

/***/ }),

/***/ "./resources/js/utils/constants.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/constants.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appUrl = document.querySelector('meta[name="base-url"]').getAttribute('content');
exports.blogsPageRelativeURL = 'only/juli/blogs';
exports.blogImagesRelativeUrl = 'storage/blog-main-images';
exports.blogPostRelativeUrl = 'post';

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
              title: this.blogTitleEl.value,
              content: this.editor.getData()
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

    this.blog.content = this.editor.getData();
    this.blog.title = this.blogTitleEl.value;
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

/***/ "./resources/js/write/Write.js":
/*!*************************************!*\
  !*** ./resources/js/write/Write.js ***!
  \*************************************/
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

var component_1 = __webpack_require__(/*! @material/textfield/component */ "./node_modules/@material/textfield/component.js");

var editor_1 = __webpack_require__(/*! ./editor */ "./resources/js/write/editor.js");

var BlogsService_1 = __importDefault(__webpack_require__(/*! ../network/BlogsService */ "./resources/js/network/BlogsService.js"));

var PeriodicBlogContentSaver_1 = __importDefault(__webpack_require__(/*! ./PeriodicBlogContentSaver */ "./resources/js/write/PeriodicBlogContentSaver.js"));

var SavedStatusIndicatorImpl_1 = __importDefault(__webpack_require__(/*! ./savedStatusIndicator/SavedStatusIndicatorImpl */ "./resources/js/write/savedStatusIndicator/SavedStatusIndicatorImpl.js"));

var Blog_1 = __webpack_require__(/*! ../models/Blog */ "./resources/js/models/Blog.js");

var BlogMainImageInput_1 = __importDefault(__webpack_require__(/*! ./blogMainImageInput/BlogMainImageInput */ "./resources/js/write/blogMainImageInput/BlogMainImageInput.js"));

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

var constants_1 = __webpack_require__(/*! ../utils/constants */ "./resources/js/utils/constants.js");

var Write =
/** @class */
function () {
  function Write(blog) {
    this.blog = blog;
    this.init();
  }

  Write.prototype.init = function () {
    this.initializeElements();
    this.initializeRequestOptions();
    this.initializeBlogsService();
    this.setupEditor(this.blog);
    this.setupBlogTitleEl();
    this.setupBlogPreviewImageInput();
    this.setupPublishButton();
    this.setupBlogTagInputEl();
    this.setupModalPublishButton();
    this.setupSaveAsDraftButton();
  };

  Write.prototype.initializeElements = function () {
    this.blogTitleInput = document.getElementById('blog-title-input');
    this.blogTagInput = new component_1.MDCTextField(document.querySelector('#blog-tag-input-container'));
    this.publishBtn = document.getElementById("publish-btn");
    this.blogContentTextArea = document.getElementById("blog-content-textarea");
    this.modalPublishBtn = document.getElementById("modal-publish-btn");
    this.modalSaveAsDraftBtn = document.getElementById("modal-save-draft-btn");
    this.publishModalProgessbar = document.getElementById('publish-modal-progressbar');
  };

  Write.prototype.initializeRequestOptions = function () {
    this.requestOptions = {
      csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
    };
  };

  Write.prototype.initializeBlogsService = function () {
    this.blogsService = new BlogsService_1["default"](this.requestOptions);
  };

  Write.prototype.setupBlogTitleEl = function () {
    console.log('setupBlogTitleEl');

    if (this.blog != undefined && this.blog.title != undefined) {
      this.blogTitleInput.value = this.blog.title;
    }
  };

  Write.prototype.setupEditor = function (blog) {
    var _this = this;

    console.log('setupEditor');
    editor_1.initCkEditor(this.blogContentTextArea).then(function (editor) {
      if (blog != undefined) {
        editor.setData(blog.content);
      }

      _this.enableNavbarPublishButtonOnInputToEditor(editor);

      _this.setupPeriodicBlogContentSaver(editor);
    });
  };

  Write.prototype.enableNavbarPublishButtonOnInputToEditor = function (editor) {
    var _this = this;

    this.handlePublishButtonEnabledState(editor);
    editor.model.document.on('change:data', function () {
      _this.handlePublishButtonEnabledState(editor);
    });
  };

  Write.prototype.handlePublishButtonEnabledState = function (editor) {
    if (editor.getData() === '') {
      this.publishBtn.setAttribute('disabled', 'true');
    } else {
      this.publishBtn.removeAttribute('disabled');
    }
  };

  Write.prototype.setupPeriodicBlogContentSaver = function (editor) {
    var _this = this;

    console.log(this.blogsService);
    var blogStatusIndicatorEl = document.getElementById('save-status');
    var savedStatusIndicator = new SavedStatusIndicatorImpl_1["default"](blogStatusIndicatorEl);
    var periodicBlogContentSaver = new PeriodicBlogContentSaver_1["default"](editor, this.blogTitleInput, savedStatusIndicator, this.blogsService, this.blog);
    periodicBlogContentSaver.onSaved(function (blog) {
      return _this.handleOnPeriodicSave(blog);
    });
    periodicBlogContentSaver.activate();
  };

  Write.prototype.handleOnPeriodicSave = function (blog) {
    console.log('saved blog', blog);

    if (this.blog == undefined) {
      this.blog = blog;
    } else {
      this.blog.title = blog.title;
      this.blog.content = blog.content;
    }
  };

  Write.prototype.setupBlogPreviewImageInput = function () {
    var _this = this;

    var blogPreviewImage = new BlogMainImageInput_1["default"]({
      imagePreviewElement: document.getElementById('blog-preview-img-thumbnail'),
      imageInputButton: document.getElementById('preview-img-input-btn'),
      hiddenImageInputElement: document.getElementById('blog-image-hidden-input'),
      progressBar: document.getElementById('preview-img-progress-bar')
    });

    if (this.blog !== undefined && this.blog.main_image_filename !== undefined) {
      var assetUrl = document.querySelector('meta[name="asset-url"]').getAttribute('content');
      blogPreviewImage.addImage(assetUrl + "storage/blog-main-images/" + this.blog.main_image_filename, this.blog.main_image_filename);
      console.log('Uppy', blogPreviewImage.uppy);
    }

    blogPreviewImage.onImageInputted(function (image, updated) {
      if (updated && _this.blog != undefined) {
        _this.blog.main_image = image;
      }

      console.log(_this.blog);
    });
  };

  Write.prototype.setupPublishButton = function () {
    this.publishBtn.addEventListener('click', function (e) {
      $('#publish-modal').modal('toggle');
    });
  };

  Write.prototype.setupBlogTagInputEl = function () {
    if (this.blog != undefined && this.blog.tag != undefined) {
      this.blogTagInput.value = this.blog.tag;
    }
  };

  Write.prototype.setupModalPublishButton = function () {
    var _this = this;

    var modalPublishButton = document.getElementById("modal-publish-btn");
    modalPublishButton.addEventListener('click', function (e) {
      _this.saveBlog(Blog_1.BlogStatus.PUBLISHED);
    });
  };

  Write.prototype.setupSaveAsDraftButton = function () {
    var _this = this;

    var modalSaveAsDraftBtn = document.getElementById("modal-save-draft-btn");
    modalSaveAsDraftBtn.addEventListener('click', function (e) {
      _this.saveBlog(Blog_1.BlogStatus.DRAFT);
    });
  };

  Write.prototype.saveBlog = function (status) {
    var _this = this;

    this.showPublishModalProgressbar();
    this.blogsService.updateWithImage(this.getFormFromBlog(this.blog, status)).then(function (blog) {
      console.log('saved blog (whole)', blog);

      _this.hidePublishModalProgressbar();

      window.location.replace(_this.requestOptions.baseUrl + "/" + constants_1.blogsPageRelativeURL);
    });
  };

  Write.prototype.showPublishModalProgressbar = function () {
    this.publishModalProgessbar.classList.remove('d-none');
  };

  Write.prototype.hidePublishModalProgressbar = function () {
    this.publishModalProgessbar.classList.add('d-none');
  }; // TODO Refactor code and remove this method


  Write.prototype.getFormFromBlog = function (blog, blogStatus) {
    var form = new FormData();
    form.append('id', blog.id);
    form.append('title', this.blogTitleInput.value);
    form.append('content', blog.content);

    if (blog.main_image !== undefined) {
      form.append('main_image', blog.main_image, blog.main_image.name);
    }

    form.append('tag', this.blogTagInput.value);
    form.append('status', blogStatus);
    return form;
  };

  return Write;
}();

exports["default"] = Write;

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
    fetch(url).then(function (response) {
      return response.blob();
    }) // returns a Blob
    .then(function (blob) {
      _this.uppy.reset();

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