"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AboutReneeService_1 = __importDefault(require("../../../network/AboutReneeService"));
var SideBar = /** @class */ (function () {
    function SideBar(remoteConfig) {
        this.initElements();
        this.setupAboutReneePar(remoteConfig);
    }
    SideBar.prototype.initElements = function () {
        this.aboutReneePar =
            document.getElementById('about-renee');
    };
    SideBar.prototype.setupAboutReneePar = function (remoteConfig) {
        var _this = this;
        var aboutReneeService = new AboutReneeService_1.default(remoteConfig);
        aboutReneeService.fetchAboutRenee()
            .then(function (res) {
            _this.aboutReneePar.innerText = res;
        })
            .catch(console.log);
    };
    return SideBar;
}());
exports.default = SideBar;
//# sourceMappingURL=SideBar.js.map