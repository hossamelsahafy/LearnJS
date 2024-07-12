/*
Named Exports:
These allow a module to export multiple values.
Each exported value has its own name. Other modules can import these values using their names.
Here’s an example:

export const name = "John";
export const age = 30;

You can import named exports like this:

import { name, age } from "./person.js";

In this code, { name, age } corresponds to the named exports from person.js.


/* =============================================================*/


/*
Default Exports:
Each module can have one default export.
This is the value that will be imported if you import from the module without using curly braces {}.
Here’s an example:

export default "Hello, world!";

You can import the default export like this:

import message from "./message.js";

*/
