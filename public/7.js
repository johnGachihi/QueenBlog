(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/network/AboutReneeService.js":
/*!***************************************************!*\
  !*** ./resources/js/network/AboutReneeService.js ***!
  \***************************************************/
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

var AboutReneeService =
/** @class */
function () {
  function AboutReneeService(remoteConfig) {
    this.remoteConfig = remoteConfig;
  }

  AboutReneeService.prototype.fetchAboutRenee = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.remoteConfig.fetchAndActivate()];

          case 1:
            _a.sent();

            return [2
            /*return*/
            , this.remoteConfig.getString('about_renee')];
        }
      });
    });
  };

  return AboutReneeService;
}();

exports["default"] = AboutReneeService;

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

/***/ "./resources/js/ui/visitors/Like.js":
/*!******************************************!*\
  !*** ./resources/js/ui/visitors/Like.js ***!
  \******************************************/
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

var BlogsService_1 = __importDefault(__webpack_require__(/*! ../../network/BlogsService */ "./resources/js/network/BlogsService.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

var Like =
/** @class */
function () {
  function Like() {}

  Like.like = function (likeAnchor) {
    var blogId = parseInt(likeAnchor.dataset.blogId);

    if (!localStorage.getItem("blog-liked-" + blogId)) {
      Like.editUI(likeAnchor);
      Like.sendLikeRequest(blogId).then(function (res) {
        console.log(res);
      });
      localStorage.setItem("blog-liked-" + blogId, '1');
    } else {
      console.log('Already liked');
      Like.showAlreadyLikedToast(likeAnchor);
    }
  };

  Like.editUI = function (likeAnchor) {
    var iconEl = likeAnchor.getElementsByClassName('ion-android-favorite-outline')[0]; // TODO: use element instead of class to select

    if (iconEl != undefined) {
      Like.colorFillLikeIcon(iconEl);
    }

    var likesSpan = likeAnchor.querySelector('span');
    Like.incrementLikes(likesSpan);
  };

  Like.colorFillLikeIcon = function (iconEl) {
    iconEl.classList.remove('ion-android-favorite-outline');
    iconEl.classList.add('ion-android-favorite');
  };

  Like.incrementLikes = function (likesSpan) {
    var likes = parseInt(likesSpan.innerText);
    likesSpan.innerText = "" + (likes + 1);
  };

  Like.sendLikeRequest = function (blogId) {
    var blogsService = new BlogsService_1["default"](RequestOptions_1.RequestOptionsValues.get());
    return blogsService.like(blogId);
  };

  Like.showAlreadyLikedToast = function (likeAnchor) {
    $(likeAnchor).popover({
      template: "\n                <div class=\"popover\" role=\"tooltip\">\n                    <h3 class=\"popover-header\"></h3>\n                    <div class=\"popover-body\"></div>\n                </div>\n            ",
      content: 'Already liked',
      delay: 100
    });
    $(likeAnchor).popover('show');
    setTimeout(function () {
      return $(likeAnchor).popover('hide');
    }, 1000);
  };

  return Like;
}();

exports["default"] = Like;

/***/ }),

/***/ "./resources/js/ui/visitors/indexpage/BlogElement.js":
/*!***********************************************************!*\
  !*** ./resources/js/ui/visitors/indexpage/BlogElement.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = __webpack_require__(/*! ../../../utils/constants */ "./resources/js/utils/constants.js");

var BlogElement =
/** @class */
function () {
  function BlogElement(blog) {
    this.blog = blog;
  }

  BlogElement.prototype.getHTML = function () {
    var tempContainer = document.createElement('div');
    tempContainer.innerHTML = ("\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"single-post\">\n                    <div class=\"image-wrapper\">\n                        " + this.getBlogImageElementAsString() + "\n                    </div>\n\n                    <div class=\"icons\">\n                        <div class=\"left-area\">\n                            <!--TODO: Add tag links href-->\n                            <a class=\"btn category-btn\" href=\"#\"><b>" + this.getTagToShow() + "</b></a>\n                        </div>\n                        <ul class=\"right-area social-icons\">\n                            <li><a href=\"#\"><i class=\"ion-android-share-alt\"></i>Share</a></li>\n                            <li><a href=\"#\"><i class=\"ion-android-favorite-outline\"></i>" + this.blog.likes + "</a></li>\n                            <li><a href=\"#\"><i class=\"ion-ios-eye\"></i>" + this.blog.views + "</a></li>\n                        </ul>\n                    </div>\n                    <h6 class=\"date\"><em>" + this.blog.updated_at + "</em></h6>\n                    <h3 class=\"title\">\n                        <a href=\"#\"><b class=\"title-text light-color\">" + this.blog.title + "</b></a>\n                    </h3>\n                    <div style=\"height: 6.8em; overflow: hidden\">\n                        <p>" + this.blog.content + "</p>\n                    </div>\n                    <!--TODO: Add link href-->\n                    <a class=\"btn read-more-btn\" href=\"#\"><b>READ MORE</b></a>\n                </div>\n            </div>\n        ").trim();
    return tempContainer.firstChild;
  };

  BlogElement.prototype.getBlogImageElementAsString = function () {
    if (this.blog.main_image_filename == undefined) {
      return null;
    }

    return "\n            <img src=\"" + constants_1.appUrl + "/" + constants_1.blogImagesRelativeUrl + "/" + this.blog.main_image_filename + "\"\n                alt=\"" + this.blog.title + "\">\n        ";
  };

  BlogElement.prototype.getTagToShow = function () {
    var tag = this.blog.tag;
    return tag.charAt(0).toUpperCase() + tag.substring(1);
  };

  return BlogElement;
}();

