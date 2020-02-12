import {RequestOptionsValues} from "../network/RequestOptions";

const {csrfToken, baseUrl} = RequestOptionsValues.get();

export async function initCkEditor(targetEl) {
    let ckEditor;
    await BalloonEditor.create(targetEl, {
        placeholder: 'Write the word...',
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'blockQuote'],
        ignoreEmptyParagraph: true,
        simpleUpload: {
            uploadUrl: `${baseUrl}/blog-image-upload`,
            headers: {
                'X-CSRF-TOKEN': csrfToken
            }
        },
        image: {
            toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],
            styles: ['full', 'alignLeft', 'alignRight']
        }
    }).then(editor => {
        ckEditor = editor
    }).catch(error => {
        throw error
    });
    return ckEditor
}
