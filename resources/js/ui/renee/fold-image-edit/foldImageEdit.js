"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FoldImageElement_1 = __importDefault(require("./FoldImageElement"));
for (var i = 0; i < 4; i++) {
    //@ts-ignore
    if (foldImages[i] !== undefined)
        //@ts-ignore
        new FoldImageElement_1.default(foldImages[i]);
    else
        new FoldImageElement_1.default({ id: i + 1, filename: 'blog-image-placeholder.png' });
}
//# sourceMappingURL=foldImageEdit.js.map