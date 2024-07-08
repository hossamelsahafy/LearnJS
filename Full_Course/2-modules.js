#!/usr/bin/node

// CommonJS, Evrey File Is Module (By Default)
// modules - Encapsulated Code (Only Share Minimum)
const Items = require('./4-Alternative')
console.log(Items.singlePerson);
const secret = "Super Secret";
const Teacher = "John";
const Friend = "Sameh";
const sayHi = (name) => {
    console.log(`Hello There ${name}`);
}
sayHi("Reyad");
sayHi(Teacher);
sayHi(Friend);


module.exports = {sayHi, Teacher, Friend};
// console.log(module);
