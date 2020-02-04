import RequestOptions from "../../network/RequestOptions";
import sinon from "sinon";
import 'isomorphic-fetch';
import Blog from "../../models/Blog";
import {jsonOk} from "../TestUtils/fetchResponses";
import AboutMeService from "../../network/AboutMeService";

const requestOptions: RequestOptions = {
    csrfToken: 'abc',
    baseUrl: 'http://localhost'
};

describe('test Service', () => {
    let service: AboutMeService;

    beforeEach(() => {
        service = new AboutMeService(requestOptions);
        sinon.stub(window, "fetch").returns(jsonOk({'status': 'ok'}));
    });

    afterEach(() => {
        //@ts-ignore
        window.fetch.restore();
    });

    describe('test save() with FormData', () => {
        let formData: FormData;

        beforeEach(() => {
            formData = new FormData();
            formData.append('name', 'John');
        });

        test('request fetch-url', () => {
            return service.save(formData).then(() => {
                //@ts-ignore
                expect(fetch.getCall(0).args[0]).toBe('http://localhost/about_me');
            })
        });

        test('request headers', () => {
            return service.save(formData).then(() => {
                //@ts-ignore
                const fetchCall = fetch.getCall(0);
                expect(fetchCall.args[1]).toMatchObject({
                    headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': requestOptions.csrfToken
                    }
                });
                expect(fetchCall.args[1]).not.toMatchObject({
                    headers: {'Content-Type': 'application/json'}
                });
            })
        });

        test('request body', () => {
            return service.save(formData).then(res => {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).toMatchObject({
                    body: formData
                })
            })
        })
    });

    describe('test save() with Model', () => {
        let blog: Blog;

        beforeEach(() => blog = {content: 'abc'});

        test('request url', () => {
            return service.save(blog).then(() => {
                //@ts-ignore
                expect(fetch.getCall(0).args[0]).toBe('http://localhost/about_me')
            })
        });

        test('request headers', () => {
            return service.save(blog).then(() => {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).toMatchObject({headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': requestOptions.csrfToken,
                        'Content-Type': 'application/json'
                    }})
            })
        });

        test('request body', () => {
            return service.save(blog).then(() => {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).toMatchObject({
                    body: JSON.stringify(blog)
                })
            })
        });

    })
});

