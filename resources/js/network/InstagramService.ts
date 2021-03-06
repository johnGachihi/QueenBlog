import RequestOptions from "./RequestOptions";
import Service from "./Service";
import {HttpMethod} from "./HttpMethod";
//@ts-ignore
import urls from "./utils/urlConstants/urls.APP_TARGET";

console.log(urls.instagramMediaUrl);

export default class InstagramService extends Service<any>{
    constructor(requestOptions: RequestOptions) {
        super(requestOptions, '/');
    }

    async getUserName() {
        const {csrfToken, baseUrl} = this.requestOptions;

        const response = await fetch(`${baseUrl}/instagram-profile`, {
            method: HttpMethod.GET,
            headers: {
                'Accept': 'application/json',   //To tell Laravel this is an ajax call
                'X-CSRF-TOKEN': csrfToken
            }
        });

        return await response.json();
    }

    async getMedia() {
        const {csrfToken, baseUrl} = this.requestOptions;

        const response = await fetch(urls.instagramMediaUrl, {
            method: HttpMethod.GET,
            headers: {
                'Accept': 'application/json',   //To tell Laravel this is an ajax call
                'X-CSRF-TOKEN': csrfToken
            }
        });

        return await response.json();
    }
}
