import Blog from "../models/Blog";
import Service from "./Service";
import RequestOptions from "./RequestOptions";
import {HttpMethod} from "./HttpMethod";

export default class BlogsService extends Service<Blog> {
    private static relativeURL: string = '/blog';

    constructor(requestOptions: RequestOptions) {
        super(requestOptions, BlogsService.relativeURL);
    }

    //TODO Refactor [Service] and remove this method
    async updateWithImage(blog: FormData) {
        const {csrfToken, baseUrl} = this.requestOptions;
        const fetchUrl = Service.makeUrl(baseUrl, this.relativeUrl, `/${blog.get('id')}`);

        const response = await fetch(fetchUrl, {
            method: HttpMethod.POST,
            headers: {
                'Accept': 'application/json',   //To tell Laravel this is an ajax call
                'X-CSRF-TOKEN': csrfToken
            },
            body: blog
        });

        return await response.json();
    }

    //TODO Refactor [Service] and remove this method
    async delete(blogId) {
        const {csrfToken, baseUrl} = this.requestOptions;
        const fetchUrl = Service.makeUrl(baseUrl, this.relativeUrl, `/${blogId}`);

        const response = await fetch(fetchUrl, {
            method: HttpMethod.DELETE,
            headers: {
                'Accept': 'application/json',   //To tell Laravel this is an ajax call
                'X-CSRF-TOKEN': csrfToken
            }
        });

        return await response.json();
    }

    //TODO Refactor [Service] and remove this method
    async fetchPaginatedBlogs(page: number) {
        const {csrfToken, baseUrl} = this.requestOptions;
        const fetchUrl = Service.makeUrl(baseUrl, this.relativeUrl, `/paginated?page=${page}`);

        const response = await fetch(fetchUrl, {
            method: HttpMethod.GET,
            headers: {
                'Accept': 'application/json',   //To tell Laravel this is an ajax call
                'X-CSRF-TOKEN': csrfToken
            }
        });

        return await response.json();
    }
}
