#!/usr/bin/env ../../node-babel.sh

class Person {

  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello " + this.name;
  }

}

class Developer extends Person {

  constructor(name, languages) {
    super(name);
    this.languages = languages;
  }

  getLanguages() {
    return this.languages.join(", ");
  }

}

const christian = new Developer("Christian", [ "Java", "JavaScript" ] );

console.info(christian.greet());
console.info(christian.getLanguages());
// > Hello Christian