exports["default"] = BlogElement;

/***/ }),

/***/ "./resources/js/ui/visitors/indexpage/IndexPage.js":
/*!*********************************************************!*\
  !*** ./resources/js/ui/visitors/indexpage/IndexPage.js ***!
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

var AboutReneeService_1 = __importDefault(__webpack_require__(/*! ../../../network/AboutReneeService */ "./resources/js/network/AboutReneeService.js"));

var BlogsService_1 = __importDefault(__webpack_require__(/*! ../../../network/BlogsService */ "./resources/js/network/BlogsService.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

var BlogElement_1 = __importDefault(__webpack_require__(/*! ./BlogElement */ "./resources/js/ui/visitors/indexpage/BlogElement.js"));

var Like_1 = __importDefault(__webpack_require__(/*! ../Like */ "./resources/js/ui/visitors/Like.js"));

var IndexPage =
/** @class */
function () {
  function IndexPage(remoteConfig) {
    this.paginatedBlogsPageNumber = 1;
    this.init(remoteConfig);
  }

  IndexPage.prototype.init = function (remoteConfig) {
    this.initElements();
    this.initAboutReneeService(remoteConfig);
    this.initBlogsService();
    this.setupAboutReneePar();
    this.setupLoadMoreButton();
    this.setupLikeAnchors();
    this.colorFillLikedIconForLikedBlogs();
  };

  IndexPage.prototype.initElements = function () {
    this.aboutReneePar = document.getElementById('about-renee');
  };

  IndexPage.prototype.initAboutReneeService = function (remoteConfig) {
    this.aboutReneeService = new AboutReneeService_1["default"](remoteConfig);
  };

  IndexPage.prototype.initBlogsService = function () {
    this.blogsService = new BlogsService_1["default"](RequestOptions_1.RequestOptionsValues.get());
  };

  IndexPage.prototype.setupAboutReneePar = function () {
    var _this = this;

    this.aboutReneeService.fetchAboutRenee().then(function (res) {
      _this.aboutReneePar.innerText = res;
    })["catch"](console.log);
  };

  IndexPage.prototype.setupLoadMoreButton = function () {
    var _this = this;

    var loadMoreButton = document.getElementById('load-more-btn');
    loadMoreButton.addEventListener('click', function (e) {
      e.preventDefault();

      _this.showLoader();

      _this.blogsService.fetchPaginatedBlogs(++_this.paginatedBlogsPageNumber).then(function (page) {
        _this.hideLoader();

        IndexPage.appendBlogs(page.data);

        _this.updatePaginatedBlogsPageNumber(page.current_page);

        _this.colorFillLikedIconForLikedBlogs();
      });
    });
  };

  IndexPage.appendBlogs = function (blogs) {
    var blogsContainer = document.getElementById('rest-of-blogs');

    for (var _i = 0, blogs_1 = blogs; _i < blogs_1.length; _i++) {
      var blog = blogs_1[_i];
      var blogElement = new BlogElement_1["default"](blog);
      blogsContainer.appendChild(blogElement.getHTML());
    }
  };

  IndexPage.prototype.updatePaginatedBlogsPageNumber = function (currentPageNumber) {
    this.paginatedBlogsPageNumber = currentPageNumber;
  }; // TODO: Add implementation


  IndexPage.prototype.showLoader = function () {
    console.log('Loading...');
  };

  IndexPage.prototype.hideLoader = function () {
    console.log('Loaded');
  };

  IndexPage.prototype.setupLikeAnchors = function () {
    var likeAnchors = document.getElementsByClassName('like-blog');

    for (var i = 0; i < likeAnchors.length; i++) {
      likeAnchors[i].addEventListener('click', function (e) {
        e.preventDefault();
        Like_1["default"].like(e.currentTarget);
      });
    }
  };

  IndexPage.prototype.colorFillLikedIconForLikedBlogs = function () {
    var likeAnchors = document.getElementsByClassName('like-blog');

    for (var i = 0; i < likeAnchors.length; i++) {
      var likeAnchor = likeAnchors[i];

      if (IndexPage.isAnchorForLikedBlog(likeAnchor)) {
        var iconEl = likeAnchor.querySelector('i');
        IndexPage.colorFillLikeIcon(iconEl);
      }
    }
  };

  IndexPage.isAnchorForLikedBlog = function (likeAnchor) {
    var blogId = likeAnchor.dataset.blogId;
    return localStorage.getItem("blog-liked-" + blogId) != undefined;
  };

  IndexPage.colorFillLikeIcon = function (iconEl) {
    iconEl.classList.remove('ion-android-favorite-outline');
    iconEl.classList.add('ion-android-favorite');
  };

  return IndexPage;
}();

exports["default"] = IndexPage;

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

/***/ })

}]);