#!/usr/bin/env ../../node-babel.sh

function someFunction() {

  for(var i = 0; i < 4; i++) {
    let j = i * i;
  }

  console.log(j);
  // > ReferenceError: j is not defined

}

someFunction();
