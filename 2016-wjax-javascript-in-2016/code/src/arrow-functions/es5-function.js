#!/usr/bin/env node

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

var odd = numbers.filter(function(n) {
  return n % 2 !== 0;
});

console.info(odd);
// > [ 1, 3, 5, 7, 9 ]
