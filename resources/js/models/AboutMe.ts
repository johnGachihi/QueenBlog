import Model from "./Model";

export default interface AboutMe extends Model{
    about_me?: string
    about_me_image_file?: File
    about_me_image?: string
    about_me_side?: string
    about_me_side_image_file?: File
    about_me_side_image?: string
    about_me_side_name?: string
}
