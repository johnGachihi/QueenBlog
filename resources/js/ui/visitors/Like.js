"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BlogsService_1 = __importDefault(require("../../network/BlogsService"));
var RequestOptions_1 = require("../../network/RequestOptions");
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.like = function (likeAnchor) {
        var blogId = parseInt(likeAnchor.dataset.blogId);
        if (!localStorage.getItem("blog-liked-" + blogId)) {
            Like.editUI(likeAnchor);
            Like.sendLikeRequest(blogId).then(function (res) {
                console.log(res);
            });
            localStorage.setItem("blog-liked-" + blogId, '1');
        }
        else {
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
        var blogsService = new BlogsService_1.default(RequestOptions_1.RequestOptionsValues.get());
        return blogsService.like(blogId);
    };
    Like.showAlreadyLikedToast = function (likeAnchor) {
        $(likeAnchor).popover({
            template: "\n                <div class=\"popover\" role=\"tooltip\">\n                    <h3 class=\"popover-header\"></h3>\n                    <div class=\"popover-body\"></div>\n                </div>\n            ",
            content: 'Already liked',
            delay: 100
        });
        $(likeAnchor).popover('show');
        setTimeout(function () { return $(likeAnchor).popover('hide'); }, 1000);
    };
    return Like;
}());
exports.default = Like;
//# sourceMappingURL=Like.js.map