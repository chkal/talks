#!/usr/bin/env ../../node-babel.sh

console.info( Math.max(1, 5, 2, 3) );
// > 5

const numbers = [ 1, 5, 2, 3 ];

console.info( Math.max(...numbers) );
// > 5
