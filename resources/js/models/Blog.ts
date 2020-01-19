import Model from "./Model";

export default interface Blog extends Model{
    id?: number,
    blog_title?: string,
    blog_content: string,
    main_image?: File,
    status?: string,
    views?: number,
    likes?: number
}
