import RequestOptions from "./RequestOptions";
import {HttpMethod} from "./HttpMethod";
import Model from "../models/Model";

export default class Service<T extends Model> {
    protected readonly requestOptions: RequestOptions;
    protected readonly relativeUrl: string;

    constructor(requestOptions: RequestOptions, relativeUrl: string) {
        this.requestOptions = requestOptions;
        this.relativeUrl = relativeUrl;
    }

    save(t: T): Promise<any> {
        return this._fetch(HttpMethod.POST, t);
    }

    update(t: T, urlSuffix?: string): Promise<any> {
        return this._fetch(HttpMethod.PUT, t, `/${t.id}`);
    }

    protected async _fetch(method: HttpMethod, data: T, urlSuffix?: string) {
        const {csrfToken, baseUrl} = this.requestOptions;
        const fetchUrl = Service.makeUrl(baseUrl, this.relativeUrl, urlSuffix);

        const response = await fetch(fetchUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',   //To tell Laravel this is an ajax call
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }

    protected static makeUrl(baseUrl: string, relativeUrl: string, urlSuffix?: string) {
        if(urlSuffix != undefined) {
            return baseUrl + relativeUrl + urlSuffix;
        } else {
            return baseUrl + relativeUrl;
        }
    }
}
