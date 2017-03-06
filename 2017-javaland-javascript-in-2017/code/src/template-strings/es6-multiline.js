#!/usr/bin/env ../../node-babel.sh

const name = "Christian";
const count = 213;

const message =
    `<h1>Hello ${name}</h1>
     <p>
       You have ${count} unread messages
     </p>`;

console.info(message);
