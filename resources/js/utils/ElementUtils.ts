import {initCkEditor} from '../write/editor';
import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'


export class El<T extends HTMLElement> {
    el: T;
    editableMaker: EditableMaker;

    constructor(el: T, editableMaker: EditableMaker = new HtmlContentEditableMaker()) {
        this.el = el;
        this.editableMaker = editableMaker;
    }

    show() {
        this.el.classList.remove('d-none');
    }

    hide() {
        this.el.classList.add('d-none')
    }

    makeEditable() {
        this.editableMaker.makeEditable(this.el);
    }

    makeNotEditable() {
        this.editableMaker.makeNotEditable(this.el);
    }

    focusAndHighlightAllText() {
        this.el.focus();
        document.execCommand('selectAll', false, null);
    }

    on(event: string, handler: (e: Event) => void) {
        this.el.addEventListener(event, handler);
    }
}

interface EditableMaker {
    makeEditable(element: HTMLElement);

    makeNotEditable(element: HTMLElement);
}

class HtmlContentEditableMaker implements EditableMaker {
    makeEditable(element: HTMLElement) {
        element.setAttribute('contenteditable', 'true');
        document.execCommand("defaultParagraphSeparator", false, "p"); //
    }

    makeNotEditable(element: HTMLElement) {
        element.setAttribute('contenteditable', 'false');
    }
}

export class WysiwigEditableMaker implements EditableMaker {
    editor: BalloonBlockEditor;

    makeEditable(element: HTMLElement) {
        const content = element.innerHTML;
        element.innerHTML = "";
        console.log("makeEditable - wysiwig");
        initCkEditor(element)
            .then(editor => {
                this.editor = editor;
                editor.setData(content);
            })
            .catch(console.log);
    }

    makeNotEditable(element: HTMLElement) {
        if (this.editor !== undefined) {
            console.log('makeNotEditable', this.editor);
            this.editor.destroy()
                .then(res => {
                    this.editor = undefined;     // Fishy stuff.
                })
                .catch(console.log);
        }
    }
}
