export default class Timeout {
    delay: number;
    action: TimerHandler;
    timeoutID: number;

    setTimeOut(delay: number, action: TimerHandler) {
        this.delay = delay;
        this.action = action;

        this.timeoutID = setTimeout(this.action, this.delay);
    }

    resetTimeOut() {
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(this.action, this.delay);
    }

    isSet(): boolean {
        return this.timeoutID !== undefined;
    }
}
