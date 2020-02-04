import Service from "./Service";
import RequestOptions, {RequestOptionsValues} from "./RequestOptions";
import AboutMe from "../models/AboutMe";

export default class AboutMeService extends Service<AboutMe>{
    constructor(requestOptions: RequestOptions) {
        super(requestOptions, '/about_me');
    }
}
