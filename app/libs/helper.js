/**
 * 定义了一些帮助方法，比如AJAX，查找遍历DOM等.
 */

var Rx = require('rxjs/Rx');

/**
 * 基础的请求方法，兼容IE8.
 */
var request = (url, method) => {
    var sendRequest = function (url, observer) {
        let request = new XMLHttpRequest();

        request.open('GET', url, true);

        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status >= 200 && this.status < 400) {
                    observer.next(this);
                    observer.complete();
                } else {
                    observer.error(this);
                }
            }
        };

        request.send();
        request = null;
    }

    var source = Rx.Observable.create(observer => {
        sendRequest(url, observer);
        return () => {
            request = null;
        }
    });

    return source;
}

export function getJSON(url) {
    var stream = request(url);
    return stream;
}

export function post(data) {

}

export function getText() {

}
