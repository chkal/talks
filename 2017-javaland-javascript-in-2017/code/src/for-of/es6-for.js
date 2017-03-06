#!/usr/bin/env ../../node-babel.sh

const primes = [ 3, 5, 7, 11, 13 ];

for( let p of primes) {
  console.log( p );
}

const set = new Set();
set.add("foo").add("bar").add("foo");

for( let s of set ) {
  console.log( s );
}
