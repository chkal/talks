"use strict";

function requestPosition() {

  return new Promise( ( resolve, reject ) => {

    navigator.geolocation.getCurrentPosition(
      ( position ) => {
        resolve( position.coords );
      },
      ( error ) => {
        reject( error );
      }
    );

  } );

}

const output = document.getElementById( "output" );

requestPosition()
  .then( coords => {
    output.textContent = coords.latitude + ", " + coords.longitude;
  } )
  .catch( error => {
    output.textContent = "Error: " + error.message;
  } );
