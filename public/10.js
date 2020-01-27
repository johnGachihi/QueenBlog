(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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
    tempContainer.innerHTML = ("\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"single-post\">\n                    <div class=\"image-wrapper\">\n                        " + this.getBlogImageElementAsString() + "\n                    </div>\n\n                    <div class=\"icons d-flex justify-content-between\">\n                        <div class=\"left-area\">\n                            <!--TODO: Add tag links href-->\n                            <a class=\"btn category-btn\" href=\"#\"><b>" + this.getTagToShow() + "</b></a>\n                        </div>\n                        <ul class=\"right-area social-icons\">\n                            <li><a class=\"share-blog\" href=\"#\"><i class=\"ion-android-share-alt\"></i>Share</a></li>\n                            <li>\n                                <a href=\"#\" class=\"like-blog\" data-blog-id=\"" + this.blog.id + "\">\n                                    <i class=\"ion-android-favorite-outline\"></i>\n                                    <span>" + this.blog.likes + "</span>\n                                </a>\n                            </li>\n                            <li style=\"padding-left: 30px\"><i class=\"ion-ios-eye\"></i>" + this.blog.views + "</li>\n                        </ul>\n                    </div>\n                    <h6 class=\"date\"><em>" + this.blog.updated_at + "</em></h6>\n                    <h3 class=\"title\">\n                        <a href=\"#\"><b class=\"title-text light-color\">" + this.blog.title + "</b></a>\n                    </h3>\n                    <div style=\"height: 6.8em; overflow: hidden\">\n                        <p>" + this.blog.content + "</p>\n                    </div>\n                    <!--TODO: Add link href-->\n                    <a class=\"btn read-more-btn\" href=\"#\"><b>READ MORE</b></a>\n                </div>\n            </div>\n        ").trim();
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

var BlogsService_1 = __importDefault(__webpack_require__(/*! ../../../network/BlogsService */ "./resources/js/network/BlogsService.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

var BlogElement_1 = __importDefault(__webpack_require__(/*! ./BlogElement */ "./resources/js/ui/visitors/indexpage/BlogElement.js"));

var LikeView_1 = __webpack_require__(/*! ../like/LikeView */ "./resources/js/ui/visitors/like/LikeView.js");

var share_1 = __webpack_require__(/*! ../share/share */ "./resources/js/ui/visitors/share/share.js");

var IndexPage =
/** @class */
function () {
  function IndexPage() {
    this.paginatedBlogsPageNumber = 1;
    this.init();
  }

  IndexPage.prototype.init = function () {
    this.initBlogsService();
    this.setupLoadMoreButton();
  };

  IndexPage.prototype.initBlogsService = function () {
    this.blogsService = new BlogsService_1["default"](RequestOptions_1.RequestOptionsValues.get());
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

        LikeView_1.colorFillLikedIconForLikedBlogs();
        share_1.setupShareAnchors();
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

  return IndexPage;
}();

exports["default"] = IndexPage;

/***/ }),

/***/ "./resources/js/ui/visitors/like/Like.js":
/*!***********************************************!*\
  !*** ./resources/js/ui/visitors/like/Like.js ***!
  \***********************************************/
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

var BlogsService_1 = __importDefault(__webpack_require__(/*! ../../../network/BlogsService */ "./resources/js/network/BlogsService.js"));

var RequestOptions_1 = __webpack_require__(/*! ../../../network/RequestOptions */ "./resources/js/network/RequestOptions.js");

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

/***/ "./resources/js/ui/visitors/like/LikeView.js":
/*!***************************************************!*\
  !*** ./resources/js/ui/visitors/like/LikeView.js ***!
  \***************************************************/
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

var Like_1 = __importDefault(__webpack_require__(/*! ./Like */ "./resources/js/ui/visitors/like/Like.js"));

function setupLikeAnchors() {
  $(document).on('click', '.like-blog', function (e) {
    console.log(e.currentTarget);
    e.preventDefault();
    Like_1["default"].like(e.currentTarget);
  });
}

exports.setupLikeAnchors = setupLikeAnchors;

function colorFillLikedIconForLikedBlogs() {
  var likeAnchors = document.getElementsByClassName('like-blog');

  for (var i = 0; i < likeAnchors.length; i++) {
    var likeAnchor = likeAnchors[i];

    if (isAnchorForLikedBlog(likeAnchor)) {
      var iconEl = likeAnchor.querySelector('i');
      colorFillLikeIcon(iconEl);
    }
  }
}

exports.colorFillLikedIconForLikedBlogs = colorFillLikedIconForLikedBlogs;

function isAnchorForLikedBlog(likeAnchor) {
  var blogId = likeAnchor.dataset.blogId;
  return localStorage.getItem("blog-liked-" + blogId) != undefined;
}

function colorFillLikeIcon(iconEl) {
  iconEl.classList.remove('ion-android-favorite-outline');
  iconEl.classList.add('ion-android-favorite');
}

/***/ })

}]);