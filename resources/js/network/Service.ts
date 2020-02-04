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

    save(t: T | FormData): Promise<any> {
        return this._fetch(HttpMethod.POST, t);
    }

    update(t: T): Promise<any> {
        return this._fetch(HttpMethod.POST, t, `/${t.id}`);
    }

    protected async _fetch(method: HttpMethod, data: T | FormData, urlSuffix?: string | number) {
        const {csrfToken, baseUrl} = this.requestOptions;
        const fetchUrl = Service.makeUrl(baseUrl, this.relativeUrl, urlSuffix);
        let fetchBody: BodyInit;
        let fetchHeaders: HeadersInit = {
            'Accept': 'application/json',   //To tell Laravel this is an ajax call
            'X-CSRF-TOKEN': csrfToken
        };

        if (this.isFormData(data)) {
            fetchBody = data;
        } else {
            fetchBody = JSON.stringify(data);
            fetchHeaders['Content-Type'] = 'application/json';
        }
        const response = await fetch(fetchUrl, {
            method: method,
            headers: fetchHeaders,
            body: fetchBody
        });

        return await response.json();
    }

    protected static makeUrl(baseUrl: string, relativeUrl: string, urlSuffix?: string | number) {
        if (urlSuffix != undefined) {
            return baseUrl + relativeUrl + urlSuffix;
        } else {
            return baseUrl + relativeUrl;
        }
    }

    private isFormData(data: T | FormData): data is FormData {
        return (data as FormData).append !== undefined;
    }

    // private getRequestData(data: T | FormData): string | FormData {
    //     if (data )
    // }
}
