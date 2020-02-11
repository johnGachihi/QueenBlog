"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InstagramService_1 = __importDefault(require("../../../network/InstagramService"));
var RequestOptions_1 = require("../../../network/RequestOptions");
var instagramFooterMediaContainerEl = document.getElementById('instagram');
var instagramSidebarMediaContainerEl = document.getElementById('instagram-side-bar');
var instagramService = new InstagramService_1.default(RequestOptions_1.RequestOptionsValues.get());
instagramService.getMedia().then(function (res) {
    if (res.data !== undefined) {
        console.log(res.data);
        try {
            res.data.forEach(function (media, index) {
                var image = document.createElement('img');
                image.src = media.media_url;
                image.alt = 'Instagram image';
                instagramFooterMediaContainerEl.appendChild(image);
                instagramSidebarMediaContainerEl.appendChild(image.cloneNode());
                if (index >= 10)
                    throw 'finished';
            });
        }
        catch (e) { }
    }
    else if (res.error !== undefined) {
        instagramFooterMediaContainerEl.classList.add('d-none');
        console.log(res.error);
    }
}).catch(function (err) {
    instagramFooterMediaContainerEl.classList.add('d-none');
    console.log(err);
});
//# sourceMappingURL=InstagramMedia.js.map