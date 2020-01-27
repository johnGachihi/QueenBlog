(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

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