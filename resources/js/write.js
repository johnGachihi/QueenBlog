import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'

const contentTextArea = document.getElementById("blog-content-textarea");

contentTextArea.addEventListener('input', e => {
    autoExpand(e.target)
}, false);

function autoExpand(field) {
    field.style.height = 'inherit';
    const computed = window.getComputedStyle(field);

    var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
        + parseInt(computed.getPropertyValue('padding-top'), 10)
        + field.scrollHeight
        + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';
}


const blogContentTextArea = document.getElementById("blog-content-textarea");

BalloonBlockEditor.create(blogContentTextArea)
    .then(editor => {
        console.log(editor);
    })
    .catch(error => {
        console.error(error);
    });
