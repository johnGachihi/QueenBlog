//TODO: Refactor network-Service and remove this function
import {RequestOptionsValues} from "../network/RequestOptions";
import {HttpMethod} from "../network/HttpMethod";

export async function logout() {
    const {csrfToken, baseUrl} = RequestOptionsValues.get();
    const url = `${baseUrl}/logout`;
    const response = await fetch(url, {
        method: HttpMethod.POST,
        headers: {
            'X-CSRF-TOKEN': csrfToken,
        },
        redirect: 'follow'
    });

    if(response.redirected) {
        window.location.href = response.url;
    }
}
