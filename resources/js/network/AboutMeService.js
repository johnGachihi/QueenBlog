"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Service_1 = __importDefault(require("./Service"));
var RequestOptions_1 = require("./RequestOptions");
var AboutMeService = /** @class */ (function (_super) {
    __extends(AboutMeService, _super);
    function AboutMeService() {
        return _super.call(this, RequestOptions_1.RequestOptionsValues.get(), '/about_me') || this;
    }
    return AboutMeService;
}(Service_1.default));
exports.default = AboutMeService;
//# sourceMappingURL=AboutMeService.js.map