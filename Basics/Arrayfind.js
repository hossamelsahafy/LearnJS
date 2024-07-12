#!/usr/bin/node
const numbers = [1, 2, 3, 4, 5, 6]
let first = numbers.find(func);
function func(v, i, a){
    return v > 2;
}
console.log(first);
