import Blog from "../models/Blog";
import Service from "./Service";
import RequestOptions from "./RequestOptions";

export default class BlogsService extends Service<Blog> {
    private static relativeURL: string = '/blog';

    constructor(requestOptions: RequestOptions) {
        super(requestOptions, BlogsService.relativeURL)
    }

}
