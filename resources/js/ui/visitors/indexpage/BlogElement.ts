import Blog from "../../../models/Blog";
import {appUrl, blogImagesRelativeUrl} from "../../../utils/constants";

export default class BlogElement {
    private blog: Blog;

    constructor(blog: Blog) {
        this.blog = blog;
    }

    getHTML(): Node {
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = `
            <div class="col-lg-6 col-md-12">
                <div class="single-post">
                    <div class="image-wrapper">
                        ${this.getBlogImageElementAsString()}
                    </div>

                    <div class="icons">
                        <div class="left-area">
                            <!--TODO: Add tag links href-->
                            <a class="btn category-btn" href="#"><b>${this.getTagToShow()}</b></a>
                        </div>
                        <ul class="right-area social-icons">
                            <li><a href="#"><i class="ion-android-share-alt"></i>Share</a></li>
                            <li><a href="#"><i class="ion-android-favorite-outline"></i>${this.blog.likes}</a></li>
                            <li><a href="#"><i class="ion-ios-eye"></i>${this.blog.views}</a></li>
                        </ul>
                    </div>
                    <h6 class="date"><em>${this.blog.updated_at}</em></h6>
                    <h3 class="title">
                        <a href="#"><b class="title-text light-color">${this.blog.title}</b></a>
                    </h3>
                    <div style="height: 6.8em; overflow: hidden">
                        <p>${this.blog.content}</p>
                    </div>
                    <!--TODO: Add link href-->
                    <a class="btn read-more-btn" href="#"><b>READ MORE</b></a>
                </div>
            </div>
        `.trim();
        return tempContainer.firstChild;
    }

    private getBlogImageElementAsString(): string {
        if (this.blog.main_image_filename == undefined) {
            return null;
        }
        return `
            <img src="${appUrl}/${blogImagesRelativeUrl}/${this.blog.main_image_filename}"
                alt="${this.blog.title}">
        `
    }

    private getTagToShow(): string {
        const tag = this.blog.tag;
        return tag.charAt(0).toUpperCase() + tag.substring(1);
    }
}
