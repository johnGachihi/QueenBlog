type AsyncFunc = () => Promise<any>;
type CallbackFun0 = () => void;
type CallbackFun1 = (p) => void;


export function performAsyncTask(task: AsyncFunc) {
    return new OnBeforeStart(task);
}

class OnBeforeStart {
    private readonly task: AsyncFunc;

    constructor(task: AsyncFunc) {
        this.task = task;
    }

    onBeforeStart(onBeforeStartCallback: CallbackFun0) {
        return new OnSuccess(this.task, onBeforeStartCallback);
    }
}

class OnSuccess {
    private readonly task: AsyncFunc;
    private readonly onBeforeStartCallback: CallbackFun0;

    constructor(task: () => Promise<any>, onBeforeStartCallback: CallbackFun0) {
        this.task = task;
        this.onBeforeStartCallback = onBeforeStartCallback;
    }

    onSuccess(onSuccessCallback: CallbackFun1) {
        return new OnFailure(this.task, this.onBeforeStartCallback, onSuccessCallback);
    }
}

class OnFailure {
    private task: AsyncFunc;
    private readonly onBeforeStartCallback: CallbackFun0;
    private readonly onSuccessCallback: CallbackFun1;

    constructor(task: AsyncFunc,
                onBeforeStartCallback: CallbackFun0,
                onSuccessCallback: CallbackFun1
    ) {
        this.task = task;
        this.onBeforeStartCallback = onBeforeStartCallback;
        this.onSuccessCallback = onSuccessCallback;
    }

    onFailure(onFailureCallback: CallbackFun1) { // Is using (err) => void here more expressive than CallbackFun1
        return new Executor(
            this.task,
            this.onBeforeStartCallback,
            this.onSuccessCallback,
            onFailureCallback
        );
    }
}

class Executor {
    constructor(task: AsyncFunc,
                onBeforeStartCallback: CallbackFun0,
                onSuccessCallback: CallbackFun1,
                onFailureCallback: CallbackFun1
    ) {
        onBeforeStartCallback();
        return task().then(onSuccessCallback)
            .catch(onFailureCallback)
    }
}
