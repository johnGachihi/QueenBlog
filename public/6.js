(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/goodshare.js/src/providers/Facebook.js":
/*!*************************************************************!*\
  !*** ./node_modules/goodshare.js/src/providers/Facebook.js ***!
  \*************************************************************/
/*! exports provided: Facebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony import */ var _utils_ProviderMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ProviderMixin */ "./node_modules/goodshare.js/src/utils/ProviderMixin.js");
/**
 *  Vic Shóstak <truewebartisans@gmail.com>
 *  Copyright (c) 2019 True web artisans https://1wa.co
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  goodshare.js
 *
 *  Facebook (https://facebook.com) provider.
 */



class Facebook extends _utils_ProviderMixin__WEBPACK_IMPORTED_MODULE_0__["ProviderMixin"] {
  constructor(url = document.location.href, title = document.title) {
    super();
    this.url = encodeURIComponent(url);
    this.title = encodeURIComponent(title);
    this.createEvents = this.createEvents.bind(this);
  }

  getPreparedData(item) {
    const url = item.dataset.url
      ? encodeURIComponent(item.dataset.url)
      : this.url;
    const title = item.dataset.title
      ? encodeURIComponent(item.dataset.title)
      : this.title;
    const share_url = `https://facebook.com/sharer/sharer.php?u=${url}&t=${title}`;

    return {
      callback: this.callback,
      share_url: share_url,
      windowTitle: "Share this",
      windowWidth: 640,
      windowHeight: 480
    };
  }

  // Share event
  shareWindow() {
    const share_elements = document.querySelectorAll(
      '[data-social="facebook"]'
    );

    return this.createEvents(share_elements);
  }

  // Show counter event
  getCounter() {
    const script = document.createElement("script");
    const callback = ("goodshare_" + Math.random()).replace(".", "");
    const count_elements = document.querySelectorAll(
      '[data-counter="facebook"]'
    );
    const count_url = `https://graph.facebook.com/?id=${
      this.url
    }&callback=${callback}`;

    if (count_elements.length > 0) {
      window[callback] = counter => {
        [...count_elements].forEach(item => {
          item.innerHTML = counter.share ? counter.share.share_count : 0;
        });

        if (script.parentNode === null) {
          return;
        }

        script.parentNode.removeChild(script);
      };

      script.src = count_url;
      document.body.appendChild(script);
    }
  }
}


/***/ }),

/***/ "./node_modules/goodshare.js/src/providers/Twitter.js":
/*!************************************************************!*\
  !*** ./node_modules/goodshare.js/src/providers/Twitter.js ***!
  \************************************************************/
/*! exports provided: Twitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony import */ var _utils_ProviderMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ProviderMixin */ "./node_modules/goodshare.js/src/utils/ProviderMixin.js");
/**
 *  Vic Shóstak <truewebartisans@gmail.com>
 *  Copyright (c) 2019 True web artisans https://1wa.co
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  goodshare.js
 *
 *  Twitter (https://twitter.com) provider.
 */



class Twitter extends _utils_ProviderMixin__WEBPACK_IMPORTED_MODULE_0__["ProviderMixin"] {
  constructor(url = document.location.href, title = document.title) {
    super();
    this.url = encodeURIComponent(url);
    this.title = encodeURIComponent(title);
    this.createEvents = this.createEvents.bind(this);
  }

  getPreparedData(item) {
    const url = item.dataset.url
      ? encodeURIComponent(item.dataset.url)
      : this.url;
    const title = item.dataset.title
      ? encodeURIComponent(item.dataset.title)
      : this.title;
    const share_url = `https://twitter.com/share?url=${url}&text=${title}`;

    return {
      callback: this.callback,
      share_url: share_url,
      windowTitle: "Share this",
      windowWidth: 640,
      windowHeight: 480
    };
  }

  // Share event
  shareWindow() {
    const share_elements = document.querySelectorAll('[data-social="twitter"]');

    return this.createEvents(share_elements);
  }
}


/***/ }),

/***/ "./node_modules/goodshare.js/src/providers/WhatsApp.js":
/*!*************************************************************!*\
  !*** ./node_modules/goodshare.js/src/providers/WhatsApp.js ***!
  \*************************************************************/
/*! exports provided: WhatsApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsApp", function() { return WhatsApp; });
/* harmony import */ var _utils_ProviderMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ProviderMixin */ "./node_modules/goodshare.js/src/utils/ProviderMixin.js");
/**
 *  Vic Shóstak <truewebartisans@gmail.com>
 *  Copyright (c) 2019 True web artisans https://1wa.co
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  goodshare.js
 *
 *  WhatsApp (https://whatsapp.com) provider.
 */



class WhatsApp extends _utils_ProviderMixin__WEBPACK_IMPORTED_MODULE_0__["ProviderMixin"] {
  constructor(url = document.location.href) {
    super();
    this.url = encodeURIComponent(url);
    this.createEvents = this.createEvents.bind(this);
  }

