"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Like_1 = __importDefault(require("./Like"));
function setupLikeAnchors() {
    $(document).on('click', '.like-blog', function (e) {
        console.log(e.currentTarget);
        e.preventDefault();
        Like_1.default.like(e.currentTarget);
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
//# sourceMappingURL=LikeView.js.map