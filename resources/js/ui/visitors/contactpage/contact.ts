import ContactMessageService from "../../../network/ContactMessageService";
import {RequestOptionsValues} from "../../../network/RequestOptions";
import ContactMessage from "../../../models/ContactMessage";
import {performAsyncTask} from "../../../utils/PerformAsyncFuncWithCallbacks";

$('#contact-form').on('submit', e => {
    performAsyncTask(sendContactMessage)
        .onBeforeStart(onBeforeStartFormSubmission)
        .onSuccess(onSuccessfulSubmission)
        .onFailure(onFailureInSubmitting);

    e.preventDefault();
});

function sendContactMessage() {
    return new ContactMessageService(RequestOptionsValues.get()).send(getContactMessage())
}

function getContactMessage(): ContactMessage {
    const contactForm = document.getElementById('contact-form');
    const formData = new FormData(contactForm as HTMLFormElement);
    return {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string
    }
}

function onBeforeStartFormSubmission() {
    $('#contact-submit-status').text('Submitting...')
}

function onSuccessfulSubmission(res) {
    if (res.status == 'ok')
        $('#contact-submit-status').text('Submitted');
    else
        onFailureInSubmitting("");
}

function onFailureInSubmitting(err) {
    $('#contact-submit-status').text('Submission failed.');
}

