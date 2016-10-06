#!/usr/bin/env ../../node-babel.sh

function* sequence(max) {
  let i = 1;
  while(i <= max) {
    yield i;
    i++;
  }
}

for( let i of sequence(10) ) {
  console.info(i);
}
