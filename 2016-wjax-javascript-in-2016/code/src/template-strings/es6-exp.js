#!/usr/bin/env ../../node-babel.sh

const name = "Christian";
const count = 213;
const total = 500;

const greeting =
    `Hello ${name.toUpperCase()}!`;

const message  =
    `You have ${ 100 * count / total }% unread messages.`;

console.info(greeting);
console.info(message);
