#!/usr/bin/env ../../node-babel.sh

var Promise = require( 'promise' );

function asyncFunc() {
  return Promise.reject( "Error" );
}

const promise = asyncFunc();

promise.then( result => {
  console.log( result );
} );

promise.catch( error => {
  console.log( "Failed" );
} );



