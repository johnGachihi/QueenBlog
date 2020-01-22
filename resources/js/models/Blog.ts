import Model from "./Model";

export default interface Blog extends Model{
    id?: number,
    title?: string,
    content: string,
    main_image?: File,
    main_image_filename?: string
    tag?: string,
    status?: string,
    views?: number,
    likes?: number
}
