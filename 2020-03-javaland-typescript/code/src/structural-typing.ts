#!../node_modules/.bin/ts-node

interface Foo {
  value: number;
}

interface Bar {
  value: number;
}

let foo: Foo = {
  value: 3
};

let bar: Bar = foo;   // OK
