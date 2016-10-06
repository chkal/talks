#!/usr/bin/env ../../node-babel.sh

const users = [ "Christian" ];

users.push("Jim");
// 2

users = [ "Bob" ];
// > SyntaxError: "users" is read-only
