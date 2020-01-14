import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'

const blogContentTextArea = document.getElementById("blog-content-textarea");

BalloonBlockEditor.create(blogContentTextArea)
    .then(editor => {
        console.log(editor);
    })
    .catch(error => {
        console.error(error);
    });
