export function show(element: HTMLElement) {
    element.classList.remove('d-none')
}

export function hide(element: HTMLElement) {
    element.classList.add('d-none');
}

export class El<T extends HTMLElement> {
    el: T;

    constructor(el: T) {
        this.el = el;
    }

    show() {
        this.el.classList.remove('d-none');
    }

    hide() { this.el.classList.add('d-none') }

    makeEditable() {
        this.el.setAttribute('contenteditable', 'true');
    }

    makeNotEditable() {
        this.el.setAttribute('contenteditable', 'false');
    }

    focusAndHighlightAllText() {
        this.el.focus();
        document.execCommand('selectAll',false,null);
    }
}
