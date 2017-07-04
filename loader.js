"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function load(url) {
    return rxjs_1.Observable.create(observer => {
        let xhr = new XMLHttpRequest();
        let onLoad = () => {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            }
            else {
                observer.error(xhr.statusText);
            }
        };
        xhr.addEventListener("load", onLoad);
        xhr.open("GET", url);
        xhr.send();
        return () => {
            console.log("cleanup");
            xhr.removeEventListener("load", onLoad);
            xhr.abort();
        };
    }).retryWhen(retryStrategy({ attempts: 3, delay: 1500 }));
}
exports.load = load;
function loadWithFetch(url) {
    return rxjs_1.Observable.defer(() => {
        return rxjs_1.Observable.fromPromise(fetch(url).then(r => {
            if (r.status === 200) {
                return r.json();
            }
            else {
                return Promise.reject(r);
            }
        }));
    }).retryWhen(retryStrategy());
}
exports.loadWithFetch = loadWithFetch;
function retryStrategy({ attempts = 4, delay = 1000 } = {}) {
    return function (errors) {
        return errors
            .scan((acc, value) => {
            acc += 1;
            if (acc < attempts) {
                return acc;
            }
            else {
                throw new Error(value);
            }
        }, 0)
            .delay(delay);
    };
}
//# sourceMappingURL=loader.js.map