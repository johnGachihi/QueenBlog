"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ContactMessageService_1 = __importDefault(require("../../../network/ContactMessageService"));
var RequestOptions_1 = require("../../../network/RequestOptions");
var PerformAsyncFuncWithCallbacks_1 = require("../../../utils/PerformAsyncFuncWithCallbacks");
$('#contact-form').on('submit', function (e) {
    PerformAsyncFuncWithCallbacks_1.performAsyncTask(sendContactMessage)
        .onBeforeStart(onBeforeStartFormSubmission)
        .onSuccess(onSuccessfulSubmission)
        .onFailure(onFailureInSubmitting);
    e.preventDefault();
});
function sendContactMessage() {
    return new ContactMessageService_1.default(RequestOptions_1.RequestOptionsValues.get()).send(getContactMessage());
}
function getContactMessage() {
    var contactForm = document.getElementById('contact-form');
    var formData = new FormData(contactForm);
    return {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
}
function onBeforeStartFormSubmission() {
    $('#contact-submit-status').text('Submitting...');
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
//# sourceMappingURL=contact.js.map