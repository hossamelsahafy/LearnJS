#!/usr/bin/node
// const{ writeFileSync } = require('fs');
// for (let i = 0; i < 1000; i++) {
//     writeFileSync('./Dir/Big.txt', `Hello World ${i}\n`, { flag: 'a'});
// }

const { error } = require('console');
const { createReadStream } = require('fs');
const stream = createReadStream('./Dir/Big.txt', {highWaterMark:9000,
    encoding:'utf8'});
stream.on('data', (result) => {
        console.log(result);
})
stream.on('error', (err) => console.log(err))
