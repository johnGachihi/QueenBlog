import BlogsService from "../../../network/BlogsService";
import {RequestOptionsValues} from "../../../network/RequestOptions";

export default class Like {

    static like(likeAnchor: HTMLAnchorElement) {
        const blogId = parseInt(likeAnchor.dataset.blogId);
        if (! localStorage.getItem(`blog-liked-${blogId}`)) {
            Like.editUI(likeAnchor);
            Like.sendLikeRequest(blogId).then(res => {
                console.log(res);
            });
            localStorage.setItem(`blog-liked-${blogId}`, '1');
        } else {
            console.log('Already liked');
            Like.showAlreadyLikedToast(likeAnchor);
        }
    }

    private static editUI(likeAnchor: HTMLAnchorElement) {
        const iconEl = likeAnchor.getElementsByClassName('ion-android-favorite-outline')[0]; // TODO: use element instead of class to select
        if (iconEl != undefined) {
            Like.colorFillLikeIcon(iconEl as HTMLElement);
        }

        const likesSpan = likeAnchor.querySelector('span');
        Like.incrementLikes(likesSpan);
    }

    private static colorFillLikeIcon(iconEl: HTMLElement) {
        iconEl.classList.remove('ion-android-favorite-outline');
        iconEl.classList.add('ion-android-favorite');
    }

    private static incrementLikes(likesSpan: HTMLSpanElement) {
        let likes = parseInt(likesSpan.innerText);
        likesSpan.innerText = `${likes + 1}`;
    }

    private static sendLikeRequest(blogId: number): Promise<any> {
        const blogsService = new BlogsService(RequestOptionsValues.get());
        return blogsService.like(blogId);
    }

    private static showAlreadyLikedToast(likeAnchor: HTMLAnchorElement) {
        $(likeAnchor).popover({
            template: `
                <div class="popover" role="tooltip">
                    <h3 class="popover-header"></h3>
                    <div class="popover-body"></div>
                </div>
            `,
            content: 'Already liked',
            delay: 100
        });
        $(likeAnchor).popover('show');
        setTimeout(() => $(likeAnchor).popover('hide'), 1000);
    }
}
