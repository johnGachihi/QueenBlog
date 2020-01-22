(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/blogs/blogs.js":
/*!*************************************!*\
  !*** ./resources/js/blogs/blogs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var appUrl = document.querySelector('meta[name="base-url"]').getAttribute('content');
var draftBlogsTabHeader = document.getElementById('draft-blogs-tab-header');
var publishedBlogsTabHeader = document.getElementById('published-blogs-tab-header');
var currentTab;
draftBlogsTabHeader.addEventListener('click', function (e) {
  if (currentTab !== "drafts") {
    publishedBlogsTabHeader.classList.remove('active');
    draftBlogsTabHeader.classList.add('active');
    currentTab = 'drafts';
    showDraftBlogs();
  }
});
publishedBlogsTabHeader.addEventListener('click', function (e) {
  if (currentTab !== "published") {
    draftBlogsTabHeader.classList.remove('active');
    publishedBlogsTabHeader.classList.add('active');
    currentTab = 'published';
    showPublishedBlogs();
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
  blogsContainer.innerText = '';
}

function blogHtml(blog) {
  var div = document.createElement('div');
  var blogContentToDisplay = getBlogContentToDisplay(blog['content']);
  var blogImageToShow = getBlogImageToShow(blog['main_image_filename']);
  div.innerHTML = "\n        <a href=\"".concat(appUrl, "/only/juli/blog/").concat(blog.id, "\" style=\"text-decoration: none; color: inherit\">\n            <div class=\"d-flex blog-entry\">\n                <div>\n                    <img class=\"blog-entry-img\" src=\"").concat(blogImageToShow, "\" width=\"100px\"/>\n                </div>\n                <div class=\"flex-grow-1 d-flex flex-column ml-4\">\n                    <span class=\"h3 blog-entry-title\" style=\"display: block; text-overflow: ellipsis; word-wrap: break-word; overflow: hidden; max-height: 60px; line-height: 30px;\">").concat(getBlogTitleToShow(blog['title']), "</span>\n                    <span style=\"text-overflow: ellipsis; overflow: hidden; white-space: nowrap\">").concat(blogContentToDisplay, "</span>\n                </div>\n            </div>\n        </a>\n\n    ").trim();
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

$(function () {
  draftBlogsTabHeader.click();
});

/***/ })

}]);