"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function jsonOk(body) {
    var mockResponse = new Response(JSON.stringify(body), {
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    });
    return Promise.resolve(mockResponse);
}
exports.jsonOk = jsonOk;
//# sourceMappingURL=fetchResponses.js.map