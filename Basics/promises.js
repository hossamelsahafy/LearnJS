#!/usr/bin/node
const promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve("MEOW MEOW MEOW"); }, 3000);
    });
promise.then(function(value) {
    console.log(value);
});
