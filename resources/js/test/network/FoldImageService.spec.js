"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
require("isomorphic-fetch");
var fetchResponses_1 = require("../TestUtils/fetchResponses");
var FoldImageService_1 = __importDefault(require("../../network/FoldImageService"));
var requestOptions = {
    csrfToken: 'abc',
    baseUrl: 'http://localhost'
};
describe('Test FoldImageService', function () {
    var service;
    beforeEach(function () {
        service = new FoldImageService_1.default(requestOptions);
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
        test('request fetch-url is correct', function () {
            return service.save(formData).then(function () {
                //@ts-ignore
                expect(fetch.getCall(0).args[0]).toBe('http://localhost/fold_image');
            });
        });
        test('test request headers contain Accept and X-CSRF-TOKEN', function () {
            return service.save(formData).then(function () {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).toMatchObject({
                    headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': requestOptions.csrfToken
                    }
                });
            });
        });
        test('test request headers not contain Content-Type', function () {
            return service.save(formData).then(function () {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).not.toMatchObject({
                    headers: { 'Content-Type': 'application/json' }
                });
            });
        });
        test('test request body is as given', function () {
            return service.save(formData).then(function () {
                //@ts-ignore
                expect(fetch.getCall(0).args[1]).toMatchObject({
                    body: formData
                });
            });
        });
    });
});
//# sourceMappingURL=FoldImageService.spec.js.map