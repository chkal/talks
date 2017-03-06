#!/usr/bin/env ../../node-babel.sh

function* sequence() {
  let i = 1;
  while(i <= 3) {
    yield i;
    i++;
  }
}

let seq = sequence();

console.info(seq.next());
// > { value: 1, done: false }

console.info(seq.next());
// > { value: 2, done: false }

console.info(seq.next());
// > { value: 3, done: false }

console.info(seq.next());
// > { value: undefined, done: true }
