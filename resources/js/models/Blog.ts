import Model from "./Model";

export default interface Blog extends Model{
    id?: number,
    title?: string,
    blog_content: string,
    main_image?: File,
    status?: string,
    views?: number,
    likes?: number
}
