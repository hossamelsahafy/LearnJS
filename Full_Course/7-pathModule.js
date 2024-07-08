#!/usr/bin/node

const path = require('path');
console.log(path.sep);

const filePath = path.join('/Dir', "Sub", "Test")
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'Dir', 'Sub', 'Test');
console.log(absolute);
