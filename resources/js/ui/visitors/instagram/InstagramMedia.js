"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InstagramService_1 = __importDefault(require("../../../network/InstagramService"));
var RequestOptions_1 = require("../../../network/RequestOptions");
var instagramMediaContainerEl = document.getElementById('instagram');
var instagramService = new InstagramService_1.default(RequestOptions_1.RequestOptionsValues.get());
instagramService.getMedia().then(function (res) {
    if (res.data !== undefined) {
        console.log(res.data);
        res.data.forEach(function (media, index) {
            console.log(media);
            var image = document.createElement('img');
            image.src = media.media_url;
            image.alt = 'Instagram image';
            instagramMediaContainerEl.appendChild(image);
            if (index >= 10)
                throw 'finished';
        });
        /*for (let [index, media] of res.data.entries()) {
            console.log(media);
            const image = document.createElement('img');
            image.src = media.media_url;
            image.alt = 'Instagram image';
            instagramMediaContainerEl.appendChild(image);

            if (index >=10) break;
        }*/
    }
    else if (res.error !== undefined) {
        instagramMediaContainerEl.classList.add('d-none');
        console.log(res.error);
    }
}).catch(function (err) {
    instagramMediaContainerEl.classList.add('d-none');
    console.log(err);
});
//# sourceMappingURL=InstagramMedia.js.map