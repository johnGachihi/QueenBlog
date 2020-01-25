"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AboutReneeService_1 = __importDefault(require("../../../network/AboutReneeService"));
var BlogsService_1 = __importDefault(require("../../../network/BlogsService"));
var RequestOptions_1 = require("../../../network/RequestOptions");
var BlogElement_1 = __importDefault(require("./BlogElement"));
var IndexPage = /** @class */ (function () {
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
    };
    IndexPage.prototype.initElements = function () {
        this.aboutReneePar =
            document.getElementById('about-renee');
    };
    IndexPage.prototype.initAboutReneeService = function (remoteConfig) {
        this.aboutReneeService = new AboutReneeService_1.default(remoteConfig);
    };
    IndexPage.prototype.initBlogsService = function () {
        this.blogsService = new BlogsService_1.default(RequestOptions_1.RequestOptionsValues.get());
    };
    IndexPage.prototype.setupAboutReneePar = function () {
        var _this = this;
        this.aboutReneeService.fetchAboutRenee()
            .then(function (res) {
            _this.aboutReneePar.innerText = res;
        })
            .catch(console.log);
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