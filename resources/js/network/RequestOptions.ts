export default interface RequestOptions {
    csrfToken: string,
    baseUrl: string
}

export class RequestOptionsValues {
    static get(): RequestOptions {
        return {
            csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
        };
    }
}
