"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MultiClickListener_1 = require("../../utils/MultiClickListener");
var RequestOptions_1 = require("../../network/RequestOptions");
MultiClickListener_1.onMultiClick(document.getElementById('div'), 4, redirectToBackend);
function redirectToBackend() {
    var requestOptions = RequestOptions_1.RequestOptionsValues.get();
    window.location.href = requestOptions.baseUrl + "/only/juli";
}
//# sourceMappingURL=AccessBackend.js.map