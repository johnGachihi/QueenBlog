import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'

export async function initCkEditor(targetEl) {
    let ckEditor;
    await BalloonBlockEditor.create(targetEl, {
        placeholder: 'Write the word...',
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'blockQuote'],
        ignoreEmptyParagraph: true
    }).then(editor => {
        ckEditor = editor
    }).catch(error => {
        throw error
    });

    return ckEditor
}
