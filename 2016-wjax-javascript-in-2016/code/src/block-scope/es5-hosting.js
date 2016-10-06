#!/usr/bin/env node

console.log(foo);
// -> undefinied

var foo = "bar";

console.log(bar);
// ReferenceError: bar is not defined
