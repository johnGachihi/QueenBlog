import FirebaseConfig from "../../../firebase/FirebaseConfig";
import AboutReneeService from "../../../network/AboutReneeService";
import RemoteConfig = firebase.remoteConfig.RemoteConfig;
import BlogsService from "../../../network/BlogsService";
import RequestOptions, {RequestOptionsValues} from "../../../network/RequestOptions";
import Blog from "../../../models/Blog";
import BlogElement from "./BlogElement";

export default class IndexPage {
    private aboutReneePar: HTMLParagraphElement;
    private aboutReneeService: AboutReneeService;
    private blogsService: BlogsService;
    private paginatedBlogsPageNumber: number = 1;

    constructor(remoteConfig: RemoteConfig) {
        this.init(remoteConfig);
    }

    private init(remoteConfig: RemoteConfig) {
        this.initElements();
        this.initAboutReneeService(remoteConfig);
        this.initBlogsService();
        this.setupAboutReneePar();
        this.setupLoadMoreButton();
    }

    private initElements() {
        this.aboutReneePar =
            document.getElementById('about-renee') as HTMLParagraphElement;
    }

    private initAboutReneeService(remoteConfig: RemoteConfig) {
        this.aboutReneeService = new AboutReneeService(remoteConfig);
    }

    private initBlogsService() {
        this.blogsService = new BlogsService(RequestOptionsValues.get());
    }

    private setupAboutReneePar() {
        this.aboutReneeService.fetchAboutRenee()
            .then(res => {
                this.aboutReneePar.innerText = res;
            })
            .catch(console.log);
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
    private showLoader() { console.log('Loading...') }
    private hideLoader() { console.log('Loaded') }
}
