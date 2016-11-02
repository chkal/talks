"use strict";

function getCurrentPosition() {

  return new Promise( ( resolve, reject ) => {

    navigator.geolocation.getCurrentPosition(
      ( position ) => {
        resolve( position.coords );
      },
      () => {
        reject();
      }
    );

  } );

}

const output = document.getElementById( "output" );

getCurrentPosition()
  .then( ( c ) => {
    return Promise.resolve( c.latitude + ", " + c.longitude );
  } )
  .then( ( text ) => {
    output.textContent = text;
  } )
  .catch( () => {
    output.textContent = "Failed!";
  } );
  
