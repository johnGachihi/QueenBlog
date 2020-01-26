import Like from "./Like";

export function setupLikeAnchors() {
    $(document).on('click', '.like-blog', e => {
        console.log(e.currentTarget);
        e.preventDefault();
        Like.like(e.currentTarget as HTMLAnchorElement);
    })
}

export function colorFillLikedIconForLikedBlogs() {
    const likeAnchors = document.getElementsByClassName('like-blog');
    for (let i = 0; i < likeAnchors.length; i++) {
        const likeAnchor = <HTMLAnchorElement>likeAnchors[i];
        if(isAnchorForLikedBlog(likeAnchor)) {
            const iconEl = likeAnchor.querySelector('i');
            colorFillLikeIcon(iconEl);
        }
    }
}

function isAnchorForLikedBlog(likeAnchor: HTMLAnchorElement) {
    const blogId = likeAnchor.dataset.blogId;
    return localStorage.getItem(`blog-liked-${blogId}`) != undefined;
}

function colorFillLikeIcon(iconEl: HTMLElement) {
    iconEl.classList.remove('ion-android-favorite-outline');
    iconEl.classList.add('ion-android-favorite');
}
