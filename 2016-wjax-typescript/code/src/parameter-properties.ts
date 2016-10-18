#!../node_modules/.bin/ts-node

class Person {

  constructor( private name: string ) {
  }

  greet(): string {
    return "Hello " + this.name;
  }

}

const person = new Person( "Christian" );
console.log( person.greet() );