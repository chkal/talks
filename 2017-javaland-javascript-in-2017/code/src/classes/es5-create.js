#!/usr/bin/env node

var Person = function(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return "Hello " + this.name;
}

var christian = new Person("Christian");

console.info(christian.greet());
// > Hello Christian
