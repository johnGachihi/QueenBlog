(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/blogs/blogs.js":
/*!*************************************!*\
  !*** ./resources/js/blogs/blogs.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/dialog/component */ "./node_modules/@material/dialog/component.js");
/* harmony import */ var _network_BlogsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../network/BlogsService */ "./resources/js/network/BlogsService.js");
/* harmony import */ var _network_BlogsService__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_network_BlogsService__WEBPACK_IMPORTED_MODULE_1__);


var appUrl = document.querySelector('meta[name="base-url"]').getAttribute('content');
var draftBlogsTabHeader = document.getElementById('draft-blogs-tab-header');
var publishedBlogsTabHeader = document.getElementById('published-blogs-tab-header');
var currentTab;
$(function () {
  draftBlogsTabHeader.addEventListener('click', function (e) {
    if (currentTab !== "drafts") {
      publishedBlogsTabHeader.classList.remove('active');
      draftBlogsTabHeader.classList.add('active');
      currentTab = 'drafts';
      showDraftBlogs();
      setupBlogEntryDeleteMenuItem();
    }
  });
  publishedBlogsTabHeader.addEventListener('click', function (e) {
    if (currentTab !== "published") {
      draftBlogsTabHeader.classList.remove('active');
      publishedBlogsTabHeader.classList.add('active');
      currentTab = 'published';
      showPublishedBlogs();
      setupBlogEntryDeleteMenuItem();
    }
  });
  var blogsContainer = document.getElementById('blogs-container');

  function showDraftBlogs() {
    emptyBlogsContainer();

    if (draftBlogs.length < 1) {
      blogsContainer.innerText = "No draft blogs.";
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = draftBlogs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var blog = _step.value;
        blogsContainer.appendChild(blogHtml(blog));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function showPublishedBlogs() {
    emptyBlogsContainer();

    if (publishedBlogs.length < 1) {
      blogsContainer.innerText = "No published blogs.";
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = publishedBlogs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var blog = _step2.value;
        blogsContainer.appendChild(blogHtml(blog));
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function emptyBlogsContainer() {
    blogsContainer.innerHTML = '';
  }

  function blogHtml(blog) {
    var isDraft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var div = document.createElement('div');
    var blogContentToDisplay = getBlogContentToDisplay(blog['content']);
    var blogImageToShow = getBlogImageToShow(blog['main_image_filename']);
    div.innerHTML = "\n            <div class=\"d-flex blog-entry col-12\">\n                <a href=\"".concat(appUrl, "/only/juli/blog/").concat(blog.id, "\" class=\"d-flex flex-grow-1\" style=\"text-decoration: none; color: inherit\">\n                    <div>\n                        <img class=\"blog-entry-img\" src=\"").concat(blogImageToShow, "\" width=\"100px\"/>\n                    </div>\n                    <div class=\"flex-grow-1 d-flex flex-column ml-4\">\n                        <span class=\"h3 blog-entry-title\" style=\"display: block; text-overflow: ellipsis; word-wrap: break-word; overflow: hidden; max-height: 60px; line-height: 30px;\">").concat(getBlogTitleToShow(blog['title']), "</span>\n                        <span style=\"text-overflow: ellipsis; overflow: hidden;\">").concat(blogContentToDisplay, "</span>\n                    </div>\n                </a>\n                <div class=\"dropdown show\">\n                    <a class=\"\" href=\"#\" role=\"button\" id=\"blog-entry-menu-link\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">arrow_drop_down</i>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"blog-entry-menu-link\">\n                        <a class=\"dropdown-item\" href=\"").concat(appUrl, "/only/juli/blog/").concat(blog.id, "\">Edit</a>\n                        <a class=\"dropdown-item delete-blog-entry-menu-item\" data-blog-id=\"").concat(blog.id, "\" href=\"#\">Delete</a>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                      </div>\n                </div>\n            </div>\n    ").trim();
    return div.firstChild;
  }

  function getBlogContentToDisplay(blogContent) {
    var div = document.createElement('div');
    div.innerHTML = blogContent.trim();
    var firstParagraphEl = getFirstParagraphElement(div.childNodes);

    if (firstParagraphEl !== undefined) {
      return getFittingBlogContentSize(firstParagraphEl.innerText);
    } else {
      return 'No content';
    }
  }

  function getFirstParagraphElement() {
    var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NodeList;
    var nodeListArray = Array.from(elements);
    var firstParagraphEl;

    for (var _i = 0, _nodeListArray = nodeListArray; _i < _nodeListArray.length; _i++) {
      var node = _nodeListArray[_i];

      if (node instanceof HTMLParagraphElement) {
        firstParagraphEl = node;
        break;
      }
    }

    return firstParagraphEl;
  }

  function getFittingBlogContentSize(blogContentString) {
    var fittingBlogContentText;

    if (blogContentString.length > 100) {
      fittingBlogContentText = blogContentString.slice(0, 100).trim();
      fittingBlogContentText += '...';
    } else {
      fittingBlogContentText = blogContentString;
    }

    return fittingBlogContentText;
  }

  function getBlogImageToShow(blogImageName) {
    var assetUrl = document.querySelector('meta[name="asset-url"]').getAttribute('content');

    if (blogImageName == null) {
      console.log('blogImage', blogImageName);
      return "".concat(assetUrl, "/storage/blog-image-placeholder.png");
    } else {
      return "".concat(assetUrl, "storage/blog-main-images/").concat(blogImageName);
    }
  }

  function getBlogTitleToShow(blogTitle) {
    if (blogTitle != null) {
      return blogTitle;
    } else {
      return '';
    }
  }

  console.log('WINDOW READY');
  var deleteConfirmationDialog = new _material_dialog_component__WEBPACK_IMPORTED_MODULE_0__["MDCDialog"](document.getElementById('delete-confirmation-dialog'));
  var requestOptions = {
    csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
  };
  draftBlogsTabHeader.click();
  setupBlogEntryDeleteMenuItem();

  function setupBlogEntryDeleteMenuItem() {
    $('.delete-blog-entry-menu-item').off('click');
    $('.delete-blog-entry-menu-item').on('click', function (event) {
      event.preventDefault();
      deleteConfirmationDialog.open();
      var blogId = event.target.dataset.blogId;
      setupConfirmationDialogDeleteButtonListener(blogId);
      console.log(blogId);
    });
  }

  function setupConfirmationDialogDeleteButtonListener(blogId) {
    $('#delete-confirmation-dialog-delete-btn').on('click', function (event) {
      console.log('Confirmation modal delete clicked');
      var blogsService = new _network_BlogsService__WEBPACK_IMPORTED_MODULE_1___default.a(requestOptions);
      blogsService["delete"](blogId).then(function (res) {
        console.log("".concat(blogId, " deleted"));
        destroyConfirmationDialogDeleteButtonListener();
        window.location.reload();
      });
    });
  }

  function destroyConfirmationDialogDeleteButtonListener() {
    $('.delete-confirmation-dialog-delete-btn').off('click');
  }
});

/***/ })

}]);