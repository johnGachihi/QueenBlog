(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./resources/js/network/FoldImageService.js":
/*!**************************************************!*\
  !*** ./resources/js/network/FoldImageService.js ***!
  \**************************************************/
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

var FoldImageService =
/** @class */
function (_super) {
  __extends(FoldImageService, _super);

  function FoldImageService(requestOptions) {
    return _super.call(this, requestOptions, '/fold_image') || this;
  }

  return FoldImageService;
}(Service_1["default"]);

exports["default"] = FoldImageService;

/***/ }),

/***/ "./resources/js/ui/renee/editables/EditableImageComponent.js":
/*!*******************************************************************!*\
  !*** ./resources/js/ui/renee/editables/EditableImageComponent.js ***!
  \*******************************************************************/
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

var EditableComponent_1 = __importDefault(__webpack_require__(/*! ./EditableComponent */ "./resources/js/ui/renee/editables/EditableComponent.js"));

var ErrorHandling_1 = __importDefault(__webpack_require__(/*! ../../../utils/ErrorHandling */ "./resources/js/utils/ErrorHandling.js"));

var EditableImageComponent =
/** @class */
function (_super) {
  __extends(EditableImageComponent, _super);

  function EditableImageComponent(service) {
    var _this = _super.call(this) || this;

    _this.service = service;
    return _this;
  }

  EditableImageComponent.prototype.enterEditingState = function () {
    _super.prototype.enterEditingState.call(this);

    this.openFileExplorer();
  };

  EditableImageComponent.prototype.openFileExplorer = function () {
    this.hiddenImageInput.el.click();
  };

  EditableImageComponent.prototype.setupListeners = function () {
    var _this = this;

    _super.prototype.setupListeners.call(this);

    this.contentElement.on('keydown', function (e) {
      //@ts-ignore
      if (e.keyCode === 13) {
        _this.saveButton.el.click();

        return false;
      } //@ts-ignore


      if (e.keyCode === 27) {
        _this.cancelButton.el.click();
      }
    });
    this.hiddenImageInput.on('change', function (ev) {
      if (_this.imageSelected()) {
        _this.content = _this.hiddenImageInput.el.files[0];

        _this.previewImage();
      }
    });
  };

  EditableImageComponent.prototype.imageSelected = function () {
    return !!(this.hiddenImageInput.el.files && this.hiddenImageInput.el.files[0]);
  };

  EditableImageComponent.prototype.previewImage = function () {
    var _this = this;

    var reader = new FileReader();

    reader.onload = function (e) {
      return _this.setContent(e.target.result);
    };

    reader.readAsDataURL(this.hiddenImageInput.el.files[0]);
  };

  EditableImageComponent.prototype.getContent = function () {
    return this.contentElement.el.src;
  };

  EditableImageComponent.prototype.saveContent = function () {
    var _this = this;

    this.service.save(this.getContentToSave()).then(function (response) {
      if (response.status != 'ok') {
        ErrorHandling_1["default"]("Unable to save: Error " + response);

        _this.cancelEdit();
      }

      _this.enterInitialState();
    })["catch"](function (err) {
      ErrorHandling_1["default"](err);

      _this.cancelEdit();

      _this.enterInitialState();
    });
  };

  EditableImageComponent.prototype.setContent = function (content) {
    this.contentElement.el.src = content;
  };

  return EditableImageComponent;
}(EditableComponent_1["default"]);

exports["default"] = EditableImageComponent;

/***/ }),

/***/ "./resources/js/ui/renee/fold-image-edit/FoldImageElement.js":
/*!*******************************************************************!*\
  !*** ./resources/js/ui/renee/fold-image-edit/FoldImageElement.js ***!
  \*******************************************************************/
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

var ElementUtils_1 = __webpack_require__(/*! ../../../utils/ElementUtils */ "./resources/js/utils/ElementUtils.js");

var EditableImageComponent_1 = __importDefault(__webpack_require__(/*! ../editables/EditableImageComponent */ "./resources/js/ui/renee/editables/EditableImageComponent.js"));

