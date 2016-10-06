#!/usr/bin/env ../../node-babel.sh

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const odd1 = numbers.filter( n => {
  return n % 2 !== 0;
});
console.info(odd1);

const odd2 = numbers.filter( n => n % 2 !== 0 );
console.info(odd2);

const odd3 = numbers.filter( n => n % 2 );
console.info(odd3);
