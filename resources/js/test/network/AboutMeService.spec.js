"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
require("isomorphic-fetch");
var fetchResponses_1 = require("../TestUtils/fetchResponses");
var AboutMeService_1 = __importDefault(require("../../network/AboutMeService"));
var requestOptions = {
    csrfToken: 'abc',
    baseUrl: 'http://localhost'
};
describe('test AboutMeService', function () {
    var service;
    beforeEach(function () {
        service = new AboutMeService_1.default(requestOptions);
        sinon_1.default.stub(window, "fetch").returns(fetchResponses_1.jsonOk({ 'status': 'ok' }));
    });
    afterEach(function () {
        //@ts-ignore
        window.fetch.restore();
    });
    describe('test save() with FormData', function () {
        var formData;
        beforeEach(function () {
            formData = new FormData();
            formData.append('name', 'John');
        });
        test('request fetch-url', function () {
            return service.save(formData).then(function () {
                //@ts-ignore
                expect(fetch.getCall(0).args[0]).toBe('http://localhost/about_me');
            });
        });
        test('request headers', function () {
            return service.save(formData).then(function () {
                //@ts-ignore
                var fetchCall = fetch.getCall(0);
                expect(fetchCall.args[1]).toMatchObject({
                    headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': requestOptions.csrfToken
                    }
                });
                expect(fetchCall.args[1]).not.toMatchObject({
                    headers: { 'Content-Type': 'application/json' }
                });
            });
        });
        test('request body', function () {
            return service.save(formData).then(function (res) {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).toMatchObject({
                    body: formData
                });
            });
        });
    });
    describe('test save() with Model', function () {
        var blog;
        beforeEach(function () { return blog = { content: 'abc' }; });
        test('request url', function () {
            return service.save(blog).then(function () {
                //@ts-ignore
                expect(fetch.getCall(0).args[0]).toBe('http://localhost/about_me');
            });
        });
        test('request headers', function () {
            return service.save(blog).then(function () {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).toMatchObject({ headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': requestOptions.csrfToken,
                        'Content-Type': 'application/json'
                    } });
            });
        });
        test('request body', function () {
            return service.save(blog).then(function () {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).toMatchObject({
                    body: JSON.stringify(blog)
                });
            });
        });
    });
});
//# sourceMappingURL=AboutMeService.spec.js.map