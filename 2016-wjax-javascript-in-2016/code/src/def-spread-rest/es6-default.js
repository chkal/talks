#!/usr/bin/env ../../node-babel.sh

function add(a, b = 10) {
  return a + b;
}

console.log( add( 3, 5 ) );
// > 8

console.log( add( 3 ) );
// > 13
