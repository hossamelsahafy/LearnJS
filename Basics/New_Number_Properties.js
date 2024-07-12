#!/usr/bin/node
/*
EPSILON:
Number.EPSILON represents the difference between 1 and the smallest floating point number greater than 1.
It’s approximately 2.220446049250313e-16.
This can be useful when you want to compare floating point numbers for equality with a certain precision.
*/
console.log(Number.EPSILON);  // Output: 2.220446049250313e-16
console.log("=".repeat(40));


/* =================================================================== */


/*
MIN_SAFE_INTEGER and MAX_SAFE_INTEGER:
These represent the minimum and maximum safe integer in JavaScript.
An integer is considered safe in JavaScript if it can exactly represent a double-precision number,
which means it must be between -(2^53 - 1) and 2^53 - 1.
Number.MIN_SAFE_INTEGER is -9007199254740991 and Number.MAX_SAFE_INTEGER is 9007199254740991.
*/
console.log(Number.MAX_SAFE_INTEGER);  // Output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);  // Output: -9007199254740991
console.log("=".repeat(40));


/* =================================================================== */


/*
Number.isInteger():
This method determines whether the passed value is an integer.
It returns true if the value is an integer, and false otherwise.
*/
console.log(Number.isInteger(10));  // Output: true
console.log(Number.isInteger(10.5));  // Output: false
console.log("=".repeat(40));


/* =================================================================== */


/*
Number.isSafeInteger():
This method determines whether the provided value is a number that is a safe integer.
A safe integer is an integer that can be exactly represented as a double precision number,
which means it must be between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER,
inclusive.
It returns true if the value is a safe integer, and false otherwise.
*/
console.log(Number.isSafeInteger(10));  // Output: true
console.log(Number.isSafeInteger(12345678901234567890));  // Output: false
