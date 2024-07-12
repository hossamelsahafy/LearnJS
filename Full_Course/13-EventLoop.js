#!/usr/bin/node
console.log('First');

setTimeout(() => {
    console.log('Second');
}, 0)
console.log('Third');

setInterval(() => {
    console.log('Interval');
}, 2000)
console.log("I Will Run First");
