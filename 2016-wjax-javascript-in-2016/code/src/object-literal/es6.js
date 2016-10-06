#!/usr/bin/env ../../node-babel.sh

const lastname = "Kaltepoth";

const person = {
  firstname: "Christian",
  lastname,
  greet() {
    return `Hello ${this.firstname} ${this.lastname}`;
  }
};

console.info(person.greet());
