#!/usr/bin/node

const { readFile, writeFile } = require('fs');
readFile('./Dir/First.txt','utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const First = result;
    readFile('./Dir/Sub/Test','utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        // console.log(result);
        const second = result;
        writeFile('./Dir/result.txt',
            `Here Is The Result: ${First} ${second}`, (err) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log("Meow Meow");
            })
    })
})
