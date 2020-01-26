import BlogsService from "../../../network/BlogsService";
import {RequestOptionsValues} from "../../../network/RequestOptions";
import Blog from "../../../models/Blog";
import BlogElement from "./BlogElement";
import Like from "../like/Like";
import {colorFillLikedIconForLikedBlogs} from "../like/LikeView";

export default class IndexPage {
    private blogsService: BlogsService;
    private paginatedBlogsPageNumber: number = 1;

    constructor() {
        this.init();
    }

    private init() {
        this.initBlogsService();
        this.setupLoadMoreButton();
    }

    private initBlogsService() {
        this.blogsService = new BlogsService(RequestOptionsValues.get());
    }

    private setupLoadMoreButton() {
        const loadMoreButton = document.getElementById('load-more-btn');
        loadMoreButton.addEventListener('click', e => {
            e.preventDefault();
            this.showLoader();
            this.blogsService.fetchPaginatedBlogs(++this.paginatedBlogsPageNumber)
                .then(page => {
                    this.hideLoader();
                    IndexPage.appendBlogs(page.data);
                    this.updatePaginatedBlogsPageNumber(page.current_page);
                    colorFillLikedIconForLikedBlogs();
                })
        })
    }

    private static appendBlogs(blogs: Array<Blog>) {
        const blogsContainer = document.getElementById('rest-of-blogs');
        for (const blog of blogs) {
            const blogElement = new BlogElement(blog);
            blogsContainer.appendChild(blogElement.getHTML());
        }
    }

    private updatePaginatedBlogsPageNumber(currentPageNumber: number) {
        this.paginatedBlogsPageNumber = currentPageNumber
    }

    // TODO: Add implementation
    private showLoader() {console.log('Loading...')}
    private hideLoader() {console.log('Loaded')}
}
