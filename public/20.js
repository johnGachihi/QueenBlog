(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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

var ElementUtils_1 = __webpack_require__(/*! ../../../utils/ElementUtils */ "./resources/js/utils/ElementUtils.js");

var AboutMeImageComponent_1 = __importDefault(__webpack_require__(/*! ./AboutMeImageComponent */ "./resources/js/ui/renee/edit-aboutme/AboutMeImageComponent.js"));

var AboutMeService_1 = __importDefault(__webpack_require__(/*! ../../../network/AboutMeService */ "./resources/js/network/AboutMeService.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

var AboutMeImage =
/** @class */
function (_super) {
  __extends(AboutMeImage, _super);

  function AboutMeImage() {
    return _super.call(this, new AboutMeService_1["default"](RequestOptions_1.RequestOptionsValues.get())) || this;
  }

  AboutMeImage.getInstance = function () {
    if (this.INSTANCE == undefined) {
      this.INSTANCE = new AboutMeImage();
    }

    return this.INSTANCE;
  };

  AboutMeImage.prototype.initElements = function () {
    this.editButton = new ElementUtils_1.El(document.getElementById('about-me-image-edit'));
    this.contentElement = new ElementUtils_1.El(document.getElementById('about-me-image'));
    this.saveAndCancelContainer = new ElementUtils_1.El(document.getElementById('save-and-cancel-about-me-image-buttons'));
    this.saveButton = new ElementUtils_1.El(document.getElementById('save-about-me-image'));
    this.cancelButton = new ElementUtils_1.El(document.getElementById('cancel-about-me-image'));
    this.loadIndicator = new ElementUtils_1.El(document.getElementById('loading-about-me-image'));
    this.hiddenImageInput = new ElementUtils_1.El(document.getElementById('about-me-image-hidden-input'));
  };

  AboutMeImage.prototype.getContentToSave = function () {
    var formData = new FormData();
    formData.append('about_me_image_file', this.content, this.content.name);
    return formData;
  };

  return AboutMeImage;
}(AboutMeImageComponent_1["default"]);

var aboutMeImage = AboutMeImage.getInstance();

/***/ }),

/***/ "./resources/js/ui/renee/edit-aboutme/AboutMeImageComponent.js":
/*!*********************************************************************!*\
  !*** ./resources/js/ui/renee/edit-aboutme/AboutMeImageComponent.js ***!
  \*********************************************************************/
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

var EditableImageComponent_1 = __importDefault(__webpack_require__(/*! ../editables/EditableImageComponent */ "./resources/js/ui/renee/editables/EditableImageComponent.js"));

var ErrorHandling_1 = __importDefault(__webpack_require__(/*! ../../../utils/ErrorHandling */ "./resources/js/utils/ErrorHandling.js"));

var AboutMeService_1 = __importDefault(__webpack_require__(/*! ../../../network/AboutMeService */ "./resources/js/network/AboutMeService.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");
/*
export default abstract class AboutMeImageComponent extends AboutMeComponents {
    protected hiddenImageInput: El<HTMLInputElement>;
    protected content: File;

    constructor() {
        super();
    }

    protected abstract initElements()

    enterEditingState() {
        super.enterEditingState();
        this.openFileExplorer();
    }

    openFileExplorer() {
        this.hiddenImageInput.el.click();
    }

    protected setupListeners() {
        super.setupListeners();

        this.contentElement.on('keydown', e => {
            //@ts-ignore
            if (e.keyCode === 13) {
                this.saveButton.el.click();
                return false;
            }
            //@ts-ignore
            if (e.keyCode === 27) {
                this.cancelButton.el.click();
            }
        });

        this.hiddenImageInput.on('change', ev => {
            if (this.imageSelected()) {
                this.content = this.hiddenImageInput.el.files[0];
                this.previewImage();
            }
        });
    }

    private imageSelected(): boolean {
        return !!(this.hiddenImageInput.el.files && this.hiddenImageInput.el.files[0]);
    }

    private previewImage() {
        const reader = new FileReader();
        reader.onload = e => this.setContent(e.target.result as string);
        reader.readAsDataURL(this.hiddenImageInput.el.files[0]);
    }

    protected getContent() {
        return (this.contentElement.el as HTMLImageElement).src;
    }

    protected abstract getContentToSave();

    protected setContent(content: string) {
        (this.contentElement.el as HTMLImageElement).src = content;
    }
}
*/


var AboutMeImageComponent =
/** @class */
function (_super) {
  __extends(AboutMeImageComponent, _super);

  function AboutMeImageComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.aboutMeService = new AboutMeService_1["default"](RequestOptions_1.RequestOptionsValues.get());
    return _this;
  }

  AboutMeImageComponent.prototype.saveContent = function () {
    var _this = this;

    this.aboutMeService.save(this.getContentToSave()).then(function (response) {
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

  return AboutMeImageComponent;
}(EditableImageComponent_1["default"]);

exports["default"] = AboutMeImageComponent;

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

/***/ })

}]);