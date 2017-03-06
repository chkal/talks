#!/usr/bin/env node

var Person = {
  greet: function() {
    return "Hello " + this.name;
  }
};

var christian = Object.create(Person, {
  name: {
    value: "Christian"
  }
});

console.info(christian.greet());
// > Hello Christian
