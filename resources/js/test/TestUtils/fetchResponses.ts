export function jsonOk(body) {
    const mockResponse = new Response(JSON.stringify(body), {
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return Promise.resolve(mockResponse);
}
