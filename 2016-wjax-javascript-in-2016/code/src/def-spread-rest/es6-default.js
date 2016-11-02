#!/usr/bin/env ../../node-babel.sh

function formatMoney( value, currency = "$" ) {
  return value.toFixed( 2 ) + currency;
}

console.log( formatMoney( 42.99, "€" ) );
// > 42.99€

console.log( formatMoney( 42.99 ) );
// > 42.99$
