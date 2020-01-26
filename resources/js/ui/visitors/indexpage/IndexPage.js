"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BlogsService_1 = __importDefault(require("../../../network/BlogsService"));
var RequestOptions_1 = require("../../../network/RequestOptions");
var BlogElement_1 = __importDefault(require("./BlogElement"));
var LikeView_1 = require("../like/LikeView");
var IndexPage = /** @class */ (function () {
    function IndexPage() {
        this.paginatedBlogsPageNumber = 1;
        this.init();
    }
    IndexPage.prototype.init = function () {
        this.initBlogsService();
        this.setupLoadMoreButton();
    };
    IndexPage.prototype.initBlogsService = function () {
        this.blogsService = new BlogsService_1.default(RequestOptions_1.RequestOptionsValues.get());
    };
    IndexPage.prototype.setupLoadMoreButton = function () {
        var _this = this;
        var loadMoreButton = document.getElementById('load-more-btn');
        loadMoreButton.addEventListener('click', function (e) {
            e.preventDefault();
            _this.showLoader();
            _this.blogsService.fetchPaginatedBlogs(++_this.paginatedBlogsPageNumber)
                .then(function (page) {
                _this.hideLoader();
                IndexPage.appendBlogs(page.data);
                _this.updatePaginatedBlogsPageNumber(page.current_page);
                LikeView_1.colorFillLikedIconForLikedBlogs();
            });
        });
    };
    IndexPage.appendBlogs = function (blogs) {
        var blogsContainer = document.getElementById('rest-of-blogs');
        for (var _i = 0, blogs_1 = blogs; _i < blogs_1.length; _i++) {
            var blog = blogs_1[_i];
            var blogElement = new BlogElement_1.default(blog);
            blogsContainer.appendChild(blogElement.getHTML());
        }
    };
    IndexPage.prototype.updatePaginatedBlogsPageNumber = function (currentPageNumber) {
        this.paginatedBlogsPageNumber = currentPageNumber;
    };
    // TODO: Add implementation
    IndexPage.prototype.showLoader = function () { console.log('Loading...'); };
    IndexPage.prototype.hideLoader = function () { console.log('Loaded'); };
    return IndexPage;
}());
exports.default = IndexPage;
//# sourceMappingURL=IndexPage.js.map