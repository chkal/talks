export default class Person {

  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello " + this.name;
  }

}
