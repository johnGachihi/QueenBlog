"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequestOptionsValues = /** @class */ (function () {
    function RequestOptionsValues() {
    }
    RequestOptionsValues.get = function () {
        return {
            csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            baseUrl: document.querySelector('meta[name="base-url"]').getAttribute('content')
        };
    };
    return RequestOptionsValues;
}());
exports.RequestOptionsValues = RequestOptionsValues;
//# sourceMappingURL=RequestOptions.js.map