"use strict";

var numbers = [2, 6, 7, 8, 1];
var even = numbers.filter(function(x) {
  return x%2 === 0;
});


var numbers2 = [2, 6, 7, 8, 1];
var even2 = numbers2.filter(x => x%2 === 0);

var numbers3 = [2, 6, 7, 8, 1];
var even3 = numbers.filter((x) => {
        if (x%2 === 0) {
    console.log(x + ' is even!');
    return true;
}
});

console.log(even);
console.log(even2);
console.log(even3);