  getPreparedData(item) {
    const url = item.dataset.url
      ? encodeURIComponent(item.dataset.url)
      : this.url;
    const share_url = `https://wa.me/?text=${url}`;

    return {
      callback: this.callback,
      share_url: share_url,
      windowTitle: "Share this",
      windowWidth: 640,
      windowHeight: 480
    };
  }

  // Share event
  shareWindow() {
    const share_elements = document.querySelectorAll(
      '[data-social="whatsapp"]'
    );

    return this.createEvents(share_elements);
  }
}


/***/ }),

/***/ "./node_modules/goodshare.js/src/utils/EventWrapper.js":
/*!*************************************************************!*\
  !*** ./node_modules/goodshare.js/src/utils/EventWrapper.js ***!
  \*************************************************************/
/*! exports provided: EventWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventWrapper", function() { return EventWrapper; });
/**
 *  Ilya Reshetnikov
 *  Copyright (c) 2018 Ilya Reshetnikov https://github.com/devxom
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  EventWrapper for goodshare.js
 */

class EventWrapper {
  constructor() {
    this.handlers = {};
  }

  // Add EventListener to element
  addEventListener(target = document, eventWithNamespace = "click", func) {
    this.handlers[eventWithNamespace] = {
      func: func,
      target: target
    };

    const eventType = eventWithNamespace.split(".")[0];
    const eventHandler = this.handlers[eventWithNamespace]["func"];

    target.addEventListener(eventType, eventHandler);
  }

  // Remove EventListener from element
  removeEventListener(event = "click") {
    const eventType = event.split(".")[0];
    const eventData = this.handlers[event];
    const target = eventData.target;

    target.removeEventListener(eventType, eventData.func);

    delete this.handlers[event];
  }

  // Remove all EventListeners
  removeAll() {
    for (const key in this.handlers) {
      this.removeEventListener(key);
    }
  }
}


/***/ }),

/***/ "./node_modules/goodshare.js/src/utils/ProviderMixin.js":
/*!**************************************************************!*\
  !*** ./node_modules/goodshare.js/src/utils/ProviderMixin.js ***!
  \**************************************************************/
/*! exports provided: ProviderMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderMixin", function() { return ProviderMixin; });
/* harmony import */ var _EventWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventWrapper */ "./node_modules/goodshare.js/src/utils/EventWrapper.js");
/**
 *  Ilya Reshetnikov
 *  Copyright (c) 2018 Ilya Reshetnikov https://github.com/devxom
 *  http://opensource.org/licenses/MIT The MIT License (MIT)
 *
 *  ProviderMixin for goodshare.js
 */



// Generate unique ID
const getUniqueId = (prefix = "id") =>
  `${prefix}-${Math.random()
    .toString(36)
    .substr(2, 8)}`;

class ProviderMixin {
  constructor() {
    this.events = new _EventWrapper__WEBPACK_IMPORTED_MODULE_0__["EventWrapper"]();
    this.callback = function() {};
    this.updateInstanceId();
  }

  // Handler wrapper for callback manipulations
  eventHandler(event, { share_url, windowTitle, windowWidth, windowHeight }) {
    event.preventDefault();

    // Calc top & left window position
    const screenWidth =
      window.outerWidth || window.document.documentElement.offsetWidth;
    const screenHeight =
      window.outerHeight || window.document.documentElement.offsetHeight;
    const screenTop = Math.round(screenHeight / 2 - windowHeight / 2);
    const screenLeft = Math.round(screenWidth / 2 - windowWidth / 2);

    // Set window size & window position
    const windowSize = `width=${windowWidth},height=${windowHeight}`;
    const windowPosition = `left=${screenLeft},top=${screenTop}`;

    // Build full window options
    const windowOptions = `${windowSize},${windowPosition},location=no,toolbar=no,menubar=no`;

    // Build window open object
    const windowObject = window.open(share_url, windowTitle, windowOptions);

    const windowCloseChecker = setInterval(() => {
      if (windowObject.closed) {
        this.callback(
          event,
          { share_url, windowTitle, windowOptions },
          windowObject
        );
        clearInterval(windowCloseChecker);
      }
    }, 10);

    return windowObject;
  }

  setShareCallback(callback) {
    this.callback = callback;
  }

  createEvents(share_elements) {
    [...share_elements].forEach(item => {
      const options = this.getPreparedData(item);
      const eventHandler = event =>
        this.eventHandler.call(this, event, options);

      this.events.addEventListener(
        item,
        `click.${this.instanceId}`,
        eventHandler
      );
    });
  }

  // Get instance
  getInstance() {
    if (typeof this.shareWindow === "function") this.shareWindow();
    if (typeof this.getCounter === "function") this.getCounter();

    return this;
  }

  // Update instance ID
  updateInstanceId() {
    this.instanceId = getUniqueId();
  }

  // Renew instance
  reNewInstance() {
    this.events.removeAll();
    this.updateInstanceId();
    return this.getInstance();
  }
}


/***/ }),

