function xhrFetch(url, options = {method: 'GET', headers: null, body: null}) {
    if (options.method !== 'GET' && options.method !== 'POST') {
        return new Error('Wrong method, must be \'GET\' or \'POST\'');
    }
    const xmlHttpRequest = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xmlHttpRequest.open(options.method, url, true);
        for (let key in options.headers) {
            if (options.headers.hasOwnProperty(key)) {
                xmlHttpRequest.setRequestHeader(key, options.headers[key])
            }
        }
        xmlHttpRequest.send(options.body);
        xmlHttpRequest.onload = function () {
            if (xmlHttpRequest.status < 200 && xmlHttpRequest.status > 300) {
                reject(`${xmlHttpRequest.status}: ${xmlHttpRequest.statusText}`);
            } else {
                resolve(xmlHttpRequest.response);
            }
        };
    });
}
module.exports = xhrFetch;