var FoldImageService_1 = __importDefault(__webpack_require__(/*! ../../../network/FoldImageService */ "./resources/js/network/FoldImageService.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

var FoldImageElement =
/** @class */
function (_super) {
  __extends(FoldImageElement, _super);

  function FoldImageElement(foldImage) {
    var _this = this;

    foldImage.id = 2;
    _this = _super.call(this, new FoldImageService_1["default"](RequestOptions_1.RequestOptionsValues.get())) || this;
    _this.foldImage = foldImage;

    _this.setContent(RequestOptions_1.RequestOptionsValues.get().baseUrl + "/storage/" + foldImage.filename);

    _this.addElementToDom();

    return _this;
  }

  FoldImageElement.prototype.addElementToDom = function () {
    document.getElementById('fold-images').appendChild(this.foldImageDom.getElementsByClassName('fold-image-elem')[0]);
  };

  FoldImageElement.prototype.initElements = function () {
    this.foldImageDom = new DOMParser().parseFromString(getFoldImageHTMLString(), 'text/html');
    this.editButton = new ElementUtils_1.El(this.foldImageDom.querySelector('.edit-btn'));
    this.contentElement = new ElementUtils_1.El(this.foldImageDom.querySelector('.fold-image'));
    this.saveAndCancelContainer = new ElementUtils_1.El(this.foldImageDom.querySelector('.save-and-cancel-container'));
    this.saveButton = new ElementUtils_1.El(this.foldImageDom.querySelector('.save-btn'));
    this.cancelButton = new ElementUtils_1.El(this.foldImageDom.querySelector('.cancel-btn'));
    this.loadIndicator = new ElementUtils_1.El(this.foldImageDom.querySelector('.load-indicator'));
    this.hiddenImageInput = new ElementUtils_1.El(this.foldImageDom.querySelector('.hidden-file-input'));
  };

  FoldImageElement.prototype.getContentToSave = function () {
    var formData = new FormData();
    formData.append('id', "" + this.foldImage.id);
    formData.append('fold_image', this.content, this.content.name);
    return formData;
  };

  return FoldImageElement;
}(EditableImageComponent_1["default"]);

exports["default"] = FoldImageElement;

function getFoldImageHTMLString() {
  return "\n    <div class=\"fold-image-elem my-5 col-12 d-flex justify-content-center\">\n        <div class=\"w-75\">\n            <div class=\"fold-image-container\">\n                <img class=\"fold-image w-100 h-100\" alt=\"Fold image\"\n                     src=\"https://images.pexels.com/photos/3626734/pexels-photo-3626734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\">\n            </div>\n            <div class=\"mt-3 d-flex justify-content-end\">\n                <button class=\"edit-btn mdc-button mdc-button--raised d-none\">\n                    <span class=\"mdc-button__ripple\"></span>\n                    Edit\n                </button>\n                <span class=\"load-indicator mr-4\">Saving...</span>\n                <div class=\"save-and-cancel-container\">\n                    <button class=\"save-btn mdc-button mdc-button--raised \">\n                        <span class=\"mdc-button__ripple\"></span>\n                        Save\n                    </button>\n                    <button class=\"cancel-btn mdc-button mdc-button--raised \">\n                        <span class=\"mdc-button__ripple\"></span>\n                        Cancel\n                    </button>\n                </div>\n            </div>\n            <input class=\"hidden-file-input d-none\" type=\"file\" accept=\"image/*\">\n        </div>\n    </div>\n";
}

/***/ }),

/***/ "./resources/js/ui/renee/fold-image-edit/foldImageEdit.js":
/*!****************************************************************!*\
  !*** ./resources/js/ui/renee/fold-image-edit/foldImageEdit.js ***!
  \****************************************************************/
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

var FoldImageElement_1 = __importDefault(__webpack_require__(/*! ./FoldImageElement */ "./resources/js/ui/renee/fold-image-edit/FoldImageElement.js")); //@ts-ignore


for (var _i = 0, foldImages_1 = foldImages; _i < foldImages_1.length; _i++) {
  var foldImage = foldImages_1[_i];
  new FoldImageElement_1["default"](foldImage);
}

/***/ })

}]);