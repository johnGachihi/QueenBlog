import Timeout from "../write/Timeout";

let clickCount = 0;
const timeout = new Timeout();

export function onMultiClick(element: HTMLElement, requiredClicks: number, callback: () => void) {
    element.addEventListener('click', ev => {
        onEveryClick(requiredClicks, callback);
    })
}

function onEveryClick(requiredClicks: number, callback: () => void) {
    clickCount++;

    if (clickCount >= requiredClicks) {
        callback();
        resetClickCount()
    }

    if (timeout.isSet())
        timeout.resetTimeOut();
    else
        timeout.setTimeOut(500, resetClickCount)
}

function resetClickCount() {
    clickCount = 0;
}
