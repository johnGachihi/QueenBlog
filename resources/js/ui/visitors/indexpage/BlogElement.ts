import Blog from "../../../models/Blog";
import {appUrl, blogImagesRelativeUrl, blogPostRelativeUrl} from "../../../utils/constants";

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

                    <div class="icons d-flex justify-content-between">
                        <div class="left-area">
                            <!--TODO: Add tag links href-->
                            <a class="btn category-btn" href="categories/${this.blog.tag}"><b>${this.getTagToShow()}</b></a>
                        </div>
                        <ul class="right-area social-icons">
                            <li>
                                <a class="share-blog" href="#" data-blog-id="${this.blog.id}" data-blog-title="${this.blog.title}">
                                    <i class="ion-android-share-alt"></i>
                                    Share
                                </a>
                            </li>
                            <li>
                                <a href="#" class="like-blog" data-blog-id="${this.blog.id}">
                                    <i class="ion-android-favorite-outline"></i>
                                    <span>${this.blog.likes}</span>
                                </a>
                            </li>
                            <li style="padding-left: 30px"><i class="ion-ios-eye"></i>${this.blog.views}</li>
                        </ul>
                    </div>
                    <h6 class="date"><em>${this.getPublishDate()}</em></h6>
                    <h3 class="title">
                        <a href="${appUrl}/${blogPostRelativeUrl}/${this.blog.id}"><b class="title-text light-color">${this.blog.title}</b></a>
                    </h3>
                    <div style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden">
                        <p>${this.blog.content}</p>
                    </div>
                    <!--TODO: Add link href-->
                    <a class="btn read-more-btn" href="${appUrl}/${blogPostRelativeUrl}/${this.blog.id}"><b>READ MORE</b></a>
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
            <div class="blog-post-image">
                <img src="${appUrl}/${blogImagesRelativeUrl}/${this.blog.main_image_filename}"
                    alt="${this.blog.title}" style="height: 100%;">
            </div>
        `
    }

    private getTagToShow(): string {
        const tag = this.blog.tag;
        return tag.charAt(0).toUpperCase() + tag.substring(1);
    }

    private getPublishDate(): string {
        if (this.blog.published_on) {
            return this.blog.published_on;
        } else {
            return this.blog.created_at;
        }
    }
}
