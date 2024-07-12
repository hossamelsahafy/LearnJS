#!/usr/bin/node
const eventEmitter = require('events');
const customEmitter = new eventEmitter()
customEmitter.on('response', (name, id) => {
    console.log(`Data Recievd: \nThe Name Is ${name}\nThe Id is:${id}`)
})
customEmitter.on('response', ()=>{
    console.log("Some Other Logic Here")
})
customEmitter.emit('response', "Adam", 55);
