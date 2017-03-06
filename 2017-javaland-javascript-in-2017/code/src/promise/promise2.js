#!/usr/bin/env ../../node-babel.sh

var Promise = require( 'promise' );

function asyncFunc1() {
  return Promise.resolve( 42 );
}

function asyncFunc2() {
  return Promise.resolve( 42 );
}

function asyncFunc3() {
  return Promise.resolve( 42 );
}

asyncFunc1()
  .then( ( result1 ) => {
    return asyncFunc2();
  } )
  .then( result2 => {
    return asyncFunc3();
  } )
  .then( result3 => {
    // handle final result
  } )
  .catch( () => {
    // handle any error
  } );
  
  

