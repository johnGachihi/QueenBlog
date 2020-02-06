"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ContactMessageService_1 = __importDefault(require("../../../network/ContactMessageService"));
var RequestOptions_1 = require("../../../network/RequestOptions");
$('#contact-form').on('submit', function (e) {
    e.preventDefault();
    var contactForm = document.getElementById('contact-form');
    var contactFormData = new FormData(contactForm);
    var contactMessageService = new ContactMessageService_1.default(RequestOptions_1.RequestOptionsValues.get());
    contactMessageService.send({
        name: contactFormData.get('name'),
        email: contactFormData.get('email'),
        subject: contactFormData.get('subject'),
        message: contactFormData.get('message')
    });
});
function getMessageFromForm(form) {
}
//# sourceMappingURL=contact.js.map