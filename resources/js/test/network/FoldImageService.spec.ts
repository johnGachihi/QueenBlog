import RequestOptions from "../../network/RequestOptions";
import AboutMeService from "../../network/AboutMeService";
import sinon from "sinon";
import 'isomorphic-fetch';
import {jsonOk} from "../TestUtils/fetchResponses";
import FoldImageService from "../../network/FoldImageService";

const requestOptions: RequestOptions = {
    csrfToken: 'abc',
    baseUrl: 'http://localhost'
};

describe('Test FoldImageService', () => {
    let service: FoldImageService;

    beforeEach(() => {
        service = new FoldImageService(requestOptions);
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

        test('request fetch-url is correct', () => {
            return service.save(formData).then(() => {
                //@ts-ignore
                expect(fetch.getCall(0).args[0]).toBe('http://localhost/fold_image');
            })
        });

        test('test request headers contain Accept and X-CSRF-TOKEN', () => {
            return service.save(formData).then(() => {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).toMatchObject({
                        headers: {
                            'Accept': 'application/json',
                            'X-CSRF-TOKEN': requestOptions.csrfToken
                        }
                    });
            })
        });

        test('test request headers not contain Content-Type', () => {
            return service.save(formData).then(() => {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).not.toMatchObject({
                    headers: {'Content-Type': 'application/json'}
                });
            })
        });

        test('test request body is as given', () => {
            return service.save(formData).then(() => {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).toMatchObject({
                    body: formData
                })
            })
        });
    })
});
