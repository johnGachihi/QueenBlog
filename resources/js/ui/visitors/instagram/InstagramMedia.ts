import InstagramService from "../../../network/InstagramService";
import {RequestOptionsValues} from "../../../network/RequestOptions";

const instagramFooterMediaContainerEl = document.getElementById('instagram');
const instagramSidebarMediaContainerEl = document.getElementById('instagram-side-bar');
const instagramService = new InstagramService(RequestOptionsValues.get());

instagramService.getMedia().then(res => {
    if (res.data !== undefined) {
        console.log(res.data);

        try {
            res.data.forEach((media, index) => {
                const image = document.createElement('img');
                image.src = media.media_url;
                image.alt = 'Instagram image';
                instagramFooterMediaContainerEl.appendChild(image);
                instagramSidebarMediaContainerEl.appendChild(image.cloneNode());

                if (index >= 10) throw 'finished'
            });
        } catch (e) { }
    } else if (res.error !== undefined) {
        instagramFooterMediaContainerEl.classList.add('d-none');
        console.log(res.error);
    }
}).catch(err => {
    instagramFooterMediaContainerEl.classList.add('d-none');
    console.log(err);
});
