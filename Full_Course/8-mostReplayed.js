#!/usr/bin/node
const {readFileSync, writeFileSync} = require('fs');
console.log("Start!!!")
const first = readFileSync('./Dir/First.txt', 'utf8');
const second = readFileSync('./Dir/Sub/Test', 'utf8');
// console.log(first, second);

writeFileSync('./Dir/result.txt',
    `Here Is The Result: ${first} ${second}`,
    {flag: 'a'});
console.log("Done With That Task")
console.log("Starting The Next Task!!!")
