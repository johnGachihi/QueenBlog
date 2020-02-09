import InstagramService from "../../../network/InstagramService";
import {RequestOptionsValues} from "../../../network/RequestOptions";

const profileIndicatorEl = document.getElementById('instagram-profile-indicator');
const instagramService = new InstagramService(RequestOptionsValues.get());

instagramService.getUserName().then(res => {
    console.log(res);
    if (res.error !== undefined) {
        profileIndicatorEl.innerText = 'No logged in account'
    } else if (res.username !== undefined) {
        profileIndicatorEl.innerText = 'Account: ' + res.username;
    }
}).catch(err => {
    profileIndicatorEl.innerText = 'Error loading instagram account. Try refreshing page'
});
