#!/usr/bin/env ../../node-babel.sh

// Sets
var tags = new Set();
tags.add("java");
tags.add("javascript");
tags.add("java");

console.log(tags.size === 2);
console.log(tags.has("java") === true);

// Maps
var map = new Map();
map.set("hello", 42);

console.log(map.get("hello"));
