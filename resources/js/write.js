import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'

const blogContentTextArea = document.getElementById("blog-content-textarea");

BalloonBlockEditor.create(blogContentTextArea, {
    placeholder: 'Write the word'
})
    .then(editor => {
        console.log(editor);
    })
    .catch(error => {
        console.error(error);
    });
