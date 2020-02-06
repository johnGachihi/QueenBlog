import ContactMessageService from "../../../network/ContactMessageService";
import {RequestOptionsValues} from "../../../network/RequestOptions";

$('#contact-form').on('submit', e => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    const contactFormData = new FormData(contactForm as HTMLFormElement);
    const contactMessageService = new ContactMessageService(RequestOptionsValues.get());
    contactMessageService.send({
        name: contactFormData.get('name') as string,
        email: contactFormData.get('email') as string,
        subject: contactFormData.get('subject') as string,
        message: contactFormData.get('message') as string
    })
});

function getMessageFromForm(form) {

}
