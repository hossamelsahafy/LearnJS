#!/usr/bin/node
// Import Teacher and Friend From modules File

const { sayHi, Teacher, Friend } = require("./2-modules");

console.log({ Teacher, Friend });
sayHi("Meow");
sayHi(Teacher);
sayHi(Friend);

require("./5-mind");
