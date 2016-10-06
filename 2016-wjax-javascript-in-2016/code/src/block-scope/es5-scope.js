#!/usr/bin/env node

function someFunction() {

  for(var i = 0; i < 4; i++) {
    var j = i * i;
  }

  console.log(j);
  // > 9

}

someFunction();
