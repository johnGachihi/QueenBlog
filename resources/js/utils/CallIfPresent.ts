export function callCallbackIfPresent(callback: () => void) {
    if (callback !== undefined) {
        callback();
    }
}
