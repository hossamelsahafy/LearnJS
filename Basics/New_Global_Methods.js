#!/usr/bin/node
/*
isFinite():
This is a global function in JavaScript that checks whether a value is a finite number.
It returns false if the value is Infinity, -Infinity, or NaN (Not a Number);
otherwise, it returns true. Here’s an example:
*/

console.log(isFinite(10/0));    // Output: false
console.log(isFinite(10/1));    // Output: true
console.log("=".repeat((40)));


/* ========================================================= */

/*
isNaN():
This is another global function in JavaScript that checks whether a value is NaN.
It returns true if the value is NaN; otherwise, it returns false. Here’s an example:
*/
console.log(isNaN("Hello")); //Output: true
