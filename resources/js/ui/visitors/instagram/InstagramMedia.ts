import 'simplebar';
import 'simplebar/dist/simplebar.css';
import InstagramService from "../../../network/InstagramService";
import {RequestOptionsValues} from "../../../network/RequestOptions";

const instagramMediaContainerEl = document.getElementById('instagram');
const instagramService = new InstagramService(RequestOptionsValues.get());

instagramService.getMedia().then(res => {
    if (res.data !== undefined) {
        console.log(res.data);

        try {
            res.data.forEach((media, index) => {
                console.log(media);
                const image = document.createElement('img');
                image.src = media.media_url;
                image.alt = 'Instagram image';
                instagramMediaContainerEl.appendChild(image);

                if (index >=10) throw 'finished'
            });
        } catch (e) { }
    } else if (res.error !== undefined) {
        instagramMediaContainerEl.classList.add('d-none');
        console.log(res.error);
    }
}).catch(err => {
    instagramMediaContainerEl.classList.add('d-none');
    console.log(err);
});
