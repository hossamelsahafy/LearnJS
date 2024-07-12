#!/usr/bin/node
function sum(...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
let x = sum(10, 5);
console.log(x);
