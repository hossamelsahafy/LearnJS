#!/usr/bin/node
const { log } = require('console');
const os = require('os');

console.log(os.arch()); // Prints the operating system CPU architecture

const user = os.userInfo();
console.log(user); // Prints the information about the current user


// Method Returns The System Uptime In Seconds
console.log(`System Uptime is ${os.uptime()} seconds`);
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
