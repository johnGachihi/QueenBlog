import ContactMessage from "../models/ContactMessage";
import RequestOptions from "./RequestOptions";
import {HttpMethod} from "./HttpMethod";

export default class ContactMessageService {
    private requestOptions: RequestOptions;

    constructor(requestOptions: RequestOptions) {
        this.requestOptions = requestOptions;
    }

    // TODO: Grand refactoring expected in the network section
    // wherein this method will be reduced to one line of implementation
    async send(message: ContactMessage) {
        const {csrfToken, baseUrl} = this.requestOptions;
        const fetchUrl = `${baseUrl}/contact`;

        const response = await fetch(fetchUrl, {
            method: HttpMethod.POST,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',   //To tell Laravel this is an ajax call
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(message)
        });

        return await response.json();
    }
}
