#!/usr/bin/node
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["Oranges", 300]
]);
for (let [fruit, quantity] of fruits) {
    console.log(`There are ${quantity} of ${fruit}`);
};
