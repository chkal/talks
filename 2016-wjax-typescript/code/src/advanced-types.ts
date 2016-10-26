#!../node_modules/.bin/ts-node

let t: string|number;

t = 42;
// > OK

t = "foobar";
// OK

//t = true;
// Type 'boolean' is not assignable to type 'string | number'
