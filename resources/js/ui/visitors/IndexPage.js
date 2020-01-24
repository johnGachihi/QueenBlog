"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AboutReneeService_1 = __importDefault(require("../../network/AboutReneeService"));
var IndexPage = /** @class */ (function () {
    function IndexPage(remoteConfig) {
        this.init(remoteConfig);
    }
    IndexPage.prototype.init = function (remoteConfig) {
        this.initElements();
        this.setupAboutReneeService(remoteConfig);
        this.setupAboutReneePar();
    };
    IndexPage.prototype.initElements = function () {
        this.aboutReneePar =
            document.getElementById('about-renee');
    };
    IndexPage.prototype.setupAboutReneeService = function (remoteConfig) {
        this.aboutReneeService = new AboutReneeService_1.default(remoteConfig);
    };
    IndexPage.prototype.setupAboutReneePar = function () {
        var _this = this;
        this.aboutReneeService.fetchAboutRenee()
            .then(function (res) {
            _this.aboutReneePar.innerText = res;
        })
            .catch(console.log);
    };
    return IndexPage;
}());
exports.default = IndexPage;
//# sourceMappingURL=IndexPage.js.map