import Model from "./Model";

export default interface Blog extends Model{
    id?: number,
    blog_title?: string,
    blog_content: string,
    blog_main_image?: File,
    blog_tag?: string,
    status?: string,
    views?: number,
    likes?: number
}
