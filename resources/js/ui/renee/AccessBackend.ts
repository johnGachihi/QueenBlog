import {onMultiClick} from "../../utils/MultiClickListener";
import {RequestOptionsValues} from "../../network/RequestOptions";

onMultiClick(
    document.getElementById('div'),
    4,
    redirectToBackend
);

function redirectToBackend() {
    const requestOptions = RequestOptionsValues.get();
    window.location.href = `${requestOptions.baseUrl}/only/juli`;
}
