#!/usr/bin/env node

var lastname = "Kaltepoth";

var person = {
  firstname: "Christian",
  lastname: lastname,
  greet: function() {
    return "Hello " + this.firstname + " " + this.lastname;
  }
};

console.info(person.greet());
