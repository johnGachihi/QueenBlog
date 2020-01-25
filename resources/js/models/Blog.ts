import Model from "./Model";

export default interface Blog extends Model{
    id?: number,
    title?: string,
    content: string,
    main_image?: File,
    main_image_filename?: string
    tag?: string,
    status?: BlogStatus,
    views?: number,
    likes?: number,
    updated_at?: string,
    created_at?: string
}

export enum BlogStatus {
    DRAFT = "draft",
    PUBLISHED = "published"
}
