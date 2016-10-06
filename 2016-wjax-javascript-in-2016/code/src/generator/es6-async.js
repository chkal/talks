#!/usr/bin/env ../../node-babel.sh

co(function*() {

  let result1 = yield fetchData();
  console.log("Got: " + result1);

  let result2 = yield fetchData();
  console.log("Got: " + result2);

  let result3 = yield fetchData();
  console.log("Got: " + result3);

});

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(Math.random());
    }, 1000);
  });
}

function co(fn) {

  var generator = fn();

  function exec(result) {
    let next = generator.next(result);
    if(!next.done && next.value) {
      next.value.then(r => exec(r));
    }
  }

  exec();

}
