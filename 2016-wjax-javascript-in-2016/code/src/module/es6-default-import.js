#!/usr/bin/env ../../node-babel.sh

import Person from "./person.js";

const christian = new Person("Christian");

console.log(christian.greet());
// > Hello Christian
