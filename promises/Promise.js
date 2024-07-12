#!/usr/bin/node
const mypromise = new Promise((resolve, reject) => {
    let connect = true;
    if (connect) {
        resolve("connection Established");
    } else {
        reject(Error("Connection Failed"));
    }
});

console.log(mypromise);
let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

mypromise.then(resolver, rejecter);
