#!../node_modules/.bin/ts-node

let value: any = "Christian";

console.log( (<string>value).substring( 0, 5 ) );

console.log( (value as string).substring( 0, 5 ) );