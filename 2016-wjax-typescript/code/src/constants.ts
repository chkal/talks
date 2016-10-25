#!../node_modules/.bin/ts-node

const users = [ "Christian" ];

users.push( "Jim" );
// > 2

users = [ "Bob" ];
// Error: Left-hand side of assignment expression 
//        cannot be a constant or a read-only property.