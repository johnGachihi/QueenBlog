"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PerformAsyncFuncWithCallbacks_1 = require("../../utils/PerformAsyncFuncWithCallbacks");
describe('test PerformAsyncFuncWithCallbacks', function () {
    var mockOnBeforeStartCallback;
    var mockOnSuccessCallback;
    var mockOnFailureCallback;
    beforeEach(function () {
        mockOnBeforeStartCallback = jest.fn();
        mockOnSuccessCallback = jest.fn();
        mockOnFailureCallback = jest.fn();
    });
    describe('When asyncTask resolves successfully', function () {
        var mockAsyncTaskSuccessful;
        var taskPromise;
        beforeEach(function () {
            mockAsyncTaskSuccessful = jest.fn(function () { return Promise.resolve("Success"); });
            taskPromise = PerformAsyncFuncWithCallbacks_1.performAsyncTask(mockAsyncTaskSuccessful)
                .onBeforeStart(mockOnBeforeStartCallback)
                .onSuccess(mockOnSuccessCallback)
                .onFailure(mockOnFailureCallback);
        });
        test('async task called once', function () {
            expect(mockAsyncTaskSuccessful).toHaveBeenCalledTimes(1);
        });
        test('onBeforeStartCallback called once', function () {
            return taskPromise.then(function () {
                expect(mockOnBeforeStartCallback).toHaveBeenCalledTimes(1);
            });
        });
        test('onSuccessCallback called once', function () {
            return taskPromise.then(function () {
                expect(mockOnSuccessCallback).toHaveBeenCalledTimes(1);
            });
        });
        test('onSuccessCallback called with async task result', function () {
            return taskPromise.then(function () {
                expect(mockOnSuccessCallback).toHaveBeenCalledWith("Success");
            });
        });
        test('onFailure not called', function () {
            return taskPromise.then(function () {
                expect(mockOnFailureCallback).not.toHaveBeenCalled();
            });
        });
    });
    describe('When asyncTask fails', function () {
        var mockAsyncTaskFailure;
        var taskPromise;
        beforeEach(function () {
            mockAsyncTaskFailure = jest.fn(function () { return Promise.reject("error"); });
            taskPromise = PerformAsyncFuncWithCallbacks_1.performAsyncTask(mockAsyncTaskFailure)
                .onBeforeStart(mockOnBeforeStartCallback)
                .onSuccess(mockOnSuccessCallback)
                .onFailure(mockOnFailureCallback);
        });
        test('async task called once', function () {
            expect(mockAsyncTaskFailure).toHaveBeenCalledTimes(1);
        });
        test('onBeforeStartCallback called once', function () {
            expect(mockOnBeforeStartCallback).toHaveBeenCalledTimes(1);
        });
        test('onSuccessCallback not called', function () {
            return taskPromise.catch(function () {
                expect(mockOnSuccessCallback).not.toHaveBeenCalled();
            });
        });
        test('onFailureCallback called once', function () {
            return taskPromise.catch(function () {
                expect(mockOnSuccessCallback).toHaveBeenCalledTimes(1);
            });
        });
        test('onFailure called with error', function () {
            return taskPromise.catch(function () {
                expect(mockOnFailureCallback).toHaveBeenCalledWith("error");
            });
        });
    });
});
//# sourceMappingURL=PerformAsyncFuncWithCallbacks.spec.js.map