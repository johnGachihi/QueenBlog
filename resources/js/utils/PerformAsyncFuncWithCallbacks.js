"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function performAsyncTask(task) {
    return new OnBeforeStart(task);
}
exports.performAsyncTask = performAsyncTask;
var OnBeforeStart = /** @class */ (function () {
    function OnBeforeStart(task) {
        this.task = task;
    }
    OnBeforeStart.prototype.onBeforeStart = function (onBeforeStartCallback) {
        return new OnSuccess(this.task, onBeforeStartCallback);
    };
    return OnBeforeStart;
}());
var OnSuccess = /** @class */ (function () {
    function OnSuccess(task, onBeforeStartCallback) {
        this.task = task;
        this.onBeforeStartCallback = onBeforeStartCallback;
    }
    OnSuccess.prototype.onSuccess = function (onSuccessCallback) {
        return new OnFailure(this.task, this.onBeforeStartCallback, onSuccessCallback);
    };
    return OnSuccess;
}());
var OnFailure = /** @class */ (function () {
    function OnFailure(task, onBeforeStartCallback, onSuccessCallback) {
        this.task = task;
        this.onBeforeStartCallback = onBeforeStartCallback;
        this.onSuccessCallback = onSuccessCallback;
    }
    OnFailure.prototype.onFailure = function (onFailureCallback) {
        return new Executor(this.task, this.onBeforeStartCallback, this.onSuccessCallback, onFailureCallback);
    };
    return OnFailure;
}());
var Executor = /** @class */ (function () {
    function Executor(task, onBeforeStartCallback, onSuccessCallback, onFailureCallback) {
        onBeforeStartCallback();
        return task().then(onSuccessCallback)
            .catch(onFailureCallback);
    }
    return Executor;
}());
//# sourceMappingURL=PerformAsyncFuncWithCallbacks.js.map