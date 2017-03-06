#!/usr/bin/env ../../node-babel.sh

function format(message, ...params) {
  for(let p of params) {
    message = message.replace(/\?/, p);
  }
  return message;
}

console.info(
  format("Die Zahl ? ist die Summe aus ? und ?", 10, 3, 7)
);
// > Die Zahl 10 ist die Summe aus 3 und 7
