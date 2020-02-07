import {performAsyncTask} from "../../utils/PerformAsyncFuncWithCallbacks";

describe('test PerformAsyncFuncWithCallbacks', () => {
    let mockOnBeforeStartCallback;
    let mockOnSuccessCallback ;
    let mockOnFailureCallback;

    beforeEach(() => {
        mockOnBeforeStartCallback = jest.fn();
        mockOnSuccessCallback = jest.fn();
        mockOnFailureCallback = jest.fn();
    });

    describe('When asyncTask resolves successfully', () => {
        let mockAsyncTaskSuccessful;
        let taskPromise;

        beforeEach(() => {
            mockAsyncTaskSuccessful = jest.fn(() => Promise.resolve("Success"));

            taskPromise = performAsyncTask(mockAsyncTaskSuccessful)
                .onBeforeStart(mockOnBeforeStartCallback)
                .onSuccess(mockOnSuccessCallback)
                .onFailure(mockOnFailureCallback)
        });

        test('async task called once', () => {
            expect(mockAsyncTaskSuccessful).toHaveBeenCalledTimes(1);
        });

        test('onBeforeStartCallback called once', () => {
            return taskPromise.then(() => {
                expect(mockOnBeforeStartCallback).toHaveBeenCalledTimes(1);
            })
        });

        test('onSuccessCallback called once', () => {
            return taskPromise.then(() => {
                expect(mockOnSuccessCallback).toHaveBeenCalledTimes(1);
            })
        });

        test('onSuccessCallback called with async task result', () => {
            return taskPromise.then(() => {
                expect(mockOnSuccessCallback).toHaveBeenCalledWith("Success");
            });
        });

        test('onFailure not called', () => {
            return taskPromise.then(() => {
                expect(mockOnFailureCallback).not.toHaveBeenCalled()
            });
        });
    });

    describe('When asyncTask fails', () => {
        let mockAsyncTaskFailure;
        let taskPromise;

        beforeEach(() => {
            mockAsyncTaskFailure = jest.fn(() => Promise.reject("error"));

            taskPromise = performAsyncTask(mockAsyncTaskFailure)
                .onBeforeStart(mockOnBeforeStartCallback)
                .onSuccess(mockOnSuccessCallback)
                .onFailure(mockOnFailureCallback)
        });

        test('async task called once', () => {
            expect(mockAsyncTaskFailure).toHaveBeenCalledTimes(1);
        });

        test('onBeforeStartCallback called once', () => {
            expect(mockOnBeforeStartCallback).toHaveBeenCalledTimes(1);
        });

        test('onSuccessCallback not called', () => {
            return taskPromise.catch(() => {
                expect(mockOnSuccessCallback).not.toHaveBeenCalled();
            });
        });

        test('onFailureCallback called once', () => {
            return taskPromise.catch(() => {
                expect(mockOnSuccessCallback).toHaveBeenCalledTimes(1);
            })
        });

        test('onFailure called with error', () => {
            return taskPromise.catch(() => {
                expect(mockOnFailureCallback).toHaveBeenCalledWith("error")
            });
        })
    })
});
