#!/usr/bin/env ../../node-babel.sh

const text = "a,b,c,d,e";

console.log(text.split(/,/));
// > ["a", "b", "c", "d", "e"]

const [ first, second ] = text.split(/,/);

console.log(first);
// > "a"

console.log(second);
// > "b"
