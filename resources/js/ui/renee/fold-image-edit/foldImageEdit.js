"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FoldImageElement_1 = __importDefault(require("./FoldImageElement"));
//@ts-ignore
for (var _i = 0, foldImages_1 = foldImages; _i < foldImages_1.length; _i++) {
    var foldImage = foldImages_1[_i];
    new FoldImageElement_1.default(foldImage);
}
//# sourceMappingURL=foldImageEdit.js.map