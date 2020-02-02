import Service from "./Service";
import {RequestOptionsValues} from "./RequestOptions";
import AboutMe from "../models/AboutMe";

export default class AboutMeService extends Service<AboutMe>{
    constructor() {
        super(RequestOptionsValues.get(), '/about_me');
    }

    /*save(t: AboutMe): Promise<any> {
        return super.save(t);
    }*/

}
