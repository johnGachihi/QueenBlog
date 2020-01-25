"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../../utils/constants");
var BlogElement = /** @class */ (function () {
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
}());
exports.default = BlogElement;
//# sourceMappingURL=BlogElement.js.map