/***/ "./resources/js/ui/visitors/share/share.js":
/*!*************************************************!*\
  !*** ./resources/js/ui/visitors/share/share.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Facebook_1 = __webpack_require__(/*! ./../../../../../node_modules/goodshare.js/src/providers/Facebook */ "./node_modules/goodshare.js/src/providers/Facebook.js");

var Twitter_1 = __webpack_require__(/*! ./../../../../../node_modules/goodshare.js/src/providers/Twitter */ "./node_modules/goodshare.js/src/providers/Twitter.js");

var WhatsApp_1 = __webpack_require__(/*! ./../../../../../node_modules/goodshare.js/src/providers/WhatsApp */ "./node_modules/goodshare.js/src/providers/WhatsApp.js");

var constants_1 = __webpack_require__(/*! ../../../utils/constants */ "./resources/js/utils/constants.js");

var shareMessagePrefix = "Checkout this blog by Renee Tikolo:";

var Share =
/** @class */
function () {
  function Share() {}

  Share.prototype.setupShareAnchors = function () {
    var _this = this;

    $(document).on('click', '.share-blog', function (e) {
      e.preventDefault();
      _this.clickedShareAnchor = e.currentTarget;
      var popover = new Popover(e.currentTarget);
      popover.show();

      _this.setupPopoverSocialShare();
    });
  };

  Share.prototype.setupPopoverSocialShare = function () {
    var url = constants_1.appUrl + "/" + constants_1.blogPostRelativeUrl + "/" + this.getClickedShareAnchorBlogId();
    var shareMessage = shareMessagePrefix + " " + this.getClickedShareAnchorTitle();
    new Facebook_1.Facebook(url, shareMessage).shareWindow();
    new Twitter_1.Twitter(url, shareMessage).shareWindow();
    new WhatsApp_1.WhatsApp(shareMessage + ' ' + url).shareWindow();
  };

  Share.prototype.getClickedShareAnchorBlogId = function () {
    return parseInt(this.clickedShareAnchor.dataset.blogId);
  };

  Share.prototype.getClickedShareAnchorTitle = function () {
    return this.clickedShareAnchor.dataset.blogTitle;
  };

  return Share;
}();

exports.Share = Share;

var Popover =
/** @class */
function () {
  function Popover(shareAnchor) {
    this.element = shareAnchor;
    this.setupPopover();
  }

  Popover.prototype.setupPopover = function () {
    var _this = this;

    $(this.element).popover({
      html: true,
      placement: 'left',
      content: "\n                <a class=\"mx-2 sharer\" href=\"#\" data-social=\"facebook\"><i class=\"icon ion-social-facebook\"></i></a>\n                <a class=\"mx-2 sharer\" href=\"#\" data-social=\"twitter\"><i class=\"icon ion-social-twitter\"></i></a>\n                <a class=\"mx-2 sharer\" href=\"#\" data-social=\"whatsapp\"><i class=\"icon ion-social-whatsapp\"></i></a>\n            ".trim(),
      sanitize: false
    });
    $(document).off('click', '.sharer');
    $(document).on('click', '.sharer', function (e) {
      e.preventDefault();

      _this.dispose();
    });
  };

  Popover.prototype.show = function () {
    $(this.element).popover('show');
  };

  Popover.prototype.dispose = function () {
    $(this.element).popover('dispose');
  };

  return Popover;
}();
/*

export function setupShareAnchors() {
    $(document).on('click', '.share-blog', e => {
        e.preventDefault();
        showPopoverFor(e.currentTarget);
        const blogId = getBlogIdFrom(e.currentTarget);
        const blogTitle = getBlogTitleFrom(e.currentTarget);
        setupPopoverSocialShareLinks(blogId, blogTitle);
    })
}

function showPopoverFor(element: HTMLElement) {
    setup(element);
    show(element);
}

function setup(element: HTMLElement) {
    $(element).popover({
        html: true,
        placement: 'left',
        content: `
                <a class="mx-2 sharer" href="#" data-social="facebook"><i class="icon ion-social-facebook"></i></a>
                <a class="mx-2 sharer" href="#" data-social="twitter"><i class="icon ion-social-twitter"></i></a>
                <a class="mx-2 sharer" href="#" data-social="whatsapp"><i class="icon ion-social-whatsapp"></i></a>
            `.trim(),
        sanitize: false
    });
}

function show(element) {
    $(element).popover('show');
}

function getBlogIdFrom(element: HTMLElement): number {
    return parseInt(element.dataset.blogId);
}

function getBlogTitleFrom(element: HTMLElement) {
    return element.dataset.blogTitle;
}

function setupPopoverSocialShareLinks(blogId: number, blogTitle: string) {
    const url = `${appUrl}/${blogPostRelativeUrl}/${blogId}`;
    const shareMessage = `${shareMessagePrefix} ${blogTitle}`;
    new Facebook(url, shareMessage).shareWindow();
    new Twitter(url, shareMessage).shareWindow();
    new WhatsApp(shareMessage + ' ' + url).shareWindow();
}

function isDeviceMobile(): boolean {
    //Courtesy of Stackoverflow
    var isMobile = false;
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isMobile = true;
    }

    return isMobile;
}
*/

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

/***/ })

}]);