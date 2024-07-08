#!/usr/bin/node
const amount = 9
if (amount < 10) {
    console.log("Small Number");
} else {
    console.log('large number')
}
console.log(`hey it is my first node app!`)

// Global - No Window
// __dirname  - Path To Current Directory
// __filename - File Name
// require    - Function To Use Modules (CommonJS)
// module     - Info About Current Module (file)
// process    - Info About Env Where The Program Is Being Executed

console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log("Hello World")
}, 1000)
