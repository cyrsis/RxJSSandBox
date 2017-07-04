"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const loader_1 = require("./loader");
let output = document.getElementById("output");
let button = document.getElementById("button");
let click = rxjs_1.Observable.fromEvent(button, "click");
function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}
let subscription = loader_1.load("movies.json")
    .subscribe(renderMovies, e => console.log(`error: ${e}`), () => console.log("complete!"));
console.log(subscription);
//subscription.unsubscribe();
click.flatMap(e => loader_1.loadWithFetch("movies.json"))
    .subscribe(renderMovies, e => console.log(`error: ${e}`), () => console.log("complete"));
//# sourceMappingURL=main.js.map