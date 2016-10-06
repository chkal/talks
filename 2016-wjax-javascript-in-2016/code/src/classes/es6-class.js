#!/usr/bin/env ../../node-babel.sh

class Person {

  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello " + this.name;
  }

}

const christian = new Person("Christian");

console.info(christian.greet());
// > Hello Christian
