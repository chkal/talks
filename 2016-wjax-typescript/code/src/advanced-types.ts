#!../node_modules/.bin/ts-node

let t: string|number;

t = 42;
// > OK

t = "foobar";
// OK

//t = true;
// Type 'boolean' is not assignable to type 'string | number'

type MyType = string|number;

let x: MyType = "foobar";


type Mode = "simple" | "advanced";

let z: Mode = "simple";

//z = "foobar";
