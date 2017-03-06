#!/usr/bin/env node

function asyncFunc1( callback ) {
  callback();
}
function asyncFunc2( callback ) {
  callback();
}
function asyncFunc3( callback ) {
  callback();
}
function asyncFunc4( callback ) {
  callback();
}

asyncFunc1( function () {
  asyncFunc2( function () {
    asyncFunc3( function () {
      asyncFunc4( function () {
        console.log( ":-(" );
      } );
    } );
  } );
} );

