import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'

const blogContentTextArea = document.getElementById("blog-content-textarea");
let ckEditor;

BalloonBlockEditor.create(blogContentTextArea, {
    placeholder: 'Write the word...',
    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'blockQuote' ]
})
    .then(editor => {
        console.log(editor);
        ckEditor = editor;
        console.log(Array.from( ckEditor.ui.componentFactory.names() ));
    })
    .catch(error => {
        console.error(error);
    